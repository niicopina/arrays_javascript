const beers = ['Andes', 'Corona', 'Patagonia', 'Salta']


let wines = ['Luigi Bosca', 'Nieto Senetiner', 'Trumpeter', 'Benjamin']

//metodo MUTABLE - modifican el estado
beers.push('Heineken')
beers.unshift('Grolsh')
beers.splice(2, 0, "Antares") // el segundo parametro sirve para eliminar si se selecciona de 1 para arriba
beers.fill('Artesanal', 0, beers.length-1)




/* let b = beers.pop() //regresa el ultimo elemento pero lo elimina
let b2 = beers.shift() //regresa el primer elemento pero lo elimina
 */


//metodo INMUTABLE
const alcoholDrinks = beers.concat(wines)
alcoholDrinks.push('Callia')
const beers2 = beers.slice(0, 2)

showDom('array1', beers)
showDom('array2', alcoholDrinks)


//HELPERS --------------------------------
function show(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
 function showDom(element){
    document.getElementById(element).innerHTML = "";

    for(let i=0; i<arr.length; i++){
        document.getElementById(element).innerHTML += 
        `<div> ${arr[i]} </div>`
    }
 }