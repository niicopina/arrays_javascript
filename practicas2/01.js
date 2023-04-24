function log(content){
    console.log(content)
}
function print(content){
    let htmlContent = ''

    content.forEach((element) => {
        htmlContent += `<div>${element.title}</div>`
    })
    myDiv.innerHTML = htmlContent
}

function printClosure(htmlElement, fields){ //utilizamos field para darle responsabilidad unica en vez de
                                        //acoplarlo a un campo en particular
    return (content)=>{ //se retorna la funcion lista para ejecutarse, asi nos da la posiblidad para mandarla
        let htmlContent = ''

        content.forEach((element) => {
            let text = fields.reduce((acc, e)=>
                acc + element[e] + ' ', '')
            htmlContent += `<div>${text}</div>`
            })
            htmlElement.innerHTML = htmlContent    //como parametro para ser usada por una fn de 1er orden
    }
}

async function request(url, fn){
    let response = await fetch(url)
    let json = await response.json()
    fn(json)                            //cuando se ejecuta aqui entra como callback
}
let url = 'https://jsonplaceholder.typicode.com/todos/'
request(url, log)
//request(url, print)
request(url, printClosure(myDiv, ['userId','title', 'id']))