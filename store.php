<?php
//error_reporting(E_ALL);
//ini_set("display_errors", 1);

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

if(
     		$areaId != "886" &&
                $areaId != "467" &&
                $areaId != "767" &&
                $areaId != "768" &&
                $areaId != "470" &&
                $areaId != "468" && 
                $areaId != "770" && 
                $areaId != "769" &&
                $areaId != "916" &&
                $areaId != "969" && 
		$areaId != "970" &&
		$areaId != "950"
                )
{
   die();
}


if(!preg_match("#^\d+$#", $areaId) || !preg_match("#^\d+$#", $bossId) || !preg_match("#^\d+$#", $partyDps) || !preg_match("#^\d+$#", $fightDuration)){
  die();
}

$json["timestamp"] = $time;
$filename = $partyDps.".".$fightDuration.".".$time.".".$uniqid;
$container = $region.".".$areaId.".".$bossId;
mkdir($directory.$container."/", 0777, true);
file_put_contents($directory.$container."/".$filename.".json",json_encode($json));

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
