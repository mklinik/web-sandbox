FROM node:current-slim

WORKDIR /usr/src/app
COPY package.json .
COPY app.ts .
COPY tsconfig.json .
RUN npm install
RUN npx tsc

EXPOSE 3000
CMD [ "node", "app.js" ]
