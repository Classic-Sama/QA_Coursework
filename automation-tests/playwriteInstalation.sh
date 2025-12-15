#!/bin/bash

echo "Spying on your package manager..."

if command -v apt &> /dev/null; then
    echo "I spy with, my little eye APT!!! . Installing Node.js and npm..."
    sudo apt update
    sudo apt install -y nodejs npm
elif command -v pacman &> /dev/null; then
    echo "Pacman detected, I sure hope you're not running Manjaro. Installing Node.js and npm..."
    sudo pacman -Syu --noconfirm nodejs npm
else
    echo "Bruv, i dont even know what package manage r u runnin', just google how to install Node.js and npm"
    exit 1
fi

echo "Installing Playwright..."
npm install -D @playwright/test

echo "Installing browsers for Playwright..."
npx playwright install

echo "Done and done!!! You can now run tests with 'npx playwright test'."
