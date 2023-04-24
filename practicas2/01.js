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

async function request(url, fn){
    let response = await fetch(url)
    let json = await response.json()
    fn(json)
}
let url = 'https://jsonplaceholder.typicode.com/todos/'
request(url, log)
request(url, print)