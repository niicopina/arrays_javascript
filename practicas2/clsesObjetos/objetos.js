//El objeto es una estructura de datos, contiene clases como molde
const juan = new Object() //Object es una clase
juan.name = 'Juan'
juan.age = 21
console.log(juan)

//clase
class People{
    constructor(name, lastName){ //si no uso this. los parametros name y lN solo existiran dentro del ()
        this.name = name        //this. asigna el valor a las prop del objeto
        this.lastName = lastName
    }
    hi(){
        return 'Hola soy '+this.name+' '+this.lastName
    }
    fullName(){
        return this.name + ' ' + this.lastName
    }
}
const hector = new People('Hector', 'de Leon') //por orden de aparicion se asigna al valor del constructor
console.log(hector)
console.log(hector.hi())
console.log(hector.fullName())

const pedro = new People('Pedro', 'Perez')
console.log(pedro.hi())