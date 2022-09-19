
let numero;

numero = 10;
let acumulado = 1;

let i = 1;
while(true) {
    acumulado = acumulado * i;
    if(i < 10){
        i++;
    }else {
        break;
    }
}

console.log(acumulado);