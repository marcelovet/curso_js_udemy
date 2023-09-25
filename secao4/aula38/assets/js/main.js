/**
 * closure, funcao de callback e IIFE
 */
// escopos acessiveis a retornaFuncao:
// Global
function retornaFuncao (nome) {
  // Aqui
  // const nome = 'luiz'
  return function () {
    // E aqui
    return nome
  }
}

// a closure vai estabelecer as variaveis (lembrar) do seu escopo na definicao
const funcao = retornaFuncao('luiz')
const funcao2 = retornaFuncao('ze')
console.log(funcao())
console.log(funcao2())

// funcao de callback
// executa quando um evento ocorre
/**
 * Aqui a ordem de ocorrer cada funcao vai variar aleatoriamente
 * mas sempre depois de ola mundo
 */
// function f1 () {
//   setTimeout(function () {
//     console.log('f1')
//   }, Math.random() * 100)
// }

// function f2 () {
//   setTimeout(function () {
//     console.log('f2')
//   }, Math.random() * 100)
// }

// function f3 () {
//   setTimeout(function () {
//     console.log('f3')
//   }, Math.random() * 100)
// }
// f1()
// f2()
// f3()
// console.log('ola mundo')

/**
 * com o callback consigo definir a ordem
 */
function f1 (callback) {
  setTimeout(function () {
    console.log('f1')
    if (callback) callback()
  }, Math.random() * 100)
}

function f2 (callback) {
  setTimeout(function () {
    console.log('f2')
    if (callback) callback()
  }, Math.random() * 100)
}

function f3 (callback) {
  setTimeout(function () {
    console.log('f3')
    if (callback) callback()
  }, Math.random() * 100)
}

// f1(function () {
//   f2(function () {
//     f3(function () {
//       console.log('ola mundo')
//     })
//   })
// })
// ou mais organizado

function f1Callback () {
  f2(f2Callback)
}

function f2Callback () {
  f3(f3Callback)
}

function f3Callback () {
  console.log('ola mundo')
}

f1(f1Callback)

// IIFE - immediately invoked function expression
// permite definir uma funcao anonima e ja chamar ela imediatamente
// assim protege o escopo interno, que nao tera acesso ao global
// o que impede possiveis conflitos de nomes
const peso = 12;
(function (idade, peso) {
  const nome = 'Essa eh uma funcao IIFE'
  function falaNome (nome) {
    console.log(nome)
    console.log(idade, peso)
  }
  falaNome(nome)
})(peso, 32)
