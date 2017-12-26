FROM node:9.3.0-alpine

ARG APP_DIR=/app
WORKDIR $APP_DIR

COPY app $APP_DIR
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
