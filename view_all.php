<html>
<head></head>
<body>
<ul>
<?php

exec("source /home/http/openrc.sh && swift list", $result);

foreach($result as $element){
  $details = explode(".", $element);
  echo "<li><a href='view.php?region=".$details[0]."&areaId=".$details[1]."&bossId=".$details[2]."'>$element</a></li>";
}

?>

</ul>
</body>

</html>
