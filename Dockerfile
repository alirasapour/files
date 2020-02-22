#Created By : Ali Rasapour - 2020
#Base Image
FROM alpine:latest

#Install Dependency and Upgrade Ubuntu
RUN apk add git


#Clone Github and build Project
RUN  git clone https://github.com/alirasapour/files.git
