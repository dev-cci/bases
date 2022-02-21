function getCharacters() {
     return fetch('./traitement.php')
    .then(response => response.json())
    .then(result => result)
}

function getCharactersCheapestShoes(characters) {
    let result = [];

    characters.forEach(item => {
        item.chaussures.sort((a, b) => {
            return a.prix - b.prix;
        });
        result.push(item.chaussures[0].prix);

    });

    return result;
}


async function code() {
const characters = await getCharacters();
console.log(characters);
let nom = document.getElementById('nom');
let age = document.querySelector('#age');
let shoes = document.getElementById('chaussures');

characters[0].shoes.forEach(item => {
    var newDiv = document.createElement("div");
    newDiv.innerHTML = item.marque;
    shoes.appendChild(newDiv);
})

nom.innerHTML = characters[0].name
age.innerHTML = characters[0].age

}
console.log(nom);

let div = document.getElementById('recup-perso')

div.addEventListener('click', () =>{
    console.log('click');
    code();
})
