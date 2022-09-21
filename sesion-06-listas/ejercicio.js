// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

let listaDeCompras = ["huevos", "harina", "leche", "fideos", "pan"];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

listaDeCompras.push('Aceite de Girasol');
console.log(listaDeCompras);
// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

// version 1
// listaDeCompras.pop();
// console.log(listaDeCompras);

// version 2
let lista2;
lista2 = listaDeCompras.filter(valor => valor !== "Aceite de Girasol");
console.log(lista2);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

let pelisFavoritas = [{titulo: "Matrix", director: "Wachowsky", fecha: 1999}, 
                      {titulo: "Rocky", director: "Stallone", fecha: 1985},
                      {titulo: "Avatar", director: "Cameron", fecha: 2011}];
                      
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

let pelisMasNuevas = pelisFavoritas.filter(valor => valor.fecha > 2010);
console.log(pelisMasNuevas);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
let directores = pelisFavoritas.map(valor => {
    return valor.director
})
console.log(directores);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

let listaNombrePeliculas = pelisFavoritas.map(valor => {
    return valor.titulo;
});
console.log(listaNombrePeliculas);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

let listaDirectoresYTitulos = directores.concat(listaNombrePeliculas);
console.log(listaDirectoresYTitulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

let directoresYTitulos = [...directores, ...listaNombrePeliculas];
console.log(directoresYTitulos);