class Drunk {
    constructor(name, limit, callback){
        this.name = name
        this.limit = limit
        this.beers = []
        this.liquid = 0
        this.callback = callback
    }
    drink(beer, otherAction){
        this.beers.push(beer)
        this.liquid += beer.quantity
        console.log(this.name + " ha bebido una pinta de " + beer.name + " liquido en el cuerpo " + this.liquid)
        if(this.liquid >= this.limit){
            this.discharge()
        }
        if(otherAction){
            otherAction()
        }
    }
    discharge(){
        console.log(this.name + " ha tenido que ir al baño")
        this.liquid = 0

        this.callback()
        console.log('se sienta en su mesa nuevamente')
    }
}

beer1 = {name: 'Scotch', quantity: 750}
beer2 = {name: 'Red Ipa', quantity: 750}
beer3 = {name: 'Ipa', quantity: 500}

let nico = new Drunk('Nico', 2000, function(){ console.log('pide un Panchito')})
nico.drink(beer1)
nico.drink(beer2)
nico.drink(beer1, function(){console.log('pide un vaso de agua')})
nico.drink(beer3)
nico.drink(beer1)
nico.drink(beer2)

let negra = {
    name: 'negra',
    limit: 3000,
    callback: function(){
        console.log('bebe como albañil en verano')
    },
    beers: [],
    liquid: 0,
    drink: function(beer, otherAction){
        this.beers.push(beer)
        this.liquid += beer.quantity
        console.log(this.name + " ha bebido una pinta de " + beer.name + " liquido en el cuerpo " + this.liquid)
        if(this.liquid >= this.limit){
            this.discharge()
        }
        if(otherAction){
            otherAction()
        }
    },
    discharge(){
        console.log(this.name + " ha tenido que ir al baño")
        this.liquid = 0

        this.callback()
        console.log('se sienta en su mesa nuevamente')
    }
}
negra.drink(beer1)
negra.drink(beer2)
negra.drink(beer1, function(){console.log('pide un vaso de agua')})
negra.drink(beer3)
negra.drink(beer1)