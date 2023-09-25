/**
 * Object.values
 * Object.entries
 * Object.assign(des, any)
 * Object.getOwnPropertyDescriptor(o, 'prop')
 * ... (spread)
 * Object.keys
 * Object.freeze
 * Object.defineProperty(ies)
 */
// copiando object sem manter referencia
const produto = { nome: 'caneca', preco: 1.3 }
const material = { material: 'plasticco' }
const produtoCopiado = { ...produto }
produtoCopiado.preco = 4
console.log(produto, produtoCopiado)
// outra forma de copiar sem manter referencia
const caneca = Object.assign({}, produto, material)
console.log(caneca)

// Object.getOwnPropertyDescriptor(o, 'prop') --> propriedades de um atributo
console.log(Object.getOwnPropertyDescriptor(caneca, 'nome'))
// somente valores
console.log(Object.values(caneca))
// array de arrays com chave e valor
console.log(Object.entries(caneca))
// desestruturacao para fazer como Dict.items de python
for (const [key, value] of Object.entries(caneca)) {
  console.log(key, value)
}
