#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ec2-user/React-Ecommerce

#navigate into our working directory where we have all our github files
cd /home/ec2-user/React-Ecommerce




npm install


pm2 stop "hello"  
pm2 delete "hello"

# Start a new PM2 process
pm2 start "npm start" --name "hello"  # Replace "your-app-name" with the desired name for your app
