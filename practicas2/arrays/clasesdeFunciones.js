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
    console.log('el resputado es: ', res)
}

const consultarApi = async() => {
    const [res, res2] = await Promise.all([fetch('url'), fetch('url2')])
    const resultado = await res.json()
    const resultado2 = await res2.json()
}