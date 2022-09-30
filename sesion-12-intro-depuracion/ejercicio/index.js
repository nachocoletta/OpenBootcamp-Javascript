// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números 
// de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función
// 0 1 1 2 3 5 8 13 21 34 55 89 144?


function fibonacci(num){
    if(num < 2){
        throw new Error("El numero debe ser mayor 2")
    }

    let arrayFibonacci = [];

    arrayFibonacci[0] = 0;
    arrayFibonacci[1] = 1;

    for(let i = 2; i < num; i++){
        let nuevaPosicionEnLaSerie = arrayFibonacci[i-1] + arrayFibonacci[i-2];
        arrayFibonacci = [...arrayFibonacci, nuevaPosicionEnLaSerie ]
    }
    return arrayFibonacci;
}

try {
    console.log(fibonacci(13))
}catch(error){
    console.log(error)
}

