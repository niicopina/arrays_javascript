class Drunk {
    constructor(name, limit){
        this.name = name
        this.limit = limit
        this.beers = []
        this.liquid = 0
    }
    drink(beer){
        this.beers.push(beer)
        this.liquid += beer.quantity
        console.log(this.name + "ha bebido una cerveza" + beer.name + " liquido en el cuerpo " + this.liquid)
        if(this.liquid >= this.limit){
            this.discharge()
        }
    }
    discharge(){
        console.log(this.name + " ha tenido que ir al baño")
        this.liquid = 0
    }
}
let hector = new Drunk('Hector')
console.log(hector.name)