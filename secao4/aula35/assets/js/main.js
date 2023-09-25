/**
 * Declaracao de funcao
 * function nomeFuncao (params) { codigo }
 * dessa forma ocorre function hoisting
 * funcoes sao first-class object - podem ser tratadas como dados (variavel)
 */

falaOi()

function falaOi () {
  console.log('oi')
}

const souUmDado = function () {
  console.log('Sou tratado como um dado')
}

// cria possibilidade de usar o padrao factory function
function executaFuncoes (innerFunction) {
  innerFunction()
}
executaFuncoes(souUmDado)
// tambem possibilita a declaracao de funcoes anonimas como parametro
executaFuncoes(function () { console.log('Uma funcao anonima') })

// arrow function
const arrowFunction = (msg) => console.log(msg)
arrowFunction('Sou uma arrow function')

// maneira classica de definir uma funcao como metodo de um object
const obj = {
  falar: function () {
    console.log('Estou falando')
  },
  // maneira mais moderna
  ouvir () {
    console.log('Estou ouvindo')
  }
}
obj.falar()
obj.ouvir()
