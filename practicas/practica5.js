const fns = [
    () => console.log('soy el 1ro'),
    () => console.log('soy el 2do'),
    () => console.log('soy el 3ro'),
]
fns.forEach(element => element())


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