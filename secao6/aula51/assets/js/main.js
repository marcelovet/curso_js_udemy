// 705.484.450-52 070.987.720-03
/**
 * 7x  0x  5x  4x  8x  4x  4x  5x  0x
 * 10  9   8   7   6   5   4   3   2
 * 70  0   40  28  48  20  16  15  0  =  237
 * 11 - (237 % 11)  = valor (5, primeiro digito)
 * valor > 9 ? 0 : valor
 * 7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
 * 11  10  9   8   7   6   5   4   3   2
 * 77  0   45  32  56  24  20  20  0   10  =  284
 * 11 - (284 % 11)  = valor (segundo digito)
 * valor > 9 ? 0 : valor
 */
// verificar se tem . ou - e remover
// avaliar se o restante da string possui somente numeros
// avaliar se possui 11 digitos
// pegar os primeiros 9 digitos e avaliar quais os dois digitos finais corretos
// verificar se os 2 digitos corretos sao iguais aos 2 digitos fornecidos
function ValidaCPF (inputCPF) {
  Object.defineProperty(this, 'cpfLimpo', {
    get: function () {
      if (!inputCPF) return ''
      return inputCPF.replace(/\D+/g, '')
    }
  })
}

ValidaCPF.prototype.getTrueDigit = function (array, firstDigit = true) {
  const productValue = firstDigit ? 10 : 11
  const sumOfProduct = array
    .map((value, idx) => {
      return Number(value) * (productValue - idx)
    })
    .reduce((result, value) => result + value, 0)
  const digit = 11 - (sumOfProduct % 11)
  return digit > 9 ? 0 : digit
}

ValidaCPF.prototype.valida = function () {
  if (!this.cpfLimpo) return false
  if (this.cpfLimpo.length !== 11) return false
  if (this.isSequence()) return false

  const validationArray = Array.from(this.cpfLimpo)
  let trueDigit = this.getTrueDigit(validationArray.slice(0, 9))
  if (trueDigit !== Number(validationArray[9])) return false

  trueDigit = this.getTrueDigit(validationArray.slice(0, 10), false)
  if (trueDigit !== Number(validationArray[10])) return false

  return true
}

ValidaCPF.prototype.isSequence = function () {
  const sequence = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
  return this.cpfLimpo === sequence
}

const cpf1 = new ValidaCPF('705.484.450-52')
console.log(cpf1.valida())
const cpf2 = new ValidaCPF('070.987.720-03')
console.log(cpf2.valida())
const cpf3 = new ValidaCPF('999.999.999-99')
console.log(cpf3.valida())
