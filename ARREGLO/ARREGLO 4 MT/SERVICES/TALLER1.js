export function miscelanea1() {

    // 1. Dado el siguiente arreglo let j=[200,-100,45,78,32], imprimir los elementos de indice 2 y 4.
    function EJ1() {
        let j = [200, -100, 45, 78, 32];
        console.log(j[2]);
        console.log(j[4]);
    }
    EJ1()

    // 2. Dado el siguiente arreglo let f=["ab","cd","ef","gh"], imprimir los elementos cd y gh.
    function EJ2() {
        let f = ["ab", "cd", "ef", "gh"];
        console.log(f[1]);
        console.log(f[3]);
    }
    EJ2()

    // 3. Dado el siguiente arreglo let aux=[10,true,"k200",20.7], imprimir todos sus elementos usando la operacion de recorrido con foreach.
    function EJ3() {
        let aux = [10, true, "k200", 20.7];
        aux.forEach(i => {
            console.log(i);
        })
    }
    EJ3()

    // 4. Dado el siguiente arreglo let k=[17,4,64,79,109,112], recorrer cada elemento con foreache imprimir los elementos que sean números impares
    function EJ4() {
        let k = [17, 4, 64, 79, 109, 112];
        k.forEach(i => {
            if (i % 2 !== 0) {
                console.log(i);
            }
        })
    }
    EJ4()

    // 5. Dado el siguiente arreglo let h=[true, true, false,true, false],cambiar el elemento de índice 2 por true, cambiar el elemento de índice 3 por false.
    function EJ5() {
        let h = [true, true, false, true, false];
        h.splice(2, 2, true, false);
        console.log(h);
    }
    EJ5()

    // 6. Dado el siguiente arreglo let w=["wc","jp","zx","qr"], cambiar el elemento "jp" por true, cambiar el elemento "qr" por 30.
    function EJ6() {
        let w = ["wc", "jp", "zx", "qr"];
        w.splice(1, 1, true);
        w.splice(3, 1, 30);
        console.log(w);
    }
    EJ6()

    // 7.  Cree una función que reciba como argumento el siguiente arreglo [2, 5, 7, 9] y lo recorra, imprimiendo cada uno de sus elementos. 
    function EJ7(n = [2, 5, 7, 9]) {
        n.forEach(i => {
            console.log(i);
        })
    }
    EJ7()

    // 8. Cree una función que reciba un arreglo de n elementos y retorne el número de elementos del arreglo.
    function EJ8(arreglo) {
        return arreglo.length;
    }
    let n = [1, 2, 3, 4, 9, 0, 77, 78, 89, 90];
    console.log(EJ8(n));

    // 9. Use indexOf para mostrar los índices de los elementos 44,89,70 del arreglo [30,44,54,89,100]
    function EJ9() {
        let a = [30, 44, 54, 89, 100];
        console.log(a.indexOf(44));
        console.log(a.indexOf(89));
        console.log(a.indexOf(70));
    }
    EJ9()
}