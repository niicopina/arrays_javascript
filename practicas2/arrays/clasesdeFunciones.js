function hi(){
    console.log('hola')
}

const h = hi

h()

function sum(a, b){
    return a + b
}
const s = sum
console.log(s(2, 3))

//funciones de orden superior
function some(fn){
    console.log('se hace algo antes')
    fn()
    console.log('se hace algo despues')
}
some(h)

//funcion de orden superior ejecuta funcion con parametros

function some2(fn, num1, num2){
    console.log('se hace algo antes')

    const res = fn(num1, num2)
    console.log('el ressultado es: ', res)
}

some2(s, 2, 3)

some2(function(a,b){
    return a * b
}, 6, 2)

some2((a,b)=>{
    return a * b
}, 10, 20)