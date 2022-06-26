FROM node:16

WORKDIR /app

COPY package.json yarn.lock ./

RUN set -ex \
  && apt update && apt install -y libssl-dev openssl ssl-cert \
  && yarn install

COPY . .

EXPOSE 3000
EXPOSE 6006

USER node