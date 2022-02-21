<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bases</title>
</head>
<body>

<?php

$table =[2, 5, 10, 15];
$result = array_filter($table, "filtre");

function filtre($number){
    return $number<10;
}
var_dump($result);
?>
<script src="script.js"></script>
</body>
</html>