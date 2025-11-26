// creamos una funcion expresada para validar el acceso de un usuario
export const validarAcceso = function(edad, contraseñaDigitada) {
    // definimos la contraseña válida y la edad mínima
    const CONTRASEÑA_VALIDA = "Manzana";
    const MAYOR_EDAD = 18;
    // verificamos si el usuario es mayor de edad y si la contraseña es correcta
    const esMayorEdad = edad >= MAYOR_EDAD;
    const contraseñaCorrecta = contraseñaDigitada === CONTRASEÑA_VALIDA;
    // si ambas condiciones se cumplen, retornamos acceso concedido
    if (esMayorEdad && contraseñaCorrecta) {
        return "Acceso concedido.";
    } else {
        // si alguna condición falla, retornamos acceso denegado
        return "Acceso denegado.";
    }
};