<?php

try
{
    $bdd = new PDO("mysql:host=127.0.0.1;dbname=bases;charset=utf8", 'root', '');
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (Exception $e)
{
    die('Erreur : ' . $e->getMessage());
}

// Récupérer les characters
$pdoCharactersStatement = $bdd->prepare("SELECT * FROM characters");
$pdoCharactersStatement->execute();
$characters = $pdoCharactersStatement->fetchAll();

// Récupérer les shoes
$pdoShoesStatement = $bdd->prepare("SELECT * FROM shoes");
$pdoShoesStatement->execute();
$shoes = $pdoShoesStatement->fetchAll();

// Pour chaque personnage
for ($i=0; $i < count($characters); $i++) {
    // On crée un tableau shoes vide
    $characters[$i]["shoes"] = [];
    // Pour chaque paire de chaussures
    foreach ($shoes as $shoe) {
        // Si l'id du character correspond au character_id de la paire d echaussures
        if($characters[$i]["id"] === $shoe["character_id"]){
            // On l'ajoute dans le tableau shoes du personnage
            array_push($characters[$i]["shoes"], $shoe);
        }
    }
}


echo json_encode($characters) ;

