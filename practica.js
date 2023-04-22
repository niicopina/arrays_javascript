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
        console.log(this.name + " ha bebido una pinta de " + beer.name + " liquido en el cuerpo " + this.liquid)
        if(this.liquid >= this.limit){
            this.discharge()
        }
    }
    discharge(){
        console.log(this.name + " ha tenido que ir al baño")
        this.liquid = 0
    }
}

beer1 = {name: 'Scotch', quantity: 750}
beer2 = {name: 'Red Ipa', quantity: 750}
beer3 = {name: 'Ipa', quantity: 500}

let nico = new Drunk('Nico', 2000)
nico.drink(beer1)
nico.drink(beer2)
nico.drink(beer1)
nico.drink(beer3)
nico.drink(beer1)
nico.drink(beer2)
