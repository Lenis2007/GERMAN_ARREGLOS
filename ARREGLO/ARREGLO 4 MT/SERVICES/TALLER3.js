export function miscelanea3() {

    // 10. Dado el arreglo [3, 50, 70, 600, 40].
    // 1. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos.
    function EJ101() {
        let arreglo = [3, 50, 70, 600, 40];
        arreglo.forEach(i => {
            console.log(i);
        })
    }
    EJ101()

    // 2. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos multiplicados por 3.
    function EJ102() {
        let arreglo = [3, 50, 70, 600, 40];
        arreglo.forEach(i => {
            console.log(i * 3);
        })
    }
    EJ102()

    // 3. Use ciclo while para recorrer el arreglo e imprimir todos sus elementos.
    function EJ103() {
        let arreglo = [3, 50, 70, 600, 40];
        let i = 0;
        while (i < arreglo.length) {
            console.log(arreglo[i]);
            i++;
        }
    }
    EJ103()

    // 4.  Use ciclo for, condicional y operación módulo para recorrer el arreglo y mostrar cuales elementos son pares.
    function EJ104() {
        let arreglo = [3, 50, 70, 600, 40];
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i] % 2 === 0) {
                console.log(arreglo[i]);
            }
        }
    }
    EJ104()

    // 5. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana"] usar un ciclo y un condicional para mostrar si el nombre Juan se encuentra dentro del arreglo-
    function EJ105(nombre) {
        let arreglo = ["Maria", "Pedro", "Juan", "Pablo", "Diana"];
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i] === nombre) {
                return "Se encuentra en el arreglo"
            }
        }
        return "No se encuentra en el arreglo"
    }
    let resultado = EJ105("Juan");
    console.log(resultado);

    // 6. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"] usar un ciclo, un condicional, y una variable contador(iniciela fuera del ciclo y úsela para almacenar las veces que aparece Maria en el arreglo) para mostrar cuántas veces aparece el nombre Maria.
    

}