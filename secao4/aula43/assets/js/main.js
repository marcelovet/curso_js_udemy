// funcao recursiva
function recursiva (max) {
  // condicao de finalizacao
  if (max > 10) return
  max++
  console.log(max)
  // chama a funcao novamente para continuar o 'loop'
  recursiva(max)
}

recursiva(0)

// funcoes geradoras
// pausa o retorno ate ser chamada novamente (lazy evaluation)
function * geradora1 () {
  // codigo
  yield 'valor 1'
  // codigo
  yield 'valor 2'
  // codigo
  yield 'valor 3'
}

const g1 = geradora1()
console.log(g1.next())
console.log(g1.next())
console.log(g1.next())
console.log(g1.next())

function * geradora2 () {
  // codigo
  for (let i = 0; i < 10; i++) {
    yield `valor ${i}`
  }
  return 'limit exceed'
}

const g2 = geradora2()

for (let index = 0; index < 11; index++) {
  console.log(g2.next())
}

// gerador infinito
function * geradora3 () {
  // codigo
  let i = 0
  while (true) {
    yield `valor ${i}`
    i++
  }
}

const g3 = geradora3()

for (let index = 0; index < 11; index++) {
  console.log(g3.next())
}

// delegando etapas de uma geradora a outra
function * geradora4 () {
  yield * geradora1() // vai trazer ate 3
  yield 'chegamos em 3'
  yield '4'
  yield '5'
}

const g4 = geradora4()
let objeto = g4.next()
do {
  console.log(objeto)
  objeto = g4.next()
} while (!objeto.done)
