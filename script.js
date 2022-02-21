const myArray = [
    {
        'name' : 'René',
        'age' : 15,
        'chaussures' : [
            {
                'marque' : 'vans',
                'prix' : 86
            },
            {
                'marque' :'artengo',
                'prix' : 9
            }
        ]
    },
    {
        'name' : 'Michel',
        'age' : 20,
        'chaussures' : [
            {
                'marque' : 'Jordan',
                'prix' : 12
            },
            {
                'marque' :'Reebok',
                'prix' : 150
            }
        ]

    },
]

maFonction(myArray)

function maFonction(array){
let result=[];

array.forEach(item => {
    item.chaussures.sort((a, b) => {
        return b.prix - a.prix;
    });
    result.push(item.chaussures[0].prix);

});

console.log(result)
}

