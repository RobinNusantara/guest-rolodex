FROM node:21-alpine3.18

WORKDIR /usr/app

COPY . .

RUN npm install --production

RUN npm run build

CMD ["node", "dist/main.js"]

EXPOSE 3000
