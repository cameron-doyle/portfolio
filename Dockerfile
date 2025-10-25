FROM joseluisq/static-web-server:latest

ARG COMMIT_SHA

COPY . /public

EXPOSE 80