class Shop {
    constructor(name, limit, callback){
        this.name = name
        this.limit = limit
        this.prendas = []
        this.gastado = 0
        this.callback = callback
    }
    compra(prenda, otherAction){
        this.prendas.push(prenda)
        this.gastado += prenda.precio
        console.log(this.name+' ha comprado la siguiente prenda: '+prenda.name+' por $'+prenda.precio)
        if(this.gastado >= this.limit){
            this.cobrarSueldo()
        }
        if(otherAction){
            otherAction()
        }
    }
    cobrarSueldo(){
        console.log(this.name+' ha tenido que esperar a cobrar el sueldo nuevamente :(')
        this.gastado = 0
        this.callback
        console.log('vuelve a salir con platita pa gastar')
    }
}