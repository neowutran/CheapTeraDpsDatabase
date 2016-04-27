<?php

$region = $_GET["region"];
$areaId = $_GET["areaId"];
$bossId = $_GET["bossId"];

?>

<html>
$.get('<?php echo "https://storage.sbg1.cloud.ovh.net/v1/AUTH_a2ab8c541a2f4f82b2bc1d39f82a10be/$region.$areaId.$bossId" ?>', function(fight_list){     
  var objects = $(fight_list).find('object');

  objects.sort(function(a, b){
     var name1 = $(a).attr('name');
     var name2 = $(b).attr('name');
     var dps1 = name1.split(".")[0];
     var dps2 = name2.split(".")[0]; 
     return (parseInt(dps1) - parseInt(dps2));
  });

  objects.each(function(i,v){
    console.log($(v).attr('name'));
  });
});   
</html>
