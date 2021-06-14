FROM node:latest

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN echo test

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

CMD ["npx", "nodemon", "--legacy-watch", "-w", "/var/app/src", "-x", "npx ts-node src/app.ts"]
