const verdadeiro = true
// let tem escopo de bloco --> {}
// entao para let ele vai buncando do escopo mais interno ao mais externo
// var so tem escopo de funcao
let nome1 = 'fulano'
var nome2 = 'fulano'
console.log(nome1, nome2)

if (verdadeiro) {
  let nome1 = 'sicrano'
  console.log(nome1, nome2)
  if (verdadeiro) {
    var nome2 = 'ze' // var eh redeclarada
    let nome1 = 'outra coisa'
    console.log(nome1, nome2)
  }
}
console.log(nome1, nome2) // let ainda usa o seu escopo e var apresenta o redeclarado

var nome = 'ze'

function falaOi () {
  var nome = 'luiz' // aqui ele esta protegido do escopo externo
  console.log(nome)
}

console.log(nome)
falaOi()

// nao gera erro definir sobrenome apos
// pois var faz hoisting, ou seja, eleva as declaracoes para o inicio do
// script antes de executar, mesmo que nao declare o seu valor naquele ponto
// para let nao ocorre hoisting
console.log(sobrenome)
var sobrenome = 'sidar'
