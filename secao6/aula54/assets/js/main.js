// Map() - eh uma estrutura de dados
const pessoas = [
  { id: 3, nome: 'Luiz' },
  { id: 2, nome: 'Maria' },
  { id: 1, nome: 'Helena' }
]

// por padrao do metodo de construcao de objetos
// ele vai ordenar os numeros e tornar eles strings
// const novasPessoas = {}
// for (const pessoa of pessoas) {
//   const { id } = pessoa
//   novasPessoas[id] = { ...pessoa }
// }
// console.log(novasPessoas)

const novasPessoas = new Map()
for (const pessoa of pessoas) {
  const { id } = pessoa
  novasPessoas.set(id, { ...pessoa })
}
console.log(novasPessoas)
console.log(novasPessoas.get(2))
console.log(novasPessoas.get(5))
console.log(novasPessoas.keys())
console.log(novasPessoas.values())
novasPessoas.delete(2)
console.log(novasPessoas)

// retorna um array
for (const pessoa of novasPessoas) {
  console.log(pessoa)
}

for (const [identificador, { id, nome }] of novasPessoas) {
  console.log(`${identificador} tem id ${id} e nome ${nome}`)
}
