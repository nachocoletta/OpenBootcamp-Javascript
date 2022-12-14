// Crea un nuevo proyecto de Node

// - Configura el proyecto para utilizar los módulos de ES6

// - Crea un archivo controller.js que exporte 2 funciones: suma(a, b) y multiplica(a, b)

// - En el entrypoint index.js, importa el módulo controller.js

import { suma, multiplica } from "./controller.js";
import chalk from "chalk";

// - El entrypoint index.js debe utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5)

console.log(`Suma de 4 y 5 es ${suma(4,5)}`);
console.log(`Multiplicacion de 1 y 2 es ${multiplica(1,2)}`)


// - Instala e importa la librería chalk (https://www.npmjs.com/package/chalk)

// - Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde

const log = console.log(chalk.green(`Multiplicacion de 1 y 2 es ${multiplica(1,2)}`))

