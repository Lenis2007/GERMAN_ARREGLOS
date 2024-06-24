/* LONGITUD DE LOS CARACTERES */
export function LONGITUD() {
    let mensaje = "Somos programadores";
    // En este caso, aparecerá la 11° letra.
    console.log(mensaje[11]);
    // En este caso, aparecerá la 15° letra.
    console.log(mensaje[15]);
    // En este caso, aparecerá la longitud, es decir, el total de letras.
    console.log(mensaje.length);
}

/* RECORRIDO CON PALABRAS */
export function RECORRIDO() {
    let mensaje = "Somos programadores";
    for (let i = 0; i < mensaje.length; i++) {
        // Se imprime cada caracter de la cadena o mensaje.
        console.log(mensaje[i]);
    }
}

/* INMUTABILIDAD */
export function INMUTABILIDAD() {
    // Las cadenas son inmutables a modificaciones por caracter o indice.
    let mensaje = "Lenis";
    /* mensaje[2] = "a"; */
    console.log(mensaje);
}