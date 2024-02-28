#!/bin/bash -l

tsc
tar -czvf seller-app-frontend.tar.gz build node_modules package.json package-lock.json .env*
scp seller-app-frontend.tar.gz bitnami@15.207.220.151:~/app/saif/seller-app-frontend
ssh bitnami@15.207.220.151 "cd ~/app/saif/seller-app-frontend; tar -xzvf seller-app-frontend.tar.gz"
