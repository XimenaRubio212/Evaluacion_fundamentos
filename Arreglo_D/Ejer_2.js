//se declara la constante llamada validarAcceso
//con una funcion expresada donde 
const validarAcceso = function(edad, contraseñaDigitada) {
  //se crea una constante llamada contraseña_valida
  //con la contraseña ya definida
  const CONTRASEÑA_VALIDA = "secreto123";
  //se crea una constante llamada mayor_edad 
  //con la edad ya definida
  const MAYOR_EDAD = 18;
  //se crea una constante que se llama esMayorEdad
  // donde edad sea mayor o igual que mayor_edad
  const esMayorEdad = edad >= MAYOR_EDAD;
  //se crea una constante llamada contraseñaCorrecta 
  //donde contaseñaDigitada que sea estrictamente igual a la contraseña_valida
  const contraseñaCorrecta = contraseñaDigitada === CONTRASEÑA_VALIDA;
//se crea una setencia if
//done esMayorEdad sea igual a la contraseñaCorrecta
  if (esMayorEdad && contraseñaCorrecta) {
    //aqui retorna y le conceden el acceso 
    return "Acceso concedido.";
  } else {
    //de lo contrario se lo niegan
    return "Acceso denegado.";
  }
};