/* ARREGLO UNIDIMENSIONAL */
export function Unidimensional() {
  let arregloUnidimensional = [2, 5, 7, true, false, "ww"];
  console.log(arregloUnidimensional[2]);
}

/* ARREGLO BIDIMENSIONAL */
export function Bidimensional() {
  let arregloBidimensional = [[1, 3, 8], ["w", "e", "q"], [true, false, true]];
  console.log(arregloBidimensional[1][2]);
  console.log(arregloBidimensional[0][1]);
}

/* ARREGLO DE DIMENSIÓN SUPERIOR */
export function DimensionSup() {
  let arregloDimension3 = [ [[1, 5, 8], [true]], [[true, false, true], [true]] ];
  console.log(arregloDimension3[0][0][1]);
  console.log(arregloDimension3[1][0][0]);
}

/* ESCRITURA Y ELIMINACIÓN EN ARREGLOS */
export function escrituraEliminacion() {
  let arregloDimension31 = [ [[1, 5, 8], [true]], [[true, false, true], [true]] ];
  // Se EDITA o se ESCRIEBE el elemento según el índice asignado.
  arregloDimension31[1][0][2] = false;
  console.log(arregloDimension31[1][0][2]);
  
  /* Se ELIMINA desde el índice que se indica, es decir, se elimina desde ese hasta el final.
  arregloDimension31[0][0].splice(2); */

  // El primer indice indica desde donde se va a eliminar los elementos, el segundo indice es el numero de elementos que se van a eliminar. 
  arregloDimension31[0][0].splice(0,2)
  console.log(arregloDimension31);
}