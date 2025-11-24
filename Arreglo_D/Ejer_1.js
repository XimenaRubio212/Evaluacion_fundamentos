//aqui estamos declarando una funcion declarada llamada calcularPromedio
//donde se esta asignado el arreglo notas
function calcularPromedio(notas) {
    //aqui estamos inicializando la variable suma en 0
    let suma = 0;
    //aqui se crea un ciclo for donde se declara la i inicializandola en 0
    //y que i sea menor que notas y las vaya sumando a la variable sumas
    for (let i = 0; i < notas.length; i++) {
        //aqui se llama la variable suma y se le aumenta la nota dentro de i
        suma += notas[i];
    }
    //se crea una constante que se va a llamar promedio 
    //donde se llama la variable suma y se divide con la longitud de las notas
    const promedio = suma / notas.length;
    //se declara la variable rendimiento
    let rendimiento;
    //aqui se crea un if donde se va a verificar si promedio es mayor o igual que 4.0
    if (promedio >= 4.5) {
        //si es asi mostra que es Alto
        rendimiento = "Alto";
        //si promedio no es mayor pero es mayor o igual que 3.0
    } else if (promedio >= 3.0) {
        //mostrara que es Medio
        rendimiento = "Medio";
    } else {
        //si promedio no es mayor de 4.0 ni igual que 3.0
        //mostrara que es Bajo 
        rendimiento = "Bajo";
    }
    //aqui retorna promedio y rendimiento
    return { promedio, rendimiento };
}
//se crea una constante llamada cantidad donde se va a pasar a entero
const cantidad = parseInt(prompt());
//aqui se crea una constante llamada notas con una lista vacia
const notas = [];
//se crea un ciclo for donde se declara la variable i y se inicie en 0 y si i es menor a cantidad
for (let i = 0; i < cantidad; i++) {
    //aqui se llama a la variable notas
    //donde utilizamos push para agregar 
    notas.push(parseFloat(prompt()));
}
//se crea una constante llamada resultado donde se le va a asignar los datos
//a la function calcularPromedio(notas)
const resultado = calcularPromedio(notas);
//se muestra por consola el resultado llamando a la constante resultado
//donde llama a la constante promedio
console.log(resultado.promedio);
//se muestra por consola el resultado llamando a la constante resultado
//donde llama a la variable rendimiento
console.log(resultado.rendimiento);