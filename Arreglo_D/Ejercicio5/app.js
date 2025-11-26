// Importar la función buscarElemento desde el módulo correspondiente
import { buscarElemento } from "./modulo/consultaElemento.js";

// Pedimos la cantidad de elementos del arreglo
let cant = parseInt(prompt("Ingrese la cantidad de elementos en el arreglo:"));
// Inicializamos un arreglo vacío
const lista = [];

// Recolectamos los elementos del arreglo
for (let i = 0; i < cant; i++) {
    let elem = prompt("Elemento " + (i + 1) + ":");
    // Intentamos convertir a número si no es NaN
    let num = parseFloat(elem);
    // Si la conversión es válida, usamos el número; si no, usamos el texto
    if (num == num) {
        lista.push(num);
    } else {
        lista.push(elem);
    }
}

// Pedimos el elemento a buscar
let elemento = prompt("¿Qué elemento desea buscar?");

// Intentamos convertir también
let numBuscado = parseFloat(elemento);
let valorBuscado = (numBuscado == numBuscado) ? numBuscado : elemento;

// Llamamos a la función y mostramos el resultado
if (buscarElemento(lista, valorBuscado)) {
    alert("El elemento" + valorBuscado + " fue encontrado en el arreglo.");
} else {
    alert("El elemento" + valorBuscado + " NO está en el arreglo.");
}