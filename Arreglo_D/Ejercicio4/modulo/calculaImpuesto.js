// creamos una funcion declarada para calcular el impuesto unitario de un producto
export function calcularImpuestoUnitario(valor, porcentaje) {
    return (valor * porcentaje) / 100;
}
// creamos una funcion expresada para procesar varios productos y sumar sus impuestos
export const procesarImpuestos = function() {
    // pedimos la cantidad de productos
    let cant = parseInt(prompt("Ingrese la cantidad de productos:"));
    // inicializamos el total de impuestos en 0
    let totalImpuesto = 0;

    // recorremos cada producto con un ciclo for
    for (let i = 0; i < cant; i++) {
        // pedimos el valor y el porcentaje de impuesto para cada producto
        let valor = parseFloat(prompt("Producto " + (i + 1) + " - Valor:"));
        let porcentaje = parseFloat(prompt("Producto " + (i + 1) + " - Porcentaje de impuesto (%):"));

        // validamos que los valores sean números válidos y mayores o iguales a 0
        if (valor == valor && porcentaje == porcentaje && valor > 0 && porcentaje >= 0) {
            totalImpuesto += calcularImpuestoUnitario(valor, porcentaje);
        } else {
            alert("Valor o porcentaje inválido. Se omitirá este producto.");
        }
    }

    return totalImpuesto;
};