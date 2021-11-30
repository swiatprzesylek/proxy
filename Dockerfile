FROM node:16-alpine

RUN apk update && apk --no-cache add dumb-init openssl

WORKDIR /home/node/app

COPY package.json ./

RUN openssl req -x509 -nodes -days 3650 -subj "/C=CA/ST=QC/O=Localhost Administration, Inc./CN=localhost" -addext \
  "subjectAltName=DNS:localhost" -newkey rsa:2048 -keyout /etc/ssl/private/express-selfsigned.key -out /etc/ssl/certs/express-selfsigned.crt;

RUN npm install

COPY . .

ENTRYPOINT ["/usr/bin/dumb-init", "--"]

CMD node /home/node/app/index.js