const age = 21
let isAdult = false
const country = 'Argentina'

if(age>= 18){
    console.log('mayor de edad')
    isAdult = true
}else{
    console.log('menor de edad')
    isAdult = false
}
if(isAdult){
    alert('es adulto')
}
//switch case
switch(country){
    case 'Argentina':
        if(age>= 18)
            console.log('Adulto, argentino')
    break

    case 'EEUU':
        if(age>=21)
            console.log('Menor, estadounidense')
    break

    default:
        console.log('no es argentino ni estadounidense')
}