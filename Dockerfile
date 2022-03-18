FROM node:14.18-alpine3.12

WORKDIR /app

COPY . /app

RUN yarn && yarn build

ENTRYPOINT ["yarn", "run", "serve"]