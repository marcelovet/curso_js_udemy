// filter, map e reduce
// retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 22, 27]

// function callbackFilter (valor) {
//   return valor > 10
// }
// const menor10 = numeros.filter(callbackFilter)
const menor10 = numeros.filter((valor) => valor > 10)
console.log(menor10)
// nomes com 5 letras ou mais
// pessoas com mais de 50 anos
// nomes que terminam com a
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]
console.log(pessoas.filter(valor => valor.nome.length >= 5))
console.log(pessoas.filter(valor => valor.idade > 50))
console.log(pessoas.filter(valor => valor.nome.toLowerCase().slice(-1) === 'a'))

// map altera os valores, mas retorna um array de mesmo tamanho
// se o valor maior que 10 retorne 20% dele, se nao, retorne 90%
// basicamente map mapeia cada valor do array para uma funcao
console.log(numeros.map(valor => valor > 10 ? valor * 0.2 : valor * 0.9))
console.log(numeros)
// some o valor com o valor anterior
console.log(numeros.map((valor, indice, array) => {
  return indice !== 0 ? valor + array[indice - 1] : valor
}))
// efeito em object
console.log(pessoas.map(valor => valor.idade * 2))

function somaArray (array, indice = 0, resultado = 0) {
  if (array.length === indice) {
    return resultado
  }
  return somaArray(array, indice + 1, resultado + array[indice])
}

console.log(numeros)
console.log(numeros.map((valor, indice, array) => {
  return somaArray(array.slice(0, indice + 1))
}))

// retorne apenas a string com o nome
// remova apenas a chave nome
// adicione um id em cada object
console.log(pessoas.map(pessoa => pessoa.nome))
console.log(pessoas.map(pessoa => ({ idade: pessoa.idade })))
// como abaixo fiz spread, nao altera o original, caso contrario pode alterar
const comIds = pessoas.map((pessoa, idx) => ({ id: idx, ...pessoa }))
// console.log(pessoas.map((pessoa, idx) => ({ id: idx, ...pessoa })))
console.log(comIds)
console.log(pessoas)

// reduce - pode reduzir a um unico elemento
// some todos os elementos da array
// se nao e definido o estado inicial do acumulador, ele assume o primeiro
// elemento do array
console.log(numeros.reduce((acumulador, valor, indice, array) => {
  // console.log(acumulador, valor)
  return acumulador + valor
}, 0)) // 0 e o valor que foi definido como estado inicial do acumulador

// retorne a pessoa mais velha
console.log(pessoas.reduce((resultado, pessoa) => {
  if (resultado.idade <= pessoa.idade) {
    return pessoa
  }
  return resultado
}))

// unindo map e reduce para fazer media movel
// media movel tera como argumentos uma array de elementos e um lag
// que eh o numero de elementos da mv (ex, lag = 3, e o elemento e os dois
// anteriores)
function mediaMovel (array, lag) {
  if (lag === 1) return array
  if (lag < 1) throw new RangeError('lag deve ser igual ou maior que 1')
  if (lag > array.length) throw new RangeError('lag superior ao numero de elementos na array')
  const mv = array.map((v, i, array) => {
    // se o i < lag - 1 retorna null
    if (i < (lag - 1)) return null
    // array dos elementos a contar para a media de cada etapa (elemento)
    const innerArray = array.slice(i - lag + 1, i + 1)
    // a media de cada lag elementos
    const mean = innerArray.reduce((result, value) => {
      return result + value
    }, 0) / lag
    return mean
  })
  return mv
}

console.log(mediaMovel([1, 2, 2, 2, 4, 6], 2))
console.log(mediaMovel([1, 2, 2, 2, 4, 6], 6))
// console.log(mediaMovel([1, 2, 2, 2, 4, 6], 7))

// soma do dobro dos numeros pares
const numerosPares = numeros
  .filter(valor => valor % 2 === 0)
  .map(valor => valor * 2)
  .reduce((resultado, valor) => resultado + valor)
console.log(numeros)
console.log(numerosPares)
