class Queue{
    #items = []

    enqueue(item){
        this.#items.push(item)
    }
    dequeue(){
        return this.#items.shift()
    }
    isEmpty(){
        return this.#items.length === 0
    }
    peek(){
        return this.#items[0]
    }
    size(){
        return this.#items.length
    }
    getItems(){
        return [...this.#items]
    }
}

const queue = new Queue()
queue.enqueue('pedo')
queue.enqueue('asdf')
queue.enqueue('agfd')
queue.enqueue('dfhg')
//console.log(queue.peek())
queue.dequeue()

const queueRequest = new Queue()

const divReq = document.getElementById('req')
const divResult = document.getElementById('result')
const url = 'http://jsonplaceholder.typicode.com/posts'
let i = 1

function add(){
    queueRequest.enqueue(i++)
    showReq()
}
async function request(){
    while(!queueRequest.isEmpty()){
        const res = await fetch(url+'/'+queueRequest.dequeue())
        const data = await res.json()
        await new Promise(r=> setTimeout(r, 1000))
        showReq()
        divResult.innerHTML = `<p>${data.id} ${data.title}</p>` + divResult.innerHTML
    }
}
function showReq(){
    const items = queueRequest.getItems()
    if(items.length === 0){
        divReq.innerHTML = 'sin solicitudes'
        return
    }
    divReq.innerHTML = ''
    items.forEach(item => divReq.innerHTML += `${item} |`)
}