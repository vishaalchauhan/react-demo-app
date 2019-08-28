FROM node:10.16.3-alpine
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 3000
CMD npm run buildAndStart

