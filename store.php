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

if(!preg_match("#^\d+$#", $areaId) || !preg_match("#^\d+$#", $bossId) || !preg_match("#^\d+$#", $partyDps) || !preg_match("#^\d+$#", $fightDuration)){
die();
}


$json["timestamp"] = $time;
$json["ip"] = hash("sha512", $_SERVER["REMOTE_ADDR"]);

$filename = $partyDps.".".$fightDuration.".".$time.".".$uniqid;
file_put_contents($directory.$filename.".json",json_encode($json));

///////////////////////////////////////////////
///TODO exec json schemas + integrity check////
//TODO In the current state, you can literally upload movie x) and easily ddos & take down the server. Crap
///////////////////////////////////////////////

exec("7z a -t7z -m0=lzma -mx=9 -mfb=64 -md=32m -ms=on ".$directory.$filename.".7z ".$directory.$filename.".json");
$container = $region.".".$areaId.".".$bossId;
exec('source /home/http/openrc.sh && swift post --header  "X-Container-Read: .r:*,.rlistings" '.$container);
exec('source /home/http/openrc.sh && swift --object-name '.$filename.'.7z upload '.$container.' '.$directory.$filename);


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
        return $server_details[1];
      }

      // process the line read.
    }

    fclose($handle);
  } 

  return NULL;

}




