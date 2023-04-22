console.log('Antes de la ejecución')

getInfo().then(res => {
    console.log(res)
    console.log('Luego de la ejecución')
})

async function getInfo(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json  = await response.json()
    return json
}