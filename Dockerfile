# イメージ指定
FROM node:12.13.0-alpine

# コマンド実行
RUN apk update && \
    apk add git && \
    npm install -g @vue/cli nuxt create-nuxt-app
