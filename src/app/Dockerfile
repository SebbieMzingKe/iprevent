FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

EXPOSE 3000

ENV NODE_ENV production

CMD ["npm", "start"]
