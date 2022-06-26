FROM node:16

WORKDIR /app

COPY package.json yarn.lock ./

RUN npm ci --silent

COPY . .

EXPOSE 3000
EXPOSE 6006

USER node