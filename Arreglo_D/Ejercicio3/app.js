// Importar la función generarTabla desde el módulo correspondiente
import { generarTabla } from "./modulo/tablaMulti.js";

// Pedimos al usuario el número para generar la tabla
let numero = parseFloat(prompt("Ingrese un número para generar su tabla de multiplicar:"));

// Validamos que el número no sea NaN (sin usar isNaN)
if (numero != numero) {
    alert("Debe ingresar un número válido.");
} else {
    // Llamamos a la función generarTabla y mostramos el resultado en una alerta
    alert(generarTabla(numero));
}