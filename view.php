<?php
$region = $_GET["region"];
$areaId = $_GET["areaId"];
$bossId = $_GET["bossId"];

?>

<html>
<head>
<script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
</head>
<body>
<script type="text/javascript">
$.get('<?php echo "bypass-cors.php?url=$region.$areaId.$bossId" ?>', function(fight_str){     
  var list = fight_str.split("\n");

  list.sort(function(a, b){
     var dps1 = a.split(".")[0];
     var dps2 = b.split(".")[0]; 
     return (parseInt(dps1) - parseInt(dps2)) * -1;
  });
   $.each(list, function(index, value){
   if(value == ""){return;}
  $("#fight").append("<li><a href='view_fight.php?region=<?php echo $region; ?>&areaId=<?php echo $areaId; ?>&bossId=<?php echo $bossId; ?>&file="+value+"' >"+value+"</a></li>");
});

});   
</script>

<ol id="fight">
</ol>

</body>
</html>
