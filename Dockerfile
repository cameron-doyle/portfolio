FROM joseluisq/static-web-server:latest

ARG BUILD_VERSION

COPY . /public

# Replace BUILD_VERSION placeholder with actual version in HTML
RUN VERSION="${BUILD_VERSION:-$(date +%s)}" && \
    sed "s|BUILD_VERSION|${VERSION}|g" /public/index.html > /tmp/index.html && \
    mv /tmp/index.html /public/index.html

EXPOSE 80