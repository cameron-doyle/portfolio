FROM joseluisq/static-web-server:latest

ARG COMMIT_SHA

COPY . /public

RUN find /public -type f -name "*.html" -exec sh -c 'envsubst < "$1" > "$1.tmp" && mv "$1.tmp" "$1"' _ {} \;

EXPOSE 80