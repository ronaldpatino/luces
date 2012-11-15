<?php
header('Content-Type: application/json; charset=utf8');

$luces[0]="LUZ 1 ON";
$luces[1]="LUZ 2 ON";

$b = array("success"=>"true", "data"=>array('id'=>$luces[$_GET['id']]));
echo json_encode($b);