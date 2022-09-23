// Crea un nuevo proyecto de Node

// - Instala la dependencia Winston

// - En el archivo index.js crea una función que devuelva un error con un mensaje 
// personalizado

// - Registra el error en un archivo a través de un try...catch

const logger = require('./logger');

const funcion = (param) => {
    if(typeof param === "number")
        throw new Error("No puede ser un numero");
    return true;
}

const variable = 10;

try {
    funcion(variable);
}catch(error){
    console.log(`El error es ${error}`);
    logger.error("Esto es un error provocado a proposito")
}

// logger.info("Hola esto es un mensaje informativo")
// logger.debug("Esto es un mensaje de debug")
// logger.warn("Esto es un mensaje de advertencia")
