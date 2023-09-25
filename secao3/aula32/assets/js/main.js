// setInterval e setTimeOut
function retornaHora (data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instancia de Date.')
  }

  if (!data) {
    data = new Date()
  }
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    hours: '2-digit',
    minutes: '2-digit',
    seconds: '2-digit',
    timeStyle: 'medium'
  })
}

console.log(retornaHora())
let x = 0
// executa a funcao em cada x milissegundos
const timer = setInterval(function () {
  x++
  return console.log([retornaHora(), x])
}, 1000)

// setTimeout executa uma funcao apos determinado tempo
// clearTimeout interrompe o setInterval
setTimeout(function () { clearTimeout(timer) }, 5000)
