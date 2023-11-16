#!/bin/bash

# Navigate to the application directory
cd /home/ubuntu/React-Ecommerce


# Add npm and node to path using NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install node modules
npm install
# Start the Node.js application
npm start
