//setTimeout(()=>console.log('hola un seg despues'), 1500)

const myPromise = new Promise((res, rej)=> {
    setTimeout(()=>{
        console.log('se ejecuta la promesa')
        rej('error algo paso')
        res('Pato')
    }, 1500)
})

/* myPromise
    .then(data => console.log('El dato retornado por la promesa es: ' + data))
    .catch(error=> console.error(error)) */

//API fetch promesa
/* fetch("https://jsonplaceholder.typicode.com/users")
    .then(data => data.json())
    .then(json => console.log(json));
 */
/* (function(){
    console.log('es ima iofe')
})(); */
(async function(){
    const dataResult = await fetch("https://jsonplaceholder.typicode.com/users")
})();