#!/usr/bin/env bash

set -eu

cargo contract build --manifest-path highlighted_posts/Cargo.toml
cargo contract build --manifest-path hive_post/Cargo.toml
cargo contract build --manifest-path nft_badges/Cargo.toml
cargo contract build
