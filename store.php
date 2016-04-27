<?php

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
$bossId = $json["bossId"];
$partyDps = $json["partyDps"];
$region = getRegion($json);
if($region === NULL) die();
$fightDuration = $json["fightDuration"];
$json = hash_name($json);

if(!preg_match("#^\d+$#", $areaId) || !preg_match("#^\d+$#", $bossId) || !preg_match("#^\d+$#", $partyDps) || !preg_match("#^\d+$#", $fightDuration)){
  die();
}

$json["timestamp"] = $time;
$filename = $partyDps.".".$fightDuration.".".$time.".".$uniqid;
file_put_contents($directory.$filename.".json",json_encode($json));

///////////////////////////////////////////////
///TODO exec json schemas + integrity check////
///////////////////////////////////////////////

exec("7z a -t7z -m0=lzma -mx=9 -mfb=64 -md=32m -ms=on ".$directory.$filename.".7z ".$directory.$filename.".json");
$container = $region.".".$areaId.".".$bossId;

//openrc.sh => set environnement variable only
exec('source /home/http/openrc.sh && swift post --header  "X-Container-Read: .r:*,.rlistings" '.$container);
exec('source /home/http/openrc.sh && swift --object-name '.$filename.'.7z upload '.$container.' '.$directory.$filename);
unlink($directory.$filename.".7z");
unlink($directory.$filename.".json");

function hash_name($json){
  $number_members = count($json["members"]);
  for($i = 0; $i < $number_members; $i++){
    $json["members"][$i]["playerName"] = hash("sha512", $json["members"][$i]["playerName"]);
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
