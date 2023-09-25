/**
 * while e do while
 */
let i = 0

while (i <= 10) {
  console.log(i)
  i++
}

function random (min, max) {
  const r = Math.random() * (max - min) + min
  return Math.floor(r)
}

const min = 10
const max = 50
let rand = random(min, max)

// while avalia se true e entao executa o bloco
// rand = 10 // impede de iniciar o while
while (rand !== 10) {
  console.log(`not yet, you got a ${rand}`)
  rand = random(min, max)
  if (rand === 10) console.log('You got a 10!!!!!')
}

// do while primeiro executa o bloco e depois avalia se continua o loop
const colecaoAleatoria = []
rand = 10 // nao impede de iniciar o while
do {
  rand = random(min, max)
  colecaoAleatoria.push(rand)
} while (rand !== 10)
console.log(colecaoAleatoria)

// break e continue permitem alterar o fluxo do loop
let quebrandoOLoop = []
let val1 = 0
do {
  val1++
  if (val1 > 30) break // impede valor maior que 30 no array e para o loop
  rand = random(min, max)
  quebrandoOLoop.push(rand)
} while (rand !== 10)
console.log(quebrandoOLoop)

quebrandoOLoop = []
let val2 = 0
do {
  val2++
  if (val2 > 30) continue // impede valor maior que 30 no array e pula no loop
  rand = random(min, max)
  quebrandoOLoop.push(rand)
} while (rand !== 10)
console.log(quebrandoOLoop)
