#!/usr/bin/env bash

echo "Copy libobs data to electron resource folder for development used..."
rm -rf node_modules/electron/dist/Electron.app/Contents/Resources/data
mkdir node_modules/electron/dist/Electron.app/Contents/Resources/data
cp -r node_modules/obs-node/prebuild/obs-studio/data/libobs node_modules/electron/dist/Electron.app/Contents/Resources/data
