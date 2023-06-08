const numbers = [1,2,3,4,5]
const numbers2= [1,2,3,4,5]

//mutable, modifica el original (numbers)
function mutable(collection, num){
    for(let i = 0; i < collection.length; i++){
        collection[i] *= 2
    }
    return collection
}

//inmutable, no modifica el original
function inmutable(collection, num){
    const newNumbers = []
    for(let item of collection){
        newNumbers.push(item * num)
    }
    return newNumbers
}

const newArray = mutable(numbers, 2)
console.log(newArray)
console.log(numbers)

const newArray2 = inmutable(numbers2, 2)
console.log(newArray2)
console.log(numbers2)

class Beer{
    constructor(name, price){
        this.name = name
        this.price = price
    }
}
//modifica el original
function toUpperMutable(beer){
    beer.name = beer.name.toUpperCase()
    return beer
}
//inmutable
function toUpperInmutable(beer){
    const newBeer = {...beer} //spread operator
    //const newBeer = structuredClone(beer)
    newBeer.name = newBeer.name.toUpperCase()
    return newBeer
}

const beer = new Beer('delirium', 6)

//const newBeer = toUpperMutable(beer)
const newBeer = toUpperInmutable(beer)

console.log(newBeer)
console.log(beer)