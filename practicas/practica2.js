/* numbers = [2,3,4]
numbers2 = [1, ...numbers, 5]

numbers3 = [...numbers2]

numbers3.push(6) */

/* objectNumbers = {...numbers2}
console.log(objectNumbers)

console.log(multiplicar(...numbers2))
function multiplicar(a, b, c, d, e){
    return a*b*c*d*e
} */

let person = {name: 'Nicolao', age: 27}
let person2 = { ...person}
person2.age = 28
console.log(person)
console.log(person2)