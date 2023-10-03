FROM node:lts-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run serve

EXPOSE 8080
CMD [ "npm", "run", "serve" ]