//setTimeout(()=>console.log('hola un seg despues'), 1500)

/* const myPromise = new Promise((res, rej)=> {
    setTimeout(()=>{
        console.log('se ejecuta la promesa')
        rej('error algo paso')
        res('Pato')
    }, 1500)
}) */

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
/* (async function(){
    const dataResult = await fetch("https://jsonplaceholder.typicode.com/users")
    const jsonResult = await dataResult.json();
})(); */

/* fetch('people.json')
    .then(data=data.json())
    .then(json => {
        const people = json

        console.log(people.name)
    }) */

const sale = {
    customer: 'Hector',
    total: 11000,
    items: [{
        name: '20pg monitor',
        brand: 'LG'
    },
    {
        name: 'keyboard',
        brand: 'Soul'
    },
    {
        name: 'Mouse',
        brand: 'Logitech'
    }],
    showItems(){
        this.items.forEach(i => console.log(i.name))
    },
    showInfo(){
        console.log('Sale data is: ')
        console.log(`Client: ${this.customer}, total: ${this.total}`)
        this.showItems()
    }
}
sale.showInfo()