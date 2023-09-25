// criacao de object
const objeto = {
  nome: 'bla',
  idade: 1,
  endereco: [],
  documentos: { rg: 'mg123', cpf: 123 },
  metodo: function () { console.log(`oi ${this.nome}`) },
  getDataNascimento: function () {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
  }
}

objeto.metodo()
console.log(objeto.nome)
const chave = 'nome'
console.log(objeto[chave])
console.log(objeto.getDataNascimento())
objeto.idade = 25
console.log(objeto.getDataNascimento())

const objeto2 = new Object()
objeto2.nome = 'ble'

// construtoras de objects
// factory / constructor / classes
function criaPessoa (nome, sobrenome, idade, endereco, documentos) {
  return {
    nome,
    sobrenome,
    idade,
    endereco,
    documentos,
    metodo () { console.log(`oi ${this.nome}`) },
    getDataNascimento () {
      const dataAtual = new Date()
      return dataAtual.getFullYear() - this.idade
    },
    get nomeCompleto () {
      return `${this.nome} ${this.sobrenome}`
    }
  }
}

const pessoa1 = criaPessoa('ze', 'fulano', 12, ['dasda', 'rere'], { rg: 'mg1231' })
pessoa1.metodo()
console.log(pessoa1.nomeCompleto)

// constructor
function Pessoa (nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome
  // travando o valor ao definir (impede de alterar atributos)
  Object.freeze(this)
}

const p1 = new Pessoa('fulano', 'sicrano')
p1.nome = 'Outro nome'
console.log(p1)

// defineProperty e defineProperties
// permitem mudar ou alterar propriedades em objetos
function Produto (nome, preco, estoque) {
  this.nome = nome
  this.preco = preco

  Object.defineProperty(this, 'estoque', {
    enumerable: false, // torna acessivel
    value: estoque, // define seu valor
    writable: true, // declara se ele pode ser modificado
    configurable: false // configuravel, permite ou n deletar e editar
  })

  Object.defineProperties(this, {
    estilo: {
      enumerable: true,
      value: 'estilosa',
      writable: true
    },
    tamanho: {
      enumerable: true,
      value: 'G',
      configurable: false
    }
  })
}

const produto1 = new Produto('Camiseta', 20, 3)
console.log(produto1)
console.log(produto1.estoque)
p1.estoque = 4
console.log(Object.keys(p1))
