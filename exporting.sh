#!/bin/sh
git status && git pull && git add * && git commit -m "exporting bs changes" && git push --force