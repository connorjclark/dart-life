#!/bin/sh -ex

ssh root@hoten.cc "mkdir -p /var/www/hoten.cc/public_html/life/play/"
rsync -ahvz --delete ./dist/ root@hoten.cc:/var/www/hoten.cc/public_html/life/play/
