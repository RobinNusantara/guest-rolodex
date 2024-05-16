#Builder
FROM node:16-alpine AS builder

WORKDIR /usr/app

COPY package*.json .

COPY tsconfig.json .

RUN npm install

COPY . .

RUN npm run build

#Production
FROM node:16-alpine AS prod

WORKDIR /usr/app

COPY package*.json .

RUN npm install --omit=dev

COPY --from=builder /usr/app/dist ./dist

CMD ["node", "dist/main.js"]
