#!/bin/bash
set -e

echo "Installing dependencies..."
npm install

echo "Setting permissions..."
chmod +x node_modules/.bin/next

echo "Building application..."
npm run build

echo "Build completed successfully!"
