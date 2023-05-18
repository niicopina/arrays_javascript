let number = 4

function edit(num, value){
    num = value
    console.log('el valor interno es: '+ num)
}
edit(number, 10)
console.log('el valor externo es: '+ number)

class A{
    constructor(number){
        this.number = number
    }
}
let a = new A(4)
function editObject(obj, value){
    obj.number = value
    console.log('el valor interno es: '+ obj.number)
}