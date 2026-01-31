#!/bin/sh
VERSION="${1:-$(date +%s)}"
sed "s|BUILD_VERSION|${VERSION}|g" /public/index.html > /tmp/index.html.tmp
mv /tmp/index.html.tmp /public/index.html
