// validando CPF com classes
export default class ValidaCPF {
  // constructor (inputCPF) {
  //   this.inputCPF = inputCPF
  // }

  // ou
  constructor (inputCPF) {
    Object.defineProperty(this, 'cpfLimpo', {
      get: function () {
        if (!inputCPF) return ''
        return inputCPF.replace(/\D+/g, '')
      }
    })
  }

  get cpfLimpo () {
    if (!this.inputCPF) return ''
    return this.inputCPF.replace(/\D+/g, '')
  }

  static getTrueDigit (array, firstDigit = true) {
    const productValue = firstDigit ? 10 : 11
    const sumOfProduct = array
      .map((value, idx) => {
        return Number(value) * (productValue - idx)
      })
      .reduce((result, value) => result + value, 0)
    const digit = 11 - (sumOfProduct % 11)
    return digit > 9 ? 0 : digit
  }

  isSequence () {
    const sequence = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return this.cpfLimpo === sequence
  }

  valida () {
    if (!this.cpfLimpo) return false
    if (this.cpfLimpo.length !== 11) return false
    if (this.isSequence()) return false

    const validationArray = Array.from(this.cpfLimpo)
    let trueDigit = ValidaCPF.getTrueDigit(validationArray.slice(0, 9))
    if (trueDigit !== Number(validationArray[9])) return false

    trueDigit = ValidaCPF.getTrueDigit(validationArray.slice(0, 10), false)
    if (trueDigit !== Number(validationArray[10])) return false

    return true
  }
}

// const cpf1 = new ValidaCPF('705.484.450-52')
// // console.log(cpf1.cpfLimpo)
// console.log(cpf1.valida())
// const cpf2 = new ValidaCPF('070.987.720-03')
// console.log(cpf2.valida())
// const cpf3 = new ValidaCPF('999.999.999-99')
// console.log(cpf3.valida())
