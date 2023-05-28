const numbers = [1,2,3,4,5]
//forma estructurada
function sumNumber(collection, num){
    const newCollection = []
    for(let item of collection){
        newCollection.push(item + num)
    }
    return newCollection
}
//usando funciones existentes
function sumNumber2(collection, num){
    return collection.map(item => item + num)
}

console.log(sumNumber(numbers, 10))
console.log(numbers)
console.log(sumNumber2(numbers, 10))
console.log(numbers)