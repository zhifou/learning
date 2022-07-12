#!/usr/bin/env bash

set -e

export PATH=$NODEJS_14_15_4_BIN:$YARN_1_22_4_BIN:$PATH

echo "node $(node -v)"
echo "npm $(npm -v)"
echo "yarn $(yarn -v)"

rm -rf dist output

NODE_ENV=development yarn install --production=false
NODE_ENV=production yarn build "$@"

mkdir output

cd dist

tar czf ../output/bundle.tar.gz ./

cd ..

echo "build success"
