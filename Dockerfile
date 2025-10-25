FROM joseluisq/static-web-server:latest

ARG COMMIT_SHA

COPY . /public

RUN find /public -type f -name "*.html" -exec sh -c 'sed -i "s|\${COMMIT_SHA}|'"$COMMIT_SHA"'|g" "$1"' _ {} \;

EXPOSE 80