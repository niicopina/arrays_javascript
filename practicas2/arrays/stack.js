class Stack{
    #items = []

    push(item){
        this.#items.push(item)
    }
    pop(){
        return this.#items.pop
    }
    peek(){
        return this.#items[this.#items.length-1]
    }
    size(){
        return this.#items.length
    }
    isEmpty(){
        return this.#items.length === 0
    }
}
const stack = new Stack()

console.log(stack.isEmpty())
stack.push('Pedro')
stack.push('Juan')
stack.push('Ruben')
console.log(stack)
console.log(stack.peek())
console.log(stack.size())
console.log(stack.isEmpty())

while(!stack.isEmpty()){
    console.log(stack.pop())
    return
}