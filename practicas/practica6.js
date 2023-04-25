class CustomerService {
    constructor(name, limit, callback){
        this.name = name
        this.limit = limit
        this.tasks = []
        this.timer = 0
        this.callback = callback
    }
    work(task, charlar){
        this.tasks.push(task)
        this.timer += task.quantity
        console.log(this.name + ' ha realizado la tarea '+task.name+', le llevó'+task.quantity+' minutos')
        if(this.timer >= this.limit){
            this.descansar()
        }
        if(charlar){
            charlar()
        }
    }
}

let nico = {
    name: 'nico',
    limit: 180,
    callback: function(){
        console.log('se toma un cafecito')
    },
    tasks: [],
    timer: 0

}

let cs = new CustomerService('Fran', 180)

task1 = {name: 'Cafe del día', quantity: 10}
task2 = {name: 'Jarabes', quantity: 15}
task3 = {name: 'Hielo', quantity: 20}
task4 = {name: 'Tapas y Vasos', quantity: 25}
task5 = {name: 'Condiment y mesas', quantity: 30}
task6 = {name: 'Bolsas', quantity: 35}
task7 = {name: 'Cremas', quantity: 35}
task8 = {name: 'Jugos', quantity: 20}