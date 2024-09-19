#!/bin/sh
git status && git pull && git add * -f && git commit -m "exporting bs changes" && git push --force