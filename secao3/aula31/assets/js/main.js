// try, catch, finally throw
// tratando e lancando erros
try {
  console.log(variavelNaoExistente)
} catch (error) {
  console.log('variavelNaoExistente nao existe')
  console.log(error)
}

function soma (x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('x e y precisam ser do tipo "number"')
  }
  return x + y
}

try {
  console.log(console.log(soma(1, 'a')))
} catch (error) {
  console.log(error)
} finally {
  console.log('Sou sempre executado')
}

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
console.log(retornaHora(new Date(0)))
try {
  console.log(retornaHora(1))
} catch (e) {
  // trantando o erro
} finally {
  console.log('tenha um bom dia')
}
