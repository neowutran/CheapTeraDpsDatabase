#!/bin/bash
rm -R /home/http/processing/*
cp -R /home/http/tmp/* /home/http/processing/
rm -R /home/http/tmp/*
timestamp=$(date +"%s")
nice 7z a -t7z -m0=lzma -mx=9 -mfb=64 -md=32m -ms=on /home/http/$timestamp.7z /home/http/processing/
source /home/http/openrc.sh && swift upload TeraStatistics /home/http/$timestamp.7z
rm /home/http/$timestamp.7z
rm -R /home/http/processing/*
