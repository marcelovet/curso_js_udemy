/**
 * for classico - geralmente para iteraveis (array e string) ou um loop geral
 * for in - retorna indice ou chave (array, string, object)
 * for of - retorna valor de iteravel (array, string)
 */

// for in
// esse for le os indices ou chaves da variavel iteravel
const frutas = ['pera', 'uva', 'maca']

for (const i in frutas) {
  console.log(i, frutas[i])
}

const userProfile = {
  nome: 'marcelo',
  sobrenome: 'de tal',
  idade: 34,
  cpf: 12345
}

for (const n in userProfile) {
  console.log(n, userProfile[n])
}

// for of
// possivel de usar em objetos iteraveis que tem indices
// retorna o valor inves do index
for (const fruta of frutas) {
  console.log(fruta)
}

const texto = 'Um texto qualquer'
for (const letra of texto) { console.log(letra) }

// ainda ha uma opcao de funcao anonima em arrays
frutas.forEach(function (valor, indice, array) {
  console.log(valor, indice, array)
})

// exercicio com nodelist
// problema: querySelector seleciona somente o primeiro elemento que corresponde
// a query, p.ex. .querySelector('div') vai selecionar a primeira div que encontrar
// querySelectorAll() permite selecionar mais de um elemento do DOM e retorna uma
// NodeList --> muito parecido com array
const container = document.querySelector('.paragrafos')
const tagsP = container.querySelectorAll('p') // NodeList iteravel

// obtendo os estilos computados de um objeto no DOM
const estilos = window.getComputedStyle(document.body)
const backgroundColorBody = estilos.backgroundColor

for (const p of tagsP) {
  p.style.backgroundColor = backgroundColorBody
  p.style.color = '#fff'
}
