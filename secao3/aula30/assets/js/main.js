// escreva uma funcao que recebe 2 numeros e retorne o maior deles
const maximo = (val1, val2) => val1 > val2 ? val1 : val2

console.log(maximo(1, 2))

/**
 * Escreva uma funcao chamada ePaisagem que recebe dois argumentos, largura e
 * altura de uma imagem (number). Retorne true se a imagem estiver no modo
 * paisagem (largura > altura)
 */
const ePaisagem = (largura, altura) => largura > altura

console.log(ePaisagem(1080, 2000))
console.log(ePaisagem(2000, 1080))

/**
 * Escreva uma funcao que recebe um numero e retorne o seguinte:
 * numero divisivel por 3 retorne Fizz
 * numero divisivel por 5 retorne Buzz
 * numero divisivel por 3 e 5 retorne FizzBuzz
 * numero nao e divisivel por 3 e 5 retorne o numero
 * Se nao fornecido um numero retorne Error, value=${value} is not a number
 * use a funcao com numeros de 0 a 100
 */
function fizzBuzz (value) {
  if (typeof value !== 'number') return `Error, value=${value} is not a number`
  switch (true) {
    case value % 3 === 0 && value % 5 === 0:
      return 'FizzBuzz'
    case value % 3 === 0:
      return 'Fizz'
    case value % 5 === 0:
      return 'Buzz'
    default:
      return value
  }
}

for (let i = 0; i <= 100; i++) {
  console.log(fizzBuzz(i))
}
