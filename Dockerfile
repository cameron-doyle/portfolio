FROM joseluisq/static-web-server:latest

ARG BUILD_VERSION

COPY . /public
COPY replace-version.sh /tmp/replace-version.sh

# Replace BUILD_VERSION placeholder with actual version in HTML
RUN chmod +x /tmp/replace-version.sh && \
    /tmp/replace-version.sh "${BUILD_VERSION}"

EXPOSE 80