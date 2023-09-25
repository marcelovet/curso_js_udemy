/**
 * return
 * retorna um valor e termina a funcao
 */
function soma (a, b) {
  return a + b
}

let variavel = soma(1, 2)
console.log(variavel)

// funcao sem retorno (retorna undefined)
function soma2 (a, b) {
  console.log(a + b)
}

variavel = soma2(1, 2)
console.log(variavel)

function criaPessoa (nome, sobrenome) {
  return { nome, sobrenome }
}

const p1 = criaPessoa('Fulano', 'da Silva')
const p2 = criaPessoa('Joze', 'da Silva')
console.log(p1, p2)
console.log(typeof p1, typeof p2)

// closure
function falaFrase (comeco) {
  function falaResto (resto) {
    return comeco + ' ' + resto
  }
  return falaResto
}

const olaMundo = falaFrase('Ola')
console.log(olaMundo('Mundo'))

// outra forma usando o return direto
function criaMultiplicador (multiplicador) {
  return function multiplica (n) {
    return n * multiplicador
  }
}

const duplica = criaMultiplicador(2)
console.log(duplica(3))
const triplica = criaMultiplicador(3)
console.log(triplica(3))

// a funcao consegue acessar o seu proprio escopo
// e as de escopos superiores, seus parents
// sempre do escopo mais interno para o mais externo
const nome = 'luiz'
function falaNome () {
  console.log(nome)
}
falaNome()

// a funcao vai utilizar o escopo inicial onde foi definida
// entao na definicao de falaNome() ele vai buscar o escopo interno,
// nao encontrar e buscar o externo, que e o geral const nome = 'luiz'
function usaFalaNome () {
  const nome = 'Ze'
  falaNome()
  console.log(nome)
}
usaFalaNome()
