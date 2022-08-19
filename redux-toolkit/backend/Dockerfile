FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install typescript -g

RUN npm install

COPY . .

ENV PORT=3500

CMD [ "npm", "run", "dev"]