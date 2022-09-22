// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy

let fechaDeHoy = new Date();
console.log(`Hoy es ${fechaDeHoy.getDate()}/${fechaDeHoy.getMonth()+1}/${fechaDeHoy.getFullYear()}`);

// - La fecha de tu nacimiento

let fechaDeMiCumple = new Date('April 18, 1978'); 

console.log(`Mi cumple es ${fechaDeMiCumple.getDate()}/${fechaDeMiCumple.getMonth()+1}/${fechaDeMiCumple.getFullYear()}`);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

let esMasTarde = new Date();

console.log(esMasTarde)

if(esMasTarde > fechaDeMiCumple){
    console.log("Hoy es mas tarde")
}else {
    console.log("Hoy no es mas tarde")
}

// - Una variable que contenga el día de tu nacimiento

let diaDeMiCumple = new Date();
diaDeMiCumple = fechaDeMiCumple.getDate();

console.log(diaDeMiCumple);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

let mesDeMiCumple = new Date();

mesDeMiCumple = fechaDeMiCumple.getMonth()+1;
console.log(mesDeMiCumple);

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

let anyoDeMiCumple = new Date();

anyoDeMiCumple = fechaDeMiCumple.getFullYear();
console.log(anyoDeMiCumple);