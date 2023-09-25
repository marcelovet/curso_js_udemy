function Pessoa (nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome
  // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome
}

// ambas tem uma copia do metodo nome completo
const p1 = new Pessoa('maria', 'fulana')
const p2 = new Pessoa('jose', 'sicrano')

console.log(p1, p2)
// todo objeto tem um prototype que eh um molde para construcao do objeto
// usando um prototype temos melhoria de performance por nao implementar
// a cada vez os metodos, ele so referencia o prototipo
// os os objetos tem o proto padrao de Object.prototype
Pessoa.prototype.nomeCompleto = function () { return this.nome + ' ' + this.sobrenome }
console.log(p1.nomeCompleto())

// herdando os prototyppe
const objA = { chaveA: 'A' }
const objB = { chaveB: 'B' }
const objC = { chaveC: 'C' }
console.log(Object.getPrototypeOf(objC))
Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)
console.log(Object.getPrototypeOf(objC))
console.log(objC.chaveC, objC.chaveB, objC.chaveA)

function Produto (nome, preco, estoque) {
  this.nome = nome
  this.preco = preco
  this.estoque = estoque
}

Produto.prototype.desconto = function (percent) {
  this.preco = this.preco - (this.preco * (percent / 100))
}
Produto.prototype.aumento = function (percent) {
  this.preco = this.preco + (this.preco * (percent / 100))
}

const produto1 = new Produto('camiseta', 50)
console.log(produto1)
produto1.aumento(10)
console.log(produto1)
produto1.desconto(40)
console.log(produto1)

// heranca
// produto
// Camiseta ==> cor, Caneca ==> material
function Camiseta (nome, preco, estoque, cor) {
  Produto.call(this, nome, preco, estoque)
  this.cor = cor
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta
// sobrescrevendo o .aumento() de Produto
Camiseta.prototype.aumento = function (valor) {
  this.preco = this.preco + valor
}

const produto2 = new Camiseta('Long lose', 25, 200, 'red')
console.log(produto2)
produto2.desconto(10)
console.log(produto2)
produto2.aumento(100)
console.log(produto2)

function Caneca (nome, preco, estoque, material) {
  Produto.call(this, nome, preco, estoque)
  this.material = material
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca
Caneca.prototype.descritor = function () {
  return `Caneca ${this.nome}: feita de ${this.material}, valor R$ ${this.preco}`
}

const produto3 = new Caneca('Durb', 32.8, 200, 'resina')
produto3.aumento(10)
console.log(produto3.descritor())
