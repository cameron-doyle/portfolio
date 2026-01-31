FROM joseluisq/static-web-server:latest

ARG BUILD_VERSION

COPY . /public

# Replace BUILD_VERSION placeholder with actual version in HTML
RUN if [ -n "$BUILD_VERSION" ]; then \
      sed "s/BUILD_VERSION/$BUILD_VERSION/g" /public/index.html > /tmp/index.html && \
      mv /tmp/index.html /public/index.html; \
    else \
      sed "s/BUILD_VERSION/$(date +%s)/g" /public/index.html > /tmp/index.html && \
      mv /tmp/index.html /public/index.html; \
    fi

EXPOSE 80