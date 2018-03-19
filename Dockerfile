FROM node:carbon

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 
RUN npm install -g webpack@1.13.2

ENV NODE_ENV=prod

COPY . .

RUN webpack

EXPOSE 3000

ENV MONGO_URL=$MONGO_URL
CMD node server/bin/www
