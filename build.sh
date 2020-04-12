#!/bin/sh

rm -rf dist
mkdir dist
dart2js -m --out=dist/main.js web/main.dart
cp web/index.html web/life.css dist
