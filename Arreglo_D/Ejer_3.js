//se crea una constante llamada generarTabla
//con una funcion flecha 
const generarTabla = (numero) => {
    //se crea una constante llamada resultados con una lista vacia
  const resultados = [];
  //se crea un ciclo for 
  //donde se delcara i inicializando en 1
  //y que i sea menor o igual que 10
  for (let i = 1; i <= 10; i++) {
    //se llama a la constante resultados
    resultados.push(i * numero);
  }
  return resultados[numero];
};