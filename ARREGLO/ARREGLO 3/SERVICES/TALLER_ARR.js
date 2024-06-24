export function TALLER3() {

    // 1. Dada la cadena “Javascript es un buen lenguaje”.
    function EJ1() {
        let cadena = "Javascript es un buen lenguaje";

        // a.  Leer e imprimir los elementos de índices 3, 6, 8.
        console.log(cadena[1]);
        console.log(cadena[6]);
        console.log(cadena[8]);

        // b. Recorra la cadena usando ciclo for.
        for (let i = 0; i < cadena.length; i++) {
            console.log(cadena[i]);
        }
    }
    /* EJ1() */

    // 2. Dada la cadena “Somos SENA”.
    function EJ2() {
        let cadena = "Somos SENA";

        // a. Recorra la cadena usando ciclo for y muestre si la cadena contiene la letra “E”
        for (let i = 0; i < cadena.length; i++) {
            // .includes ES PARA VERIFICAR SI UNA CADENA TIENE UN CARACTER O CADENA.
            if (cadena.includes("E")) {
                console.log("La cadena contiene la letra 'E'.");
                break;
            } else {
                console.log("La cadena no contiene la letra.");
                break;
            }
        }

        // b. Recorra la cadena usando ciclo for y muestre cuántas veces está la letra “o” . Como sugerencia use una variable contadora para contar el número de veces que se encuentra la letra “o”.
        let contadora = 0;
        for (let i = 0; i < cadena.length; i++) {
            if (cadena[i] === "o") {
                contadora++;
            }
        }
        console.log(`La letra 'O' aparece ${contadora} veces en la cadena`);
    }
    /* EJ2() */

    // 3. Dada la cadena “Javascript es genial” recorra la cadena usando ciclo for y muestre por cuantas palabras está compuesta la cadena. Como sugerencia se puede basar en el modelo del ejercicio 2 literal d.
    function EJ3() {
        let cadena = "Javascript es genial";
        let contador = 0;
        for (let i = 0; i < cadena.length; i++) {
            // i === 0 para empezar desde la posicion 0 || cadena[i - 1] === ' ' verifica que si hay un caracter o espacio en blanco, detectando el inicio de palabra.
            if (cadena[i] !== " " && i === 0 ||cadena[i - 1] === ' ') {
                contador++;
            }
        }
        console.log(`En total hay ${contador} palabras`)
    }
    EJ3()
}