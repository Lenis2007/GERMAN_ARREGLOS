/* RECORRER CON CICLO FOR CON CUALQUIER ARREGLO BIDIMENSIONAL */
/* 1. */
export function cicloFor() {
    let arregloBidimensional = [[20, 80, 30], [10, 20, 50],[70, 60, 40]];
    // Con el 1° ciclo for se recorre los elementos que conforman el arreglo.
    for (let i = 0; i < arregloBidimensional.length; i++) {
        // Con el 2° ciclo for se recorre los elementos de cada elemente del arreglo.
        for (let j = 0; j < arregloBidimensional[i].length; j++) {
            // Se imprime cada elemento.
            console.log(arregloBidimensional[i][j]);        
        }
    }
}

/* 2. */
export function cicloFor1() {
    let arregloMixto = [["w", true, 4],[3, 4],[6, 7]];

    for (let i = 0; i < arregloMixto.length; i++) {
        for (let j = 0; j < arregloMixto[i].length; j++) {
            console.log(arregloMixto[i][j]); 
        }
    }
}

/* RECORRER CON EL CICLO FOREACH CON ARREGLO BIDIMENSIONAL */
/* 1. */
export function cicloForEach() {
    let arregloBidimensional = [[20, 80, 30], [10, 20, 50],[70, 60, 40]];
    // El 1° ciclo forEach recorre los elementos que conforman el arreglo.
    arregloBidimensional.forEach(i => {
        // El 2° ciclo forEach recorre los elementos de cada elemento.
        i.forEach (j => {
            // Se imprime cada elemento
            console.log(j);
        })
    })
}