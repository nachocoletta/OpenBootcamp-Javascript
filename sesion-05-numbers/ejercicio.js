// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga tu altura en centímetros (entero)
let alturaEnCms = 183;
console.log(alturaEnCms);
// - Una variable que contenga tu altura en metros (número de coma flotante)
let alturaEnCmsMts = 1.83;
console.log(alturaEnCmsMts);
// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
let pesoEnKg = 99.9;
console.log(pesoEnKg);
// - Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaEnMtsRedondeadaHaciaArriba = Math.ceil(1.83);
console.log(alturaEnMtsRedondeadaHaciaArriba);
// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoEnKgRedondeadoHaciaAbajo = Math.floor(pesoEnKg);
console.log(pesoEnKgRedondeadoHaciaAbajo);
// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual 
// al máximo valor que se puede obtener en Javascript
let maximoNumeroEnJSMasUno = Number.MAX_VALUE + 1;
console.log(maximoNumeroEnJSMasUno);

if(maximoNumeroEnJSMasUno === Number.MAX_VALUE + 1 )
    console.log(true)