let array = [1,2, 'pato', true]

function showArray(array){
    console.log('---')
    for(i=o; i< array.length; i++){
        console.log(array[i])
    }
}
function showArray2(array){
    console.log('---')
    for(let item of array){
        console.log(item)
    }
}

showArray(array)
showArray2(array)

array.push('perro')
showArray2(array)

const array2 = [1,2,3,4,5,6,7,8,9,]
array2.push(10)
showArray2(array2)

