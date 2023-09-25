/**
 * Operadores logicos
 * && -> AND -> E
 * || -> OR -> OU
 * ! -> NOT -> NAO
 */
const num1 = 10
const num2 = 20
const num3 = 45

let comp = num1 > 5 && num1 <= 9
console.log(comp)
comp = num1 > 5 || num1 <= 9
console.log(comp)
console.log(!num2)
comp = num1 > num3
console.log(comp)
comp = !(num1 > num3)
console.log(comp)
comp = !(num1 > num3) && num2 === num3
console.log(comp)

/**
 * Avaliacao de curto-circuito
 * avalia ate alcancar uma condicao de finalizar a avaliacao
 * && - ao alcancar a primeira condicao false
 * || - ao alcancar a primeira condicao true
 * valores falsy:
 * - false
 * - 0
 * - '' "" ``
 * - null / undefined
 * - NaN
 */
console.log('Ze' && 0 && 'Fulano')
console.log('' || 0 || 'Fulano')
console.log(false || 1 || 'Fulano')

function falaOi () {
  return 'Oi'
}

const vaiExecutar = false
console.log(vaiExecutar && falaOi())
console.log('' && falaOi())
console.log(NaN && falaOi())
