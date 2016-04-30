<?php
 header("Access-Control-Allow-Origin: https://storage.sbg1.cloud.ovh.net");
$region = $_GET["region"];
$areaId = $_GET["areaId"];
$bossId = $_GET["bossId"];
$file = $_GET["file"]
?>

<html>
<head>
<script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
<script src="/bower_components/lzma/src/lzma.js"></script>
<script src="/bower_components/lzma/src/lzma_worker.js"></script>
</head>
<body>
<script type="text/javascript">


 var ajax = new XMLHttpRequest();
ajax.open("GET", '<?php echo "bypass-cors.php?url=$region.$areaId.$bossId&file=$file" ?>', true);
    ajax.responseType = "arraybuffer";
    
    ajax.onload = function () {
        /// LZMA-JS can read Uint8Array directly.
var on_finish = function(result, error){ $("#raw_fight").append(result);};
var on_progress = function(percent){};
LZMA.decompress(new Uint8Array(ajax.response), on_finish, on_progress);
    };
    
    ajax.send();
</script>

<pre id="raw_fight">
</pre>

</body>
</html>
