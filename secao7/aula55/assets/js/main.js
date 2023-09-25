// classes
// faz exatamente o mesmo que a funcao construtora
class Pessoa {
  // recebendo parametros
  constructor (nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  // criando metodos
  // ja sera atribuido ao prototype e nao preciso definir como na constructor
  falar () {
    console.log(`${this.nome} esta falando`)
  }

  comer () {
    console.log(`${this.nome} esta comendo`)
  }

  beber () {
    console.log(`${this.nome} esta bebendo`)
  }
}

// como seria na constructor
function Pessoa2 (nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} esta falando`)
}
Pessoa2.prototype.comer = function () {
  console.log(`${this.nome} esta comendo`)
}

Pessoa2.prototype.beber = function () {
  console.log(`${this.nome} esta bebendo`)
}

const p1 = new Pessoa('fulano', 'sicrano')
console.log(p1)
p1.comer()
const p2 = new Pessoa2('fulano', 'sicrano')
console.log(p2)
