<?php
$url = $_GET["url"];
$file = $_GET["file"];

if(preg_match("#^[A-Z]{2}\.\d+\.\d+$#", $url) != 1){
	return;
}

if(preg_match("#^\d+\.\d+\.\d+\.\w+\.[a-z]{3,4}$#", $file) != 1){
echo file_get_contents("https://storage.sbg1.cloud.ovh.net/v1/AUTH_a2ab8c541a2f4f82b2bc1d39f82a10be/".$url);
}else{
echo file_get_contents("https://storage.sbg1.cloud.ovh.net/v1/AUTH_a2ab8c541a2f4f82b2bc1d39f82a10be/".$url."/".$file);
}

