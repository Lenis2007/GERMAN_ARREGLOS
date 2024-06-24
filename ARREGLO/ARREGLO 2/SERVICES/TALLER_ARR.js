export function TALLER2() {

    // 1. Dado el arreglo [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ].
    function EJ1() {
        let arreglo = [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ];

        // a. Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for.
        for (let i = 0; i < arreglo.length; i++) {
           for (let j = 0; j < arreglo[i].length; j++) {
            console.log(arreglo[i][j]);
           } 
        }

        // b. Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach.
        arreglo.forEach (i => {
            i.forEach (j => {
                console.log(j);
            })
        })
    }
    /* EJ1() */

    // 2. Dado el arreglo [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, “@”, "¡"] ], [ [44, 55, 66, 77], [1, 2, 3, 4] ] ]
    function EJ2() {
        let arreglo2 = [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], [ [44, 55, 66, 77], [1, 2, 3, 4] ] ];

        // a. Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for.
        for (let i = 0; i < arreglo2.length; i++) {
            for (let j = 0; j < arreglo2[i].length; j++) {
                for (let k = 0; k < arreglo2[j].length; k++) {
                    console.log(arreglo2[i][j][k]);
                }
            }
        }

        // b. Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach
        arreglo2.forEach (i => {
            i.forEach (j => {
                j.forEach (k => {
                    console.log(k);
                })
            })
        })
    }
   /*  EJ2() */

    // 3. Dado el arreglo [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ]
    function EJ3() {
        let arreglo3 = [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ];

        // a. Recorrer todos sus elementos más internos y mostrar los números que sean impares. Use cualquier ciclo, for o forEach.
        for (let i = 0; i < arreglo3.length; i++) {
            for (let j = 0; j < arreglo3.length; j++) {
                if (arreglo3[i][j] % 2 !== 0) {
                    console.log(arreglo3[i][j]);
                }
            }
        }

        // b. Recorrer todos sus elementos más internos y mostrar la suma de estos. Como sugerencia use una variable.
        let suma = 0;
        arreglo3.forEach (i => {
            i.forEach (k => {
                suma += k;
            })
        })
        
        console.log(suma);
    }
    EJ3()
}