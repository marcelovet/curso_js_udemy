/**
 * Operadores condicionais
 * if, else if, else
 */
const hora = 23
if (hora < 12) {
  console.log('Bom dia!')
} else if (hora <= 17) {
  console.log('Boa tarde')
} else if (hora < 24) {
  console.log('Boa noite')
} else {
  console.log('Ola')
}

const numero = 10
if (numero >= 0 && numero <= 5) {
  console.log('Sim, o numero esta entre 0 e 5')
} else {
  console.log('O numero nao esta entre 0 e 5')
}
