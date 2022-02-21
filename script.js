const characters = [
    {
        'name': 'René',
        'age': 15,
        'chaussures': [
            {
                'marque': 'vans',
                'prix': 86
            },
            {
                'marque': 'artengo',
                'prix': 9
            }
        ]
    },
    {
        'name': 'Michel',
        'age': 20,
        'chaussures': [
            {
                'marque': 'Jordan',
                'prix': 12
            },
            {
                'marque': 'Reebok',
                'prix': 150
            }
        ]

    },
]

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



console.log(getCharactersCheapestShoes(characters))



function code(){
let nom = document.getElementById('nom');
let age = document.querySelector('#age');
let shoes = document.getElementById('chaussures');

characters[0].chaussures.forEach(item => {
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