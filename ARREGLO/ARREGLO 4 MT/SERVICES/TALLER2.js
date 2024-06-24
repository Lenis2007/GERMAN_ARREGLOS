export function miscelanea2() {

    // 1. Imprima el número de elementos de los siguientes arreglos usando la propiedad length a) [1,2,3,4,5,6,7,8,9,10] b) [] c) ["a", true, -1] d) [2, 4, 5, 7, 1, 34, 89, 0]
    function EJ1() {
        let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let b = [];
        let c = ["a", true, -1];
        let d = [2, 4, 5, 7, 1, 34, 89, 0];
        console.log(a.length, b.length, c.length, d.length);
    }
    EJ1()

    // 2. Dado el arreglo [1,2,3,4,5,6,7,8,9,10].
    function EJ2() {
        let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        
        // a. Agregue el elemento 345 usando push y verifique el cambio en el arreglo.
        arreglo.push(345)
        console.log(arreglo);

        // b. Agregue el elemento true usando push y verifique el cambio en el arreglo.
        arreglo.push(true);
        console.log(arreglo);

        // c. Agregue el elemento "ADSO" usando push y verifique el cambio en el arreglo.
        arreglo.push("ADSO");
        console.log(arreglo);

        // d.  Agregue los elementos 455, 78, false usando push en un solo llamado y verifique el cambio en el arreglo.
        arreglo.push(455, 78, false)
        console.log(arreglo);

        // e. Agregue los elementos "ABcd", true, 21 usando push en un solo llamado y verifique el cambio en el arreglo.
        arreglo.push("ABcd", true, 21);
        console.log(arreglo);
    }
    EJ2()

    // 3. Use splice para hacer las eliminaciones correspondientes.
    function EJ3A() {
        // a. Dado el arreglo [1, 2, false] Elimine el elemento de índice 2.
        let arreglo = [1, 2, false];
        arreglo.splice(2);
        console.log(arreglo);
    }
    EJ3A()

    function EJ3B() {
        // b. Dado el arreglo [99, false, 17, 45, 7, "abc", 78] Elimine el elemento de índice 6
        let arreglo = [99, false, 17, 45, 7, "abc", 78];
        arreglo.splice(6);
        console.log(arreglo);
    }
    EJ3B()

    function EJ3C() {
        // c. Dado el arreglo [-1, -55, -89- 30, 1000] Elimine el elemento de índice 1.
        let arreglo = [-1, -55, -89- 30, 1000];
        arreglo.splice(1);
        console.log(arreglo);
    }
    EJ3C()

    function EJ3D() {
        // d. Dado el arreglo ["zxc", 767, 1298, true, false, [3], 1] Elimine los elementos desde el índice 1 hasta el índice 4 en un sólo llamado
        let arreglo = ["zxc", 767, 1298, true, false, [3], 1];
        arreglo.splice(1, 4);
        console.log(arreglo);
    }
    EJ3D()

    function EJ3E() {
        // e. Dado el arreglo [34, ["q"], 67, 1, 99, 1/2] Elimine los elementos desde el índice 3 hasta el índice 4 en un sólo llamado.
        let arreglo = [34, ["q"], 67, 1, 99, 1/2];
        arreglo.splice(3, 2);
        console.log(arreglo);
    }
    EJ3E()

    // 4. Dado el siguiente arreglo a = [2, 6, 9, 0, 5] , realice una copia dependiente de a.
    function EJ4() {
        let a = [2, 6, 9, 0, 5];

    }

    // 5. Dado el siguiente arreglo b = ["abc", 4, 88, 99] , realice una copia independiente de b.
    function EJ5() {
        let b = ["abc", 4, 88, 99];

    }

    // 6.  Dado el siguiente arreglo ["x", "y", "z", 0, 1, 2, 3] use ciclo for (con .length) para recorrer el arreglo e imprimir todos sus elementos.
    function EJ6() {
        let arreglo = ["x", "y", "z", 0, 1, 2, 3];
        for (let i = 0; i < arreglo.length; i++) {
            console.log(arreglo[i]);
        }
    }
    EJ6()

    // 7. Dado el siguiente arreglo [1, 17, 8, 9, 3] use ciclo for (con .length) para recorrer el arreglo e imprimir todos sus elementos aumentados en 1.
    function EJ7() {
        let arreglo = [1, 17, 8, 9, 3];
        for (let i = 0; i < arreglo.length; i++) {
            console.log(arreglo[i] + 1);
        }
    }
    EJ7()

    // 8. Cree una función que reciba un arreglo y retorne su longitud(número de elementos)
    function EJ8(arreglo) {
        return arreglo.length;  
    }
    let n = [1, true];
    console.log(EJ8(n));

    // 9. Cree una función que reciba una letra del alfabeto y muestre si tal letra corresponde a algún elemento del siguiente arreglo ["a", "b", "c", "d", "e", "f", "g"] Use ciclo for (con .length) en la solución de este problema
    function EJ9(letra) {
        let arreglo = ["a", "b", "c", "d", "e", "f", "g"];
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i] === letra) {
                return "La letra si esta en el arreglo"
            }  
        }
    }
    let resultado = EJ9('a');
    console.log(resultado);
    EJ9()
}