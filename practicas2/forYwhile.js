const limit = 10
//FOR
//se definen tres parametros: el 1ro da el valor, el 2do evalua si cumple o no la condicion,
// el 3ro es lo que sucederá con i (acumula, resta?)
for(let i = 0; i < limit; i++){
    console.log('llegará hasta 9, fijate' + i)
}
//normalmente se usa con arrays

//WHILE
let i = 0
//dentro de while lleva la evaluacion que se realice en cada iteracion, hasta  que no se cumpla y salga
while(i < limit){
    console.log('while' + i)
    i++
}
//se utiliza para evaluar datos o valores que estan en un servicio, estarias evaluando si ya se cumple
//o no, se repite hasta que se cumpla, tal vez no sepas el valor porque esta en un backend, en base de datos, etc


//DO WHILE
//Dentro del while se pone la evaluacion, al final de do se pone la variable que cambiara en las iteraciones
i = 0
do{
    console.log(`desde do while ${i}`)
    i++
}while(i<10)
//se usa para ahcer una evaluacion y si falla reintentarlo