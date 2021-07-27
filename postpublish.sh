#!bash

PACKAGE_VERSION=$(cat package.json | grep "version" | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[[:space:]]')
echo $PACKAGE_VERSION
git tag v$PACKAGE_VERSION -m "https://www.npmjs.com/package/@orda-io/orda-integer/v/$PACKAGE_VERSION"
git push --tags