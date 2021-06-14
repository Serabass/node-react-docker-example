FROM node:latest

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN echo test

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

CMD [ "npm", "run", "start" ]
