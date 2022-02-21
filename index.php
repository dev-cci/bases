<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bases</title>
</head>
<body>

<div id="mon-perso">
    <div id="nom"></div>
    <div id="age"></div>
    <div id="chaussures"></div>
</div>

<div id="recup-perso">
    <p>récupérer un personnage</p>
</div>

<?php

if (isset($_SESSION['test'])) {
    echo $_SESSION['test'];
}
else {
    echo 'pas de session test';
}

?>

<script src="script.js"></script>
</body>
</html>