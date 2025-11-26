// creamos una funcion flecha para generar la tabla de multiplicar de un número
export const generarTabla = (numero) => {
    // inicializamos una cadena vacía para los resultados
    let resultado = "";
    // recorremos del 1 al 10 y construimos cada línea
    for (let i = 1; i <= 10; i++) {
        if (i > 1) resultado += "\n";
        resultado += numero + " * " + i + " = " + (numero * i);
    }
    return resultado;
};