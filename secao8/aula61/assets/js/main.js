function random (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

// Resolvendo o problema de ordem de execucao usando callback
// function esperaAi (msg, tempo, cb) {
//   setTimeout(() => {
//     console.log(msg)
//     if (cb) cb()
//   }, tempo)
// }
// const max = 3000
// const min = 200

// esperaAi('Frase 1', random(min, max), function () {
//   esperaAi('Frase 2', random(min, max), function () {
//     esperaAi('Frase 3', random(min, max))
//   })
// })
// contra: pode gerar uma arvore de callbacks conforme a complexidade do
// codigo

// solucao mais moderna ==> Promise
function esperaAi (msg, tempo, cb) {
  return new Promise((resolve, reject) => {
    // resolve eh a execucao em caso de sucesso no codigo
    // reject em caso de algum erro
    if (typeof msg !== 'string') reject(new TypeError('Bad Value'))
    setTimeout(() => {
      resolve(msg)
    }, tempo)
  })
}
const max = 3000
const min = 200

// esperaAi('Conexao com o BD', random(min, max))
//   .then(resposta => {
//     console.log(resposta)
//     return esperaAi('Tratando os dados', random(min, max))
//   })
//   .then(resposta => {
//     console.log(resposta)
//     return esperaAi(222, random(min, max))
//   })
//   .then(resposta => {
//     console.log(resposta)
//   })
//   .catch(e => { console.log(e) })

// alguns metodos em Promise
// Promise.all Promise.race Promise.resolve Promise.reject
let promises = [
  'Primeiro valor',
  esperaAi('Promise 1', 3000),
  esperaAi('Promise 2', 500),
  esperaAi('Promise 3', 1000),
  'Outro valor'
]

console.log(promises)
// entrega todas as promises
Promise.all(promises).then(dados => { console.log(dados) })
// entrega a primeira que resolver
promises = [
  esperaAi('Promise 1', 3000),
  esperaAi('Promise 2', 500),
  esperaAi('Promise 3', 1000)
]
Promise.race(promises).then(dados => { console.log(dados) })

// uso para Promise.resolve
function baixaPagina (state, auth) {
  // considere que avalia se a pagina ja esta em cache
  if (state && auth) {
    return Promise.resolve('Pagina em cache')
  } else if (state) {
    return Promise.reject(new Error('Pagina em cache, mas sem credenciais'))
  }
  return esperaAi('Baixei a pagina', 1000)
}

baixaPagina(true, false)
  .then(dados => { console.log(dados) })
  .catch(e => { console.log(e) })
