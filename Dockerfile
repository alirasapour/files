FROM ubuntu:v6


EXPOSE 3000

CMD [ "node", "docker-files/server.js" ]