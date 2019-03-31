#!/bin/bash

echo Create new container...
docker-compose up -d --build

echo  Remove unused image...
docker image prune -f
