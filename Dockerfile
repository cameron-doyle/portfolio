FROM joseluisq/static-web-server:latest

ARG BUILD_VERSION

COPY . /public

# Replace BUILD_VERSION placeholder with actual version in HTML
RUN VERSION="${BUILD_VERSION:-$(date +%s)}" && \
    test -f /public/index.html && \
    sed "s#BUILD_VERSION#${VERSION}#g" /public/index.html > /tmp/index.html.new && \
    mv /tmp/index.html.new /public/index.html

EXPOSE 80