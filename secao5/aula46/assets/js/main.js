// forEach
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 22, 27]

// itera sobre cada elemento mas n espera um retorno ou algo mais
console.log(numeros.forEach((valor, indice, array) => {
  console.log(valor, indice, array)
}))
