#Created By : Ali Rasapour - 2020
#Base Image
FROM alpine:latest

#Install Dependency and Upgrade Ubuntu
RUN apk update
RUN apk add git
RUN apk add htop
RUN apk add  --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/v3.7/main/ nodejs=8.9.3-r1


#Clone Github and build Project
RUN  git clone https://github.com/alirasapour/files.git
WORKDIR /files/
RUN npm i


#Port Configuration and Start Project
EXPOSE 8080
CMD [ "node", "server.js" ]
