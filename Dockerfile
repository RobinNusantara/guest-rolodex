#Builder
FROM node:16-alpine AS builder

WORKDIR /usr/app

COPY package*.json .

COPY tsconfig.json .

RUN npm install

COPY prisma ./prisma

COPY . .

RUN npx prisma generate

RUN npm run build

#Production
FROM node:16-alpine AS prod

WORKDIR /usr/app

COPY package*.json .

RUN npm install --omit=dev

COPY --from=builder /usr/app/dist ./dist

COPY prisma ./prisma

CMD ["node", "dist/main.js"]
