FROM joseluisq/static-web-server:latest

ARG BUILD_VERSION

COPY . /public

RUN mv /public/js/main.js /public/js/main.$BUILD_VERSION.js
RUN mv /public/css/main.css /public/css/main.$BUILD_VERSION.css

RUN sed -i "s/app.js/app.$ASSET_HASH.js/" /public/index.html
RUN sed -i "s/app.css/app.$ASSET_HASH.css/" /public/index.html

EXPOSE 80