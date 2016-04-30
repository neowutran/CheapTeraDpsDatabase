<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

$directory = "/home/http/tmp/";
$time = time();
$date = date("Y-m-d", $time);
$uniqid = uniqid();

$raw = file_get_contents('php://input');
$json = json_decode($raw, true);
if($json === null){
  die();
}

$areaId = $json["areaId"];


//TODO REPLACE THAT WITH LIST OF ALLOWED AREA
if(intval($areaId) <= 400){
  die();
}

$bossId = $json["bossId"];
$partyDps = $json["partyDps"];
$region = getRegion($json);
if($region === NULL) die();
$fightDuration = $json["fightDuration"];
$json = modify_name($json, $region);

if(!preg_match("#^\d+$#", $areaId) || !preg_match("#^\d+$#", $bossId) || !preg_match("#^\d+$#", $partyDps) || !preg_match("#^\d+$#", $fightDuration)){
  die();
}

$json["timestamp"] = $time;
$filename = $partyDps.".".$fightDuration.".".$time.".".$uniqid;
if(file_put_contents($directory.$filename.".json",json_encode($json)) === false){
	file_put_contents("cannot write the file", $directory.$filename.".json");
}

///////////////////////////////////////////////
///TODO exec json schemas + integrity check////
///////////////////////////////////////////////

system("lzma -9 -c --stdout ".$directory.$filename.".json > ".$directory.$filename);
$hash = hash_file("sha1", $directory.$filename);
$downloaded_content_hash = "";
$container = $region.".".$areaId.".".$bossId;

//openrc.sh => set environnement variable only
exec('source /home/http/openrc.sh && swift post --header  "X-Container-Read: .r:*,.rlistings" '.$container);

for($i = 0; $i < 10; $i++){
	if($hash == $downloaded_content_hash){
		break;
	}
	$command = 'source /home/http/openrc.sh && swift upload --object-name '.$filename.'.txt '.$container.' '.$directory.$filename;
	system($command);
	$content = file_get_contents("https://storage.sbg1.cloud.ovh.net/v1/AUTH_a2ab8c541a2f4f82b2bc1d39f82a10be/".$container."/".$filename.".txt");
	$downloaded_content_hash = hash("sha1", $content);
}

unlink($directory.$filename);
unlink($directory.$filename.".json");

function modify_name($json, $region){
  if($region != "KR" && $region != "JP"){
	return $json;
  }

  $number_members = count($json["members"]);
  for($i = 0; $i < $number_members; $i++){
    $json["members"][$i]["playerName"] = "Anonymous";//hash("sha1", $json["members"][$i]["playerName"]);
  }
  return $json;
}

function getRegion($json){
  $server = $json["members"][0]["playerServer"];
  $handle = fopen("./TeraDpsMeterData/servers.txt", "r");
  if ($handle) {
    while (($line = fgets($handle)) !== false) {
      $server_details = explode(" ", $line, 4);
      if(count($server_details) < 4){
        continue;
      }
      $server_details[3] = str_replace(PHP_EOL, '', $server_details[3]);
      if($server_details[3] == $server){
        fclose($handle);
        return $server_details[1];
      }
    }
    fclose($handle);
  } 
  return NULL;
}
