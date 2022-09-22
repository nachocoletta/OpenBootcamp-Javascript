// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const datosPersonales = {nombre: "Ignacio", apellido: "Coletta", edad: 44, altura: 1.83, eresDesarrollador: false}

// - Una variable que obtenga tu edad a partir del objeto anterior

let edad = datosPersonales.edad
console.log(edad)

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

let arrayDatosPersonales = [];


const amigo1 = {nombre: "Diego", apellido: "Villa", edad: 40, altura: 1.75, eresDesarrollador: false};
const amigo2 = {nombre: "Walter", apellido: "Ysuorgano", edad: 50, altura: 1.65, eresDesarrollador: true};

arrayDatosPersonales = [{...datosPersonales}, amigo1, amigo2]



for(datos of arrayDatosPersonales){
    console.log(datos)
}
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

arrayDatosPersonales.sort((a,b) => a.edad - b.edad);

for(datos of arrayDatosPersonales){
    console.log(datos)
}