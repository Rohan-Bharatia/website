#!/bin/bash

set -e

wasm-pack build --target web
trunk serve
