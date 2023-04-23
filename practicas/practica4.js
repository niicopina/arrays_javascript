const beers = [{
    name: 'heineken',
    price: 4,
    alcohol: 4.5
    },
    {
    name: 'antares',
    price: 5,
    alcohol: 4
    },
    {
    name: 'corona',
    price: 3,
    alcohol: 3
    },
    {
    name: 'grolsh',
    price: 4.5,
    alcohol: 5
    }
]

const beers2 = beers.map(element => { //metodo inmutable para crear una nueva coleccion a partir de la original
                                    // map regresa un array, con lo elementos que quieras
    return {
        name: element.name,
        price: element.price * 1.21,
        alcohol: element.alcohol
    }
})

const sum = beers.reduce((acc, curr) => acc + curr.price, 0)
console.log(sum)

/* let fn = (e) => e.price > 0; //esto es una condicionante que devuelve un booleano
console.log(beers.every(fn)) */
//Podemos usar beers.some si queremos saber si alguno no cumple con una condicion, muy util para filtrar 
//algun error dentro de los campos requeridos tal vez


/* beers.sort((a, b)=> a.alcohol - b.alcohol) // ordena por nivel alcoholico - Metodo MUTABLE

const beer = beers.filter(element => element.alcohol < 4) //filtra todos los elementos que cumplan con la condicion
console.log(beer)

beers.forEach((item, i) => {
    console.log(item)
    console.log('Index: ' + i)
}) */

showDom('array1', beers)

function show(arr) {
    for(let i=0; i<arr.length ; i++){
        console.log(arr[i])
    }
}
function showDom(element, arr){
    document.getElementById(element).innerHTML = ''
    for(let e of arr){
        document.getElementById(element).innerHTML +=
        `<div> 
            ${e.name} 
            $${e.price}
            (${e.alcohol})    
        </div>`
    }
}