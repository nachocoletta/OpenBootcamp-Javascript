
let nombre = 'Ignacio';
let apellido = 'Coletta';

let estudiante = `${nombre} ${apellido}`;

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLocaleLowerCase();

let numeroDeLetras = estudiante.length;
console.log(numeroDeLetras);

let primeraLetra = nombre.charAt(0);
console.log(primeraLetra);

let ultimaLetra = apellido.substring(apellido.length, apellido.length-1);
console.log(ultimaLetra);

let estudianteSinEspaciosBlancos = estudiante.replace(' ', '');
console.log(estudianteSinEspaciosBlancos);

let variableBooleana = estudiante.includes(nombre);
console.log(variableBooleana);
