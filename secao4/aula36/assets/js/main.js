/**
 * Parametros de funcao
 */
// por mais bizarro que pareca, o JS nao sobe erro se fornecer um parametro
// para uma funcao sem params
const funcaoSemParam = () => console.log('Nao tenho params')
funcaoSemParam('Blabla')
funcaoSemParam('Blabla', 1, 2, 3)

// quando definido com function, temos uma variavel arguments disponivel

function funcao () {
  console.log(arguments)
}

funcao('oi', 1, 2, 3, 4, 5, 6)

// permite algo parecidos com o args do python

function soma (args) {
  let total = 0
  for (const val of arguments) {
    if (val instanceof Array) {
      for (const i of val) total = typeof i === 'number' ? total + i : total
      continue
    }
    if (typeof val !== 'number') {
      console.log(`O valor "${val}" nao e um numero e sera desconsiderado`)
      continue
    }
    total += val
  }
  return total
}

console.log(soma(1, 2, 3, 4, 5, 6))
console.log(soma(1, 2, 3, 4, 5, 6, 'q', true, [1, 2, 3]))
console.log(soma([1, 2, 3, 4, 5, 6]))

// no caso de receber menos argumentos do que o numero de parametros da funcao
// eles serao definidos como undefined

function outraFuncao (a, b, c = '3', d = '4') {
  console.log(a, b, c, d)
}
outraFuncao('1', '2')
// para fornecer um valor ao d e utilizar o default de c
outraFuncao('11', '22', undefined, '6')

// tbm permite algo parecido com kwargs por meio da desestruturacao
function dadosUsuario ({ nome, sobrenome, idade }) {
  console.log(`${nome} ${sobrenome}, ${idade} anos`)
}

const user = { nome: 'Fulano', sobrenome: 'da Silva', idade: 920 }
dadosUsuario(user)

// tbm consegue algo como empacotamento usando rest operator
// rest sempre deve ser o ultimo argumento
function conta (operador, acumulador, ...numeros) {
  console.log(
    `operador: ${operador}, acumulador: ${acumulador}, numeros: ${numeros}`
  )

  if ('+-/*'.indexOf(operador) === -1) {
    console.log(`Operador "${operador}" é invalido`)
    return
  }
  for (const numero of numeros) {
    if (operador === '+') acumulador += numero
    if (operador === '-') acumulador -= numero
    if (operador === '/') acumulador /= numero
    if (operador === '*') acumulador *= numero
  }
  console.log(acumulador)
}

conta('-', 0, 1, 4, 6, 8)
conta('a', 0, 1, 4, 6, 8)

// entao seria melhor usar o rest inves do arguments
function somaInRest (...args) {
  let total = 0
  for (const val of args) {
    if (val instanceof Array) {
      for (const i of val) total = typeof i === 'number' ? total + i : total
      continue
    }
    if (typeof val !== 'number') {
      console.log(`O valor "${val}" nao e um numero e sera desconsiderado`)
      continue
    }
    total += val
  }
  return total
}

console.log(somaInRest(1, 2, 3, 4, 5, 6))
console.log(somaInRest(1, 2, 3, 4, [5, 6, 9, 10]))

function executaFuncoes (innerFunction, ...args) {
  return innerFunction(args)
}

console.log(executaFuncoes(somaInRest, 1, 2, 3))
console.log(executaFuncoes(somaInRest, [1, 2, 3]))
