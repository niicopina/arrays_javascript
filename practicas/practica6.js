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
        console.log(this.name + ' ha realizado la tarea '+task.name+', le llevó '+task.quantity+' minutos')
        if(this.timer >= this.limit){
            this.descansar()
        }
        if(charlar){
            charlar()
        }
    }
    descansar(){
        console.log(this.name+' ha ido de break')
        this.timer = 0

        this.callback()
        console.log('... vuelve a realizar los ciclos')
    }
}

task1 = {name: 'Cafe del día', quantity: 30}
task2 = {name: 'Jarabes', quantity: 35}
task3 = {name: 'Hielo', quantity: 40}
task4 = {name: 'Tapas y Vasos', quantity: 25}
task5 = {name: 'Condiment y mesas', quantity: 60}
task6 = {name: 'Bolsas', quantity: 45}
task7 = {name: 'Cremas', quantity: 35}
task8 = {name: 'Jugos', quantity: 50}

let cs = new CustomerService('Fran', 180, function(){console.log('se toma un aguita')})
cs.work(task1)
cs.work(task2)
cs.work(task3)
cs.work(task4)
cs.work(task5)
cs.work(task6, function(){console.log('va al baño')})
cs.work(task7)
cs.work(task8)

let nico = {
    name: 'nico',
    limit: 180,
    callback: function(){
        console.log('se toma un cafecito')
    },
    tasks: [],
    timer: 0,
    work: function(task, charlar){
        this.tasks.push(task)
        this.timer += task.quantity
        console.log(this.name+' ha realizado el ciclo'+task.name+', ha tardado '+task.quantity+' minutos')
        if(this.timer >= this.limit){
            this.descansar()
        }
        if(charlar){
            charlar()
        }
    },
    descansar(){
        console.log(this.name+' ha ido de break')
        this.timer = 0
        this.callback()
        console.log('vuelve a laburar')
    }
}
nico.work(task2)
nico.work(task4)
nico.work(task6)
nico.work(task7)
nico.work(task8)
nico.work(task1)
nico.work(task3)
nico.work(task5)
