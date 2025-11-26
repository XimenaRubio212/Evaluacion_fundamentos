// Importar la función validarAcceso desde el módulo correspondiente
import { validarAcceso } from "./modulo/autenticacion.js";

// Pedimos la edad y la contraseña al usuario
let edad = parseInt(prompt("Ingrese su edad:"));
let contraseña = prompt("Ingrese la contraseña:");

// Llamamos a la función validarAcceso y mostramos el resultado en una alerta
alert(validarAcceso(edad, contraseña));