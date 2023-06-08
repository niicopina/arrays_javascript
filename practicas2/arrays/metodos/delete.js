const names = ['Ana', 'Alejandro', 'Ariel', 'Pablo',
 'John', 'Willy', 'Sergio', 'Ramiro', 'Gabriel', 'Fabrizio', 'Elian', 'Milagros', 'Marco']

 // modo estructurado
 function removeName(collection, name){
    const newCollection = []
    for(const word of collection){
        if(word !== name){
            newCollection.push(word)
        }
    }
    return newCollection
 }
 // funcuines existentes 
 function removeName2(collection, name){
    return collection.filter((item)=> item !== name)
 }
 console.log(removeName(names, 'Alejandro'))
 console.log(removeName2(names, 'Alejandro'))