// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"

function devuelveTrue () {
    return true;
}

const valorTrue = devuelveTrue();

console.log(valorTrue);
// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 
// 5 segundos después de haberse ejecutado

const miPromesa = new Promise((resolve, reject) => {
    if(true){
        resolve()
    }

})


miPromesa.then(() => {
    setTimeout(function(){
        console.log("Hola soy una promesa");
    }, 5000);
    
})
.catch("Error");

// - Una función generadora de índices pares automáticos

function* generarIdsPares(){
    let id = 0;
    while(true){
        if(id % 2 === 0){
            yield id;
        }
        id++;
    }
}