#Created By : Ali Rasapour - 2020
#Base Image
FROM ubuntu:latest


#Install Dependency and Upgrade Ubuntu
RUN apt-get update -y
RUN apt-get install nodejs -y
RUN apt-get install git-core curl build-essential openssl libssl-dev -y
RUN curl -L https://npmjs.org/install.sh | sh
RUN apt-get install git -y
RUN apt-get clean


#Clone Github and build Project
RUN  git clone https://github.com/alirasapour/files.git
WORKDIR /files/
RUN npm i


#Port Configuration and Start Project
EXPOSE 8080
CMD [ "node", "server.js" ]