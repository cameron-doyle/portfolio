#!/bin/sh
set -e
VERSION="${1:-$(date +%s)}"
if [ ! -f /public/index.html ]; then
  echo "Error: /public/index.html not found"
  exit 1
fi
sed "s|BUILD_VERSION|${VERSION}|g" /public/index.html > /tmp/index.html.tmp || {
  echo "Error: sed failed"
  exit 1
}
mv /tmp/index.html.tmp /public/index.html || {
  echo "Error: mv failed"
  exit 1
}
echo "Successfully replaced BUILD_VERSION with ${VERSION}"
