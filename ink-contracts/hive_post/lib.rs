#![cfg_attr(not(feature = "std"), no_std, no_main)]

use ink::{
    env::{
        call::{build_call, ExecutionInput, FromAccountId, Selector},
        DefaultEnvironment, Error as InkEnvError,
    },
    prelude::{format, string::String, vec::Vec},
    primitives::AccountId,
    storage::Mapping,
};
use highlighted_posts::{
    HighlightedPostsError, HighlightedPostsRef, HIGHLIGHT_POST_SELECTOR,
};

#[ink::contract]
mod hive_post {

    /// Errors returned by the contract's methods.
    #[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub enum HiveBoardError {
        /// There already exists a hive for the calling account.
        HiveAlreadyExists,
        /// Hive not found.
        HiveNotFound,
        /// Value transferred was too low to pay for the listing.
        ListingCostTooLow(u128),
        /// Error returned when interacting with the `HighlightedPosts` contract.
        HighlightError(HighlightedPostsError),
        /// An interaction with the ink! environment has failed.
        InkEnvError(String),
    }

    impl From<HighlightedPostsError> for HiveBoardError {
        fn from(e: HighlightedPostsError) -> Self {
            HiveBoardError::HighlightError(e)
        }
    }

    impl From<InkEnvError> for HiveBoardError {
        fn from(e: InkEnvError) -> Self {
            HiveBoardError::InkEnvError(format!("{:?}", e))
        }
    }

    /// Struct representing a hive hive.
    #[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
    #[cfg_attr(
        feature = "std",
        derive(scale_info::TypeInfo, ink::storage::traits::StorageLayout)
    )]
    pub struct Hive {
        author: AccountId,
        posted_at: BlockNumber,
        expires_at: BlockNumber,
        text: String,
    }

    /// Defines the storage of your contract.
    //
    // There must be exactly one `#[ink(storage)]` struct.
    #[ink(storage)]
    pub struct HiveBoard {
        // Monotonically increasing counter for assigning unique IDs to
        // hives.
        id_counter: u32,
        id_map: Mapping<AccountId, u32>,
        hive_map: Mapping<u32, Hive>,
        post_authors: Vec<AccountId>,
        price_per_block_listing: u128,
        elements_count: u32,
        highlighted_posts_board: Option<AccountId>,
    }

    impl HiveBoard {
        #[ink(constructor)]
        pub fn new(price_per_block_listing: u128) -> Self {
            Self {
                id_counter: 0,
                id_map: Mapping::new(),
                hive_map: Mapping::new(),
                post_authors: Vec::new(),
                price_per_block_listing,
                elements_count: 0,
                highlighted_posts_board: None,
            }
        }

        #[ink(message)]
        pub fn create_hive(&mut self, text: String, duration: u32) -> Result<(), HiveBoardError> {
            let caller = self.env().caller();
            ensure!(!self.id_map.contains(caller), HiveBoardError::HiveAlreadyExists);

            let posted_at = self.env().block_number();
            let expires_at = posted_at + duration;

            let hive = Hive {
                author: caller,
                posted_at,
                expires_at,
                text,
            };

            self.id_counter += 1;
            self.id_map.insert(caller, &self.id_counter);
            self.hive_map.insert(self.id_counter, &hive);
            self.post_authors.push(caller);

            Ok(())
        }


        #[ink(message)]
        pub fn get_hive(&self, account_id: AccountId) -> Result<Hive, HiveBoardError> {
            let hive_id = self.id_map.get(account_id).ok_or(HiveBoardError::HiveNotFound)?;
            let hive = self.hive_map.get(hive_id).ok_or(HiveBoardError::HiveNotFound)?;
            Ok(hive)
        }

        #[ink(message)]
        pub fn set_highlighted_posts_board(&mut self, contract_address: AccountId) {
            self.highlighted_posts_board = Some(contract_address);
        }

        #[ink(message)]
        pub fn highlight_post(&mut self, post_id: u32) -> Result<(), HiveBoardError> {
            let highlighted_posts_board = self.highlighted_posts_board
                .ok_or(HiveBoardError::HiveNotFound)?;

            let call = build_call::<DefaultEnvironment>()
                .call_type(
                    ink::env::Call::new()
                        .callee(highlighted_posts_board)
                        .gas_limit(5000)
                        .transferred_value(0)
                )
                .exec_input(ExecutionInput::new(Selector::new(HIGHLIGHT_POST_SELECTOR))
                    .push_arg(post_id))
                .returns::<Result<(), HighlightedPostsError>>();

            let result = call.fire().map_err(HiveBoardError::from)?;

            result.map_err(HiveBoardError::from)
        }

        /// Adds new post to the "hive board".
        /// Parameters of the post are:
        /// * `expires_after` - block number until which this post should be
        ///   considered valid.
        /// * `test` - text of the new post.
        /// Accepts a value (token) transfer if the post needs to be paid for.
        ///
        /// Fails if any of the following is true:
        /// * not enough tokens have been transferred to cover the cost of
        ///   posting,
        /// * there already exists a post from the caller's account.
        ///
        /// # Note
        ///
        /// The method needs to be annotated with `payable` - only then it is
        /// allowed to receive value as part of the call.
        #[ink(message, payable)]
        pub fn post(
            &mut self,
            expires_after: BlockNumber,
            text: String,
        ) -> Result<(), HiveBoardError> {
            // There are over 20 methods available in `Self:env()` that give
            // contract access to the "blockchain context".
            let caller = Self::env().caller();

            // We can add `println!` statements that will be written to stdout
            // during the test.
            ink::env::debug_println!("`{:?}` wants to create a post that expires after `{:?}` blocks \
                with the text `{:?}`", caller, expires_after, text);

            if self.id_map.contains(&caller) {
                // Contract's methods can return `Result::Err` variant
                // so that the caller can handle it and recover. This does not
                // fail and rollback the transaction.
                return Err(HiveBoardError::HiveAlreadyExists);
            }

            // Check how much tokens have been transferred as part of the
            // transaction.
            let transferred_amount = self.env().transferred_value();

            let listing_cost = self
                .price_per_block_listing
                .checked_mul(expires_after as u128)
                .unwrap_or(u128::MAX);

            // Returning `Result::Err` reverts callee's state but makes it
            // simpler for the caller to handle an error - in contract to
            // `panic!` that doesn't contain any additional
            // information and is simply `CalleeTrapped`.
            if transferred_amount < listing_cost {
                return Err(HiveBoardError::ListingCostTooLow(
                    listing_cost,
                ));
            }

            let curr_block_number = Self::env().block_number();
            let event =
                self._post(curr_block_number, expires_after, caller, text);

            // Only if user asked to highlight the post.
            if expires_after != 0 {
                self.highlight_post(event.author, event.id, listing_cost)?;
                self.reimburse(caller, transferred_amount - listing_cost);
            }
            Self::emit_event(Self::env(), Event::HivePosted(event));
            Ok(())
        }

        /// Deletes the post from the caller (if exists).
        #[ink(message)]
        pub fn delete(&mut self) -> Result<(), HiveBoardError> {
            let author = Self::env().caller();
            let hive_id = self.delete_hive(author)?;
            match self.delete_highlight(author) {
                Ok(()) => {
                    Self::emit_event(
                        Self::env(),
                        Event::HiveRemoved(HiveRemoved {
                            author,
                            id: hive_id,
                        }),
                    );
                    Ok(())
                }
                Err(HiveBoardError::HighlightError(
                    HighlightedPostsError::HighlightNotFound,
                )) => Ok(()),
                Err(err) => {
                    // It is fine if we don't find the hive on the
                    // highlighted posts board but other
                    // errors should be propagated upwards.
                    Err(err)
                }
            }
        }

        /// Returns the post created by the caller.
        #[ink(message)]
        pub fn get_by_account(
            &self,
            account_id: AccountId,
        ) -> Option<Hive> {
            self.get_value(&account_id)
        }

        /// Returns the post referenced by the ID of the hive.
        #[ink(message)]
        pub fn get_by_id(&self, id: u32) -> Option<Hive> {
            self.hive_map.get(&id)
        }

        /// Returns an address of `highlighted_posts` board contract
        #[ink(message)]
        pub fn get_highlights_board(&self) -> Option<AccountId> {
            self.highlighted_posts_board
        }

        // To terminate a contract means to delete it from the blockchain
        // storage. One can choose whether to transfer the contract's
        // balance to others, for example a caller.
        /// Terminates the contract, iff the board is empty, with the caller as
        /// beneficiary.
        #[ink(message)]
        pub fn teminate_contract(&mut self) {
            if self.elements_count == 0 {
                self.env().terminate_contract(self.env().caller());
            }
        }

        /// Returns a price for highlighting the post for 1 block.
        #[ink(message)]
        pub fn get_highlight_price_per_block(&self) -> u128 {
            self.price_per_block_listing
        }

        /// Returns all currently visible posts' authors.
        #[ink(message)]
        pub fn get_posts_authors(&self) -> Vec<AccountId> {
            self.post_authors.clone()
        }

        /// Reimburses the caller with overpaid tokens.
        /// Panics if the transfer fails - this means this contract's balance is
        /// too low which means something went wrong.
        fn reimburse(&self, recipient: AccountId, amount: u128) {
            if Self::env().transfer(recipient, amount).is_err() {
                panic!("failed to reimburse the caller")
            }
        }

        // Private method that doesn't need to interact with the "blockchain
        // env". Useful for testing where there's a layer of a logic
        // that can't be easily mocked.
        fn insert_hive(
            &mut self,
            caller: &AccountId,
            hive: Hive,
        ) -> u32 {
            let hive_id = self.id_counter;
            self.id_map.insert(caller, &hive_id);
            self.hive_map.insert(hive_id, &hive);
            self.id_counter = hive_id + 1;
            self.post_authors.push(caller.clone());
            hive_id
        }

        fn get_value(&self, caller: &AccountId) -> Option<Hive> {
            if let Some(hive_id) = self.id_map.get(caller) {
                let hive = self.hive_map.get(hive_id).unwrap_or_else(|| {
                    // Contracts can also panic - this WILL fail and rollback the
                    // transaction. Caller can still handle it and
                    // recover but there will be no additional information about the error available. 
                    // Use when you know something *unexpected* happened.
                    panic!(
                        "broken invariant: expected entry to exist for the caller"
                    )
                });
                Some(hive)
            } else {
                None
            }
        }

        fn delete_hive(
            &mut self,
            caller: AccountId,
        ) -> Result<u32, HiveBoardError> {
            match self.id_map.get(caller) {
                None => return Err(HiveBoardError::HiveNotFound),
                Some(hive_id) => {
                    self.hive_map.remove(hive_id);
                    self.id_map.remove(caller);
                    self.elements_count -= 1;
                    self.post_authors.retain(|author| author != &caller);
                    Ok(hive_id)
                }
            }
        }

        fn _post(
            &mut self,
            curr_block: BlockNumber,
            expires_after: BlockNumber,
            author: AccountId,
            text: String,
        ) -> HivePosted {
            let expires_at = curr_block + expires_after;

            let hive = Hive {
                author,
                posted_at: curr_block,
                expires_at,
                text,
            };
            let hive_id = self.insert_hive(&author, hive);
            self.elements_count += 1;
            HivePosted {
                author,
                expires_at,
                id: hive_id,
            }
        }

        /// Calls the `HighlightsBoard` contract to highlight the post by
        /// `author`.
        // Constructs the cross-contract call using the manual builder pattern.
        //
        // It's more verbose than the `*Ref` pattern and we need to be more
        // careful to use proper types.
        fn highlight_post(
            &self,
            author: AccountId,
            id: u32,
            cost: u128,
        ) -> Result<(), HiveBoardError> {
            if let Some(highlight_board) = self.highlighted_posts_board {
                // The potential call result here is a three layers of `Result`,
                // where each layer has a different error. We're
                // handling each explicitly below, for the example purposes, but
                // you can also choose to short-circuit with `?`.
                let call_result: Result<Result<(), HighlightedPostsError>, ink::LangError> = build_call::<DefaultEnvironment>()
                    .call(highlight_board) // Address of the contract we want to call
                    .exec_input(
                        ExecutionInput::new(Selector::new(
                            HIGHLIGHT_POST_SELECTOR, /* Selector tells ink!
                                                      * which method on that
                                                      * contract to call */
                        ))
                        .push_arg(author) // Pass in arguments of the method.
                        .push_arg(id),
                    )
                    .transferred_value(cost) // We can transfer tokens forward to another contract.
                    .returns::<Result<Result<(), HighlightedPostsError>, LangError>>()
                    .invoke();

                match call_result {
                    // An error emitted by the smart contracting language.
                    // For more details see ink::LangError.
                    Err(lang_error) => {
                        panic!("Unexpected ink::LangError: {:?}", lang_error)
                    }
                    // `Result<(), HighlightedPostsError>` is the return type of
                    // the method we're calling.
                    Ok(Err(contract_call_error)) => {
                        return Err(HiveBoardError::from(
                            contract_call_error,
                        ))
                    }
                    Ok(Ok(_unit)) => return Ok(()),
                }
            }
            Ok(())
        }

        // Constructs the cross-contract call using the `*Ref` pattern.
        // More type-safe than the manual builder pattern. If you expanded the
        // `#[ink::contract]` macro for this contract, you will find
        // that `from_account_id` function constructs the `build_call` just like
        // we did manually in `fn highlight_post`.
        //
        // NOTE: Currently `*Ref` wrapper does not support transferring tokens,
        // unlike the builder pattern with `transferred_value` method
        // and that's why `highlight_post` uses the builder pattern.
        fn delete_highlight(
            &self,
            author: AccountId,
        ) -> Result<(), HiveBoardError> {
            if let Some(highlight_board) = self.highlighted_posts_board {
                <HighlightedPostsRef as FromAccountId<
                    super::hive_board::Environment,
                >>::from_account_id(highlight_board)
                .delete_by_author(author)?
            }
            Ok(())
        }

        // As soon as another contract that emits events is introduced as
        // dependency, see `highlighted_posts` in `Cargo.toml`,
        // compilation fails as it can't resolve which event is going to be
        // returned from the contract.
        // To verify, replace calls to `Self::emit_event` with
        // `self::env().emit_event(_)`.
        fn emit_event<EE>(emitter: EE, event: Event)
        where
            EE: EmitEvent<HiveBoard>,
        {
            emitter.emit_event(event);
        }
    }

    /// Defines an event that is emitted every time value is incremented.
    #[ink(event)]
    pub struct HivePosted {
        // `topic` tag allows simplifies lookup of the events.
        // If you mark field as `topic` it will be indexed.
        //
        // If you don't want event to be indexed, see [`#[ink(anonymous)]`](https://use.ink/macros-attributes/anonymous/).
        #[ink(topic)]
        author: AccountId,
        expires_at: BlockNumber,
        id: u32,
    }

    #[ink(event)]
    pub struct HiveRemoved {
        #[ink(topic)]
        author: AccountId,
        id: u32,
    }
    /// Unit tests in Rust are normally defined within such a `#[cfg(test)]`
    /// module and test functions are marked with a `#[test]` attribute.
    /// The below code is technically just normal Rust code.
    #[cfg(test)]
    mod tests {
        /// Imports all the definitions from the outer scope so we can use
        /// them here.
        use super::*;

        use ink::env::test::{
            default_accounts, get_account_balance, recorded_events,
            DefaultAccounts, EmittedEvent,
        };
        use scale::Decode;

        // Returns accounts that are pre-seeded in the test database.
        // We can use them as authors for transactions.
        fn get_default_test_accounts(
        ) -> DefaultAccounts<ink::env::DefaultEnvironment> {
            default_accounts::<ink::env::DefaultEnvironment>()
        }

        // Returns balance of test account.
        fn get_balance(account_id: AccountId) -> Balance {
            get_account_balance::<ink::env::DefaultEnvironment>(account_id)
                .expect("Cannot get account balance")
        }

        // Sets caller returned by the next `Self::env().caller()` method call
        // in the contract.
        fn set_caller(caller: AccountId) {
            ink::env::test::set_caller::<ink::env::DefaultEnvironment>(caller);
        }

        const PRICE_PER_BLOCK_COST: u128 = 10;

        #[test]
        fn constructor_works() {
            // let instance = HiveBoard::new(PRICE_PER_BLOCK_COST);
            // assert_eq!(price_per_block_listing,
            // PRICE_PER_BLOCK_COST);

            let default = HiveBoard::free();
            assert_eq!(default.price_per_block_listing, 0);
        }

        #[ink::test]
        fn post_free_succeeds() {
            let accounts = get_default_test_accounts();
            let alice = accounts.alice;
            let mut instance = HiveBoard::free();
            let expire_after: BlockNumber = 100;
            let text: ink::prelude::string::String = "Text".into();
            // Setting Alice as the first caller is not strictly required as
            // it's the default for ink tests. We do it for clarity
            // though.
            set_caller(alice);
            assert!(
                instance.post(expire_after, text.clone()).is_ok(),
                "posting was expected to succeed"
            );
            let expected_hive = Hive {
                author: alice,
                posted_at: 0,
                expires_at: 100,
                text,
            };
            assert_eq!(
                instance.get_by_id(0).expect("to find hive"),
                expected_hive
            );
            assert_eq!(
                instance.get_by_account(alice).expect("to find hive"),
                expected_hive
            );
            let frank = accounts.frank;
            assert!(
                instance.get_by_account(frank).is_none(),
                "There should be no posts from Frank"
            );
        }

        #[ink::test]
        fn event_on_post() {
            let mut instance = HiveBoard::free();
            let hive = post_from_alice(&mut instance);
            // We can verify that the proper events have been emitted during the
            // call.
            let recorded_events = recorded_events().collect::<Vec<_>>();
            assert_expected_post_event(
                &recorded_events[0],
                hive.author,
                hive.expires_at,
                0,
            );
        }

        fn assert_expected_post_event(
            event: &EmittedEvent,
            expected_author: AccountId,
            expires_at_block: BlockNumber,
            expected_id: u32,
        ) {
            let decoded_event = <Event as Decode>::decode(&mut &event.data[..])
                .expect("encountered invalid contract event data buffer");
            if let Event::HivePosted(HivePosted {
                author,
                expires_at,
                id,
            }) = decoded_event
            {
                assert_eq!(author, expected_author);
                assert_eq!(expires_at, expires_at_block);
                assert_eq!(id, expected_id);
            } else {
                panic!("encountered unexpected event kind: expected `HivePosted`")
            };
        }

        fn post_from_alice(instance: &mut HiveBoard) -> Hive {
            let accounts = get_default_test_accounts();
            let alice = accounts.alice;
            let expire_after: BlockNumber = 100;
            let text: ink::prelude::string::String = "Text".into();
            let expected_hive = Hive {
                author: alice,
                posted_at: 0,
                expires_at: 100,
                text: text.clone(),
            };
            set_caller(alice);
            assert!(
                instance.post(expire_after, text).is_ok(),
                "posting was expected to succeed"
            );
            expected_hive
        }

        #[ink::test]
        fn delete_works() {
            let accounts = get_default_test_accounts();
            let alice = accounts.alice;
            let mut instance = HiveBoard::free();
            assert!(
                matches!(
                    instance.delete(),
                    Result::Err(HiveBoardError::HiveNotFound)
                ),
                "no posts from Alice expected to be found on the board"
            );
            let alice_hive = post_from_alice(&mut instance);
            assert_eq!(
                instance.get_by_account(alice).unwrap(),
                alice_hive,
                "Hive was expected to be found after posting"
            );
            set_caller(accounts.frank);
            assert!(
                matches!(
                    instance.delete(),
                    Result::Err(HiveBoardError::HiveNotFound)
                ),
                "no posts from Frank"
            );
            set_caller(accounts.alice);
            assert!(instance.delete().is_ok(), "deletion should succeed");
            assert!(
                matches!(
                    instance.delete(),
                    Result::Err(HiveBoardError::HiveNotFound)
                ),
                "second deletion should return an error"
            );
            assert!(
                instance.get_by_account(alice).is_none(),
                "expected no posts after deleting"
            );
        }

        #[ink::test]
        fn event_on_delete() {
            let mut instance = HiveBoard::free();
            let hive = post_from_alice(&mut instance);
            assert!(instance.delete().is_ok(), "deletion should succeed");
            let recorded_events = recorded_events().collect::<Vec<_>>();
            assert_expected_post_event(
                &recorded_events[0],
                hive.author,
                hive.expires_at,
                0,
            );
            // The events returned by `recored_events()` are all events emitted
            // since the beginning of the test.
            // The first event (at index 0) will be `HivePosted` by Alice
            // from the couple lines back.
            // The second event (at index 1) will be the `HiveRemoved`
            // event.
            assert_hive_removed_event(
                &recorded_events[1],
                get_default_test_accounts().alice,
                0,
            );
        }

        fn assert_hive_removed_event(
            event: &EmittedEvent,
            expected_author: AccountId,
            expected_id: u32,
        ) {
            let decoded_event = <Event as Decode>::decode(&mut &event.data[..])
                .expect("encountered invalid contract event data buffer");
            if let Event::HiveRemoved(HiveRemoved { author, id }) =
                decoded_event
            {
                assert_eq!(author, expected_author);
                assert_eq!(id, expected_id);
            } else {
                panic!("encountered unexpected event kind: expected `HiveRemoved`")
            }
        }
    }
}
