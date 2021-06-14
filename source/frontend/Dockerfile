FROM node:latest

WORKDIR /var/frontend

RUN echo test

COPY package*.json ./

RUN npm install

# COPY . .

CMD [ "npm", "run", "start" ]
