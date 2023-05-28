const names = ['Ana', 'Alejandro', 'Ariel', 'Pablo',
 'John', 'Willy', 'Sergio', 'Ramiro', 'Gabriel', 'Fabrizio', 'Elian', 'Milagros', 'Marco']

//modo estructurado
function searchFirstLetter(collection, letter){
    const newCollection = []

    for(const word of collection){
        if(word[0].toUpperCase() === letter.toUpperCase()){
            newCollection.push(word)
        }
    }
    return newCollection
}

console.log(searchFirstLetter(names, 'a'))

//funciones ya existentes de js
function searchFirstLetter2(collection, letter){
    const char = letter.toUpperCase()
    const newCollection = collection.filter((word)=> 
        word[0].toUpperCase() === char
    )
    return newCollection
}
console.log(searchFirstLetter2(names, 'a'))