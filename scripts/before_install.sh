#!/bin/bash
DIR="/home/ec2-user/React-Ecommerce"
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
else
  echo "Creating ${DIR} directory"
  mkdir "$DIR"
fi
