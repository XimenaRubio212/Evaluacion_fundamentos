// Importar la función procesarImpuestos desde el módulo correspondiente
import { procesarImpuestos } from "./modulo/calculaImpuesto.js";

// Llamamos a la función y mostramos el resultado
let total = procesarImpuestos();
alert("Impuesto total acumulado: $" + total);