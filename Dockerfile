FROM joseluisq/static-web-server:latest

ARG BUILD_VERSION

COPY . /public

# Replace BUILD_VERSION placeholder with actual version in HTML
RUN if [ -n "$BUILD_VERSION" ]; then \
      sed -i "s/BUILD_VERSION/$BUILD_VERSION/g" /public/index.html; \
    else \
      sed -i "s/BUILD_VERSION/$(date +%s)/g" /public/index.html; \
    fi

EXPOSE 80