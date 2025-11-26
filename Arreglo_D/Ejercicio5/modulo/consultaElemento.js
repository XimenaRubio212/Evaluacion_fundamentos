// creamos una funcion flecha para buscar un elemento en un arreglo manualmente
export const buscarElemento = (lista, elemento) => {
    // recorremos el arreglo con un ciclo for
    for (let i = 0; i < lista.length; i++) {
        // comparamos cada elemento con el valor buscado (igualdad estricta)
        if (lista[i] === elemento) {
            return true;
        }
    }
    return false;
};