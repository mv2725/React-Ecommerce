#!/bin/bash
DIR="/home/ubuntu/React-Ecommerce"
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
else
  echo "Creating ${DIR} directory"
  mkdir "$DIR"
fi
