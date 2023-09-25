/**
 * Operadores de comparacao
 * > maior que
 * < menor que
 * >= maior que ou igual a
 * <= menor que ou igual a
 * == igualdade (valor) ***** nao recomendado
 * === igualdade estrita (valor e tipo)
 * =! diferente ***** nao recomendado
 * !== diferente estrito
 */
let comp = 10 > 5
console.log(comp)
comp = 10 >= 15
console.log(comp)
comp = 10 < 11
console.log(comp)

const num1 = 10
const num2 = 10
comp = num1 === num2
console.log(comp)
// motivo de nao usar ==, ele executa type cohercion e considera
// igual tipos diferentes
// const str3 = '10'
// comp = num1 == str3
// console.log(comp)
