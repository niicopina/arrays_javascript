/* numbers = [2,3,4]
numbers2 = [1, ...numbers, 5]

numbers3 = [...numbers2]

numbers3.push(6) */

/* objectNumbers = {...numbers2}
console.log(objectNumbers)

console.log(multiplicar(...numbers2))
function multiplicar(a, b, c, d, e){
    return a*b*c*d*e
} */

/* let person = {name: 'Nicolao', age: 27}
let person2 = { ...person}
person2.age = 28
console.log(person)
console.log(person2) */

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

let fn = function(){//Funcion de primer orden
    console.log('Hellooo')
}
                                //Dentro de la funcion de ord sup le pasamos como valor la funcion de 1er orden
                                //se le asigna a some(f) y luego f es llamada dentro de la function
function some(f){//Funcion de orden superior
    console.log('algo antes')
    f()
    console.log('algo despues')
}
some(fn)                        //al ser fn(la fun de 1er orden) el valor de some(), 'f' tomará el valor de fn 

showDom('array1', beers)

function show(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
 function showDom(element){
    document.getElementById(element).innerHTML = "";

    for(let i=0; i<arr.length; i++){
        document.getElementById(element).innerHTML += 
        `<div> 
            ${arr[i].name} 
            $${arr[i].price}
            (${arr[i].alcohol})    
        </div>`
    }
 }