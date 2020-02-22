#Created By : Ali Rasapour - 2020
#Base Image
FROM alpine:latest

#Install Dependency and Upgrade Ubuntu
RUN apk add git
RUN apk add htop


#Clone Github and build Project
RUN  git clone https://github.com/alirasapour/files.git
