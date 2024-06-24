export function TALLER1() {
    
    // 1. Dado el arreglo [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ]
    
    function EJ1() {
        let arreglo = [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ];

        // a. Usar dos índices para leer e imprimir el elemento z.
        console.log(arreglo[0][1])

        // b. Usar dos índices para leer e imprimir el elemento 789.
        console.log(arreglo[1][0])

        // c. Usar dos índices para leer e imprimir el elemento 0.
        console.log(arreglo[2][2])

        //d. Usar dos índices para leer e imprimir el elemento false.
        console.log(arreglo[2][1]);
    }
    EJ1()

    // 2. Dado el arreglo [ [ ["%", 7, true, "#"] ], [ [false, 0, 99, "?"] ], [ [44, 55, 66, 77] ] ]

    function EJ2() {
        let arreglo1 =  [ [["%", 7, true, "#"]], [[false, 0, 99, "?"]], [[44, 55, 66, 77]] ];

        // a. Usar tres índices para leer e imprimir el elemento ?.
        console.log(arreglo1[1][0][3])

        // b. Usar tres índices para leer e imprimir el elemento 66.
        console.log(arreglo1[2][0][2])

        // c. Usar tres índices para leer e imprimir el elemento true.
        console.log(arreglo1[0][0][2])

        // d. Usar tres índices para leer e imprimir el elemento %.
        console.log(arreglo1[0][0][0]);

        // e. Arreglo[0][0][2] devolverá *TRUE*
        console.log(arreglo1[0][0][2]);

        // f. Arreglo[2][0][0] devolverá *44*
        console.log(arreglo1[2][0][0]);

        // g. Arreglo[1][0][3] devolverá *?*
        console.log(arreglo1[1][0][3]);

        // h. ) arreglo[0][1][1] devolverá *error*
        //console.log(arreglo1[0][1][1]);
    }
    EJ2()

    // 3. Dado el arreglo [ [ [0], [2, 77] ], [ ["&", true, "!!"], [[88]] ], [ [ [ [1] ] ] ], "¿" ]

    function EJ3() {
        let arreglo2 = [ [[0], [2, 77]], [["&", true, "!!"], [[88]]], [[[[1]]]], "¿" ];

        // a. Leer e imprimir el elemento true.
        console.log(arreglo2[1][0][1]);

        // b. Leer e imprimir el elemento 1.
        console.log(arreglo2[2][0][0][0][0]);

        // c. Leer e imprimir el elemento 77.
        console.log(arreglo2[0][1][1]);

        // d. Leer e imprimir el elemento 88.
        console.log(arreglo2[1][1][0][0]);

        //e. Leer e imprimir el elemento ¿.
        console.log(arreglo2[3]);
    }
    EJ3()

    // 4. Dado el arreglo [ [50, 60, 70], [“q”, “%”, “$”], [“?”, “>”, “<”], [1 , -8, -2] ]

    function EJ4() {
        let arreglo3 = [ [50, 60, 70], ["q", "%", "$"], ["?", ">", "<"], [1 , -8, -2] ];

        // a. Cambiar el elemento % por el elemento ?. Verifique el cambio usando console.log.
        arreglo3[1][1] = "?";
        console.log(arreglo3[1][1]);

        // b. Cambiar el elemento -8 por el elemento 9. Verifique el cambio usando console.log.
        arreglo3[3][1] = "9";
        console.log(arreglo3[3][1]);

        // c. Cambiar el elemento 50 por el elemento ¡. Verifique el cambio usando console.log.
        arreglo3[0][0] = "¡";
        console.log(arreglo3[0][0]);

        // d. Eliminar el elemento $. Verifique el cambio usando console.log, imprima todo el arreglo.
        arreglo3[1].splice(2,1)
        
        // e. Eliminar el elemento 70. Verifique el cambio usando console.log, imprima todo el arreglo.
        arreglo3[0].splice(2,1)
        
        // f. Eliminar el elemento -2. Verifique el cambio usando console.log, imprima todo el arreglo.
        arreglo3[3].splice(2,1)
        console.log(arreglo3);
    }
    EJ4()
}