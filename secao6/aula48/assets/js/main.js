// criacao de object
// getters e setters
function Produto (nome, preco, estoque) {
  this.nome = nome
  this.preco = preco

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque
    },
    set: function (value) {
      if (typeof value !== 'number') throw new TypeError('must be a number')
      estoque = value
    }
  })
}

const produto1 = new Produto('Camiseta', 20, '3')
console.log(produto1)
// console.log(produto1.estoque)
// produto1.estoque = '2'
// console.log(produto1.estoque)
