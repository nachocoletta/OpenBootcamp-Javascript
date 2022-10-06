// Crea un nuevo proyecto de Node

// - Crea un fichero index.html (utiliza el comando "!")

// - Crea un fichero index.js

// - Integra el fichero index.js en el html

// - En el fichero index.js:

// - Crea una variable con tu nombre

let nombre = "Nacho";

// - Crea una variable con tu apellido

let apellido = "Coletta";

// - Crea un objeto con tu nombre y tu apellido

let nombreYApellido = {"nombre": "Nacho", "Apellido": "Coletta"};

// - Almacena el objeto anterior en la SessionStorage

sessionStorage.setItem("nombreYApellido", JSON.stringify(nombreYApellido));

// - Almacena el objeto anterior en la LocalStorage

localStorage.setItem("nombreYApellido", JSON.stringify(nombreYApellido));

// - Crea una cookie que caduque en 2 minutos con los datos del objeto anterior

let fecha = new Date();
let fechaCookie = fecha.setMinutes(fecha.getMinutes() + 2);
console.log(fecha.getMinutes());
document.cookie = "nombreCookie=Nacho;expires=" + fechaCookie;
// console.log(document.cookie)
// - Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies

// - Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo

// - Observa cómo la SessionStorage está vacía

// - Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador

// - Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado