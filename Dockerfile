FROM node:8.11.3-alpine
MAINTAINER jeanycyang

RUN mkdir -p /var/www/app
WORKDIR /var/www/app

COPY ./package.json ./package-lock.json /var/www/app/

RUN npm install

COPY . /var/www/app

EXPOSE 8080
CMD ["npm", "start"]
