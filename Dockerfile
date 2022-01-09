FROM node:lts-alpine as base

COPY ["package.json", "tsconfig.json", "package-lock.json*", "./"]

RUN npm install

COPY src ./src

RUN npm run build

FROM base as final

ENV NODE_ENV=production
WORKDIR /app

COPY --from=base --chown=node ./dist ./
COPY .env ./

RUN npm prune --production

USER node
EXPOSE 3000

CMD ["node","index.js"]