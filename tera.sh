#!/bin/bash
rm -R /home/http/processing/*
mv /home/http/tmp/* /home/http/processing/

timestamp=$(date +"%s")
rm /home/http/processed.json
echo "[" > /home/http/processed.json
first=0

for directory_path in /home/http/processing/* ; do

	directory_name=${directory_path##*/}
	#echo $directory_name

	for file_path in $directory_path/* ; do

		file_name=${file_path##*/}
		file_name=${file_name%.*}
		file_content=$(cat $file_path)

		message=""
		if (( first == 0 )); then
			first=1
			
		else
			message=","
		fi
		message="$message {\"directory\":\"$directory_name\", \"name\":\"$file_name\", \"content\": $file_content}"
		echo "$message" >> /home/http/processed.json

		#echo $file_content
		#echo $file_name

	done

done

echo "]" >> /home/http/processed.json

nice 7z a -t7z -m0=lzma -mx=9 -mfb=64 -md=32m -ms=on /home/http/$timestamp.7z /home/http/processed.json
mv /home/http/$timestamp.7z /home/http/hubic-common/TeraStatistics/


#### LEGACY ##########################################
## source /home/http/openrc.sh && swift upload --object-name $timestamp.7z TeraStatistics /home/http/$timestamp.7z
######################################################

rm -R /home/http/processing/*
