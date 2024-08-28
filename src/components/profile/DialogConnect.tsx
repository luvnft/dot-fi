// import matchStore from "@/store/match";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Button, Heading, Separator, Theme } from "@radix-ui/themes";
import UserWallet from "@/config/web3/wallet";

export default function DialogConnect({ isOpen, setOpen }) {
  const navigate = useNavigate();

  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                  {/* <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#ffb905] p-6 text-left align-middle shadow-xl transition-all"> */}
                  <Dialog.Title
                    as="h2"
                    className="text-xl text-center  leading-6  !font-bold uppercase text-[#ffb905]"
                  >
                    Login
                  </Dialog.Title>
                  {/* Loading bar*/}

                  <div className="mt-4 !font-bold uppercase cursor-pointer flex flex-col ">
                    <Theme accentColor="yellow" grayColor="gray">
                      <div className="flex items-center w-full justify-center">
                        <Button
                          onClick={() => {
                            alert("Abstract Account isn't ready");
                          }}
                          //   asChild
                          size={{ initial: "3", xs: "4" }}
                          variant="surface"
                          highContrast
                          //   style={{ flexGrow: 1 }}
                          className="w-full cursor-pointer mb-2 font-bold "
                        >
                          <a>GMAIL</a>
                        </Button>
                      </div>

                      <Separator
                        orientation="horizontal"
                        size="4"
                        className="my-4"
                      />
                      <div className="flex items-center w-full  justify-center">
                        <UserWallet />
                      </div>
                    </Theme>

                    {/* <button onClick={() => navigate("/match/lobby")}>
                      Go to Lobby Match
                    </button>
                    <button onClick={() => navigate("/match/solo-demo")}>
                      Play Solo
                    </button> */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
