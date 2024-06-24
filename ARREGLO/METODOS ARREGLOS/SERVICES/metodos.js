export function metodos() {
    
    // 1. PUSH = Agrega uno o más elementos al final de un arreglo.
    function PUSH() {
        let arreglo = [1, 2, 3]
        arreglo.push(34);
        console.log(arreglo);
    }
    PUSH()

    // 2. POP = Elimina el último elemento de un arreglo.
    function POP() {
        let arreglo = [1, 2, 3, 4, 5];
        /* let nuevoArreglo = arreglo.pop(); Para guardar el elemento eliminado. */
        arreglo.pop();
        /* console.log(nuevoArreglo); Para imprimir el elemento eliminado. */
        console.log(arreglo);
    }
    POP()

    // 3. SHIFT = Elimina el primer elemento de un arreglo.
    function SHIFT() {
        let arreglo = [1, 2, 3];
        /* let nuevoArreglo = arreglo.shift(); Para guardar el elemento eliminado. */
        arreglo.shift();
        /* console.log(nuevoArreglo); Para imprimir el elemento eliminado. */
        console.log(arreglo);
    }
    SHIFT()

    // 4. UNSHIFT = Agrega uno o más elementos al principio de un arreglo.
    function UNSHIFT() {
        let arreglo = [2, 3];
        arreglo.unshift(25);
        console.log(arreglo);
    }
    UNSHIFT()

    // 5. SPLICE = Cambia el contenido de un arreglo, eliminando, reemplazando o agregndo nuevos elementos.
    function SPLICE() {
        let arreglo = [1, 2, 3, 4];
        // Elimina 2 elementos desde el indice 1 y agrega 'a' y 'c'
        arreglo.splice(1, 2, 'a', 'c');
        console.log(arreglo);
    }
    SPLICE()

    // 6. SLICE = Retorna una copia de una parte del arreglo dentro de un nuevo arreglo.
    function SLICE() {
        let arreglo = [1, 2, 3, 4];
        // Copia desde el indice 1 hasta el indice 2, sin incluir el indice 3.
        let nuevoArreglo = arreglo.slice(1, 3);
        console.log(nuevoArreglo);
    }
    SLICE()

    // 7. FOREACH = Ejecuta una funcion sobre ccada elemento del arreglo.
    function FOREACH() {
        let arreglo = [1, 2, 3];
        arreglo.forEach(i => console.log(i * 2));
    }
    FOREACH()

    // 8. MAP = Crea un nuevo arreglo *forEach*
    function MAP() {
        let arreglo = [1, 2, 3];
        let nuevoArreglo = arreglo.map(i => i *2);
        console.log(nuevoArreglo);
    }
    MAP()

    // 9. FILTER = Crea un nuevo arreglo con todos los elementos que pasen las prueba implementada.
    function FILTER() {
        let arreglo = [1, 2, 3, 4, 5];
        let nuevoArreglo = arreglo.filter(i => i > 2);
        console.log(nuevoArreglo);
    }
    FILTER()

    // 10. REDUCE = Aplica una funcion acumuladora y suma cada elemento con el de al lado, para asi reducirlo
    // a un unico valor.
    function REDUCE() {
        let arreglo = [1, 2, 3, 4, 5, 1];
        let sum = arreglo.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
        console.log(sum);
    }
    REDUCE()

    // 11. FIND = Retorna el primer elemento del arreglo que cumpla con la condicion dada.
    function FIND() {
        let arreglo = [1, 2, 3, 4];
        let nuevoArreglo = arreglo.find(i => i > 2);
        console.log(nuevoArreglo);
    }
    FIND()

    // 12. FINDINDEX = Retorna el indice del primer elemento que cumpa con la condicion dada.
    function FINDINDEX() {
        let arreglo = [1, 2, 3, 4];
        let nuevoArreglo = arreglo.findIndex(i => i > 2);
        console.log(nuevoArreglo);
    }
    FINDINDEX()

    // 13. INCLUDES = Determina si un arreglo incluye un determinado elemento.
    function INCLUDES() {
        let arreglo = [1, 2, 3];
        let nuevoArreglo = arreglo.includes(3);
        console.log(nuevoArreglo);
    } 
    INCLUDES()

    // 14. JOIN = Une todos los elementos de un arreglo en una cadena.
    function JOIN() {
        let arreglo = [1, 2, 3];
        let nuevoArreglo = arreglo.join('-');
        console.log(nuevoArreglo);
    }
    JOIN()

    // 15. SORT = Ordena los elementos del arreglo y retorna el arreglo ordenado.
    function SORT() {
        let arreglo = [3, 1, 1, 4, 2];
        arreglo.sort();
        console.log(arreglo);
    }
    SORT()

    // 16. REVERSE = Invierte el orden de los elementos del arreglo.
    function REVERSE() {
        let arreglo = [1, 2, 3, 4, 4];
        arreglo.reverse();
        console.log(arreglo);
    }
    REVERSE()
}