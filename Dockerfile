FROM node:18.12.0-alpine3.16

USER node

WORKDIR /home/node/app

EXPOSE 3000

#RUN chmod 755 ./.docker/entrypoint.sh
