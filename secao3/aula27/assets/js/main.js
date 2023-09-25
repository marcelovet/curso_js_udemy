// for loop
for (let i = 0; i <= 10; i++) {
  console.log(`Linha ${i}`)
}

for (let i = 100; i <= 400; i += 100) {
  console.log(`Linha ${i}`)
}

for (let i = 400; i >= 100; i -= 100) {
  console.log(`Linha ${i}`)
}

const nomes = ['a', 'b', 'c', 'd']

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i])
}

// exercicio de desestruturacao e for
const elementos = [
  { tag: 'p', texto: 'Frase 1' },
  { tag: 'div', texto: 'Frase 2' },
  { tag: 'footer', texto: 'Frase 3' },
  { tag: 'section', texto: 'Frase 4' }
]
const container = document.querySelector('.container')

for (let i = 0; i < elementos.length; i++) {
  const element = elementos[i]
  const { tag, texto } = element
  const newTag = document.createElement(tag)
  // newTag.innerText = texto
  const nodeText = document.createTextNode(texto)
  newTag.appendChild(nodeText)
  container.appendChild(newTag)
}
