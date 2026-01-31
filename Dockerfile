# Building stage
FROM alpine AS builder

ARG BUILD_VERSION

COPY . /public

RUN mv /public/js/main.js /public/js/main.$BUILD_VERSION.js
RUN mv /public/css/main.css /public/css/main.$BUILD_VERSION.css

RUN sed -i "s/main.js/main.$BUILD_VERSION.js/" /public/index.html 
RUN sed -i "s/main.css/main.$BUILD_VERSION.css/" /public/index.html


# Copy to static web server
FROM joseluisq/static-web-server:latest

COPY --from=builder /public /public

EXPOSE 80