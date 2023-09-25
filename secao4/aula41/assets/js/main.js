/**
 * constructor function
 * retorna objetos assim como a factory
 * nomeada em maiscula
 * Pessoa (new)
 */
function Pessoa (nome, sobrenome) {
  // atributos e metodos privados - nao acessivel no objeto
  const ID = 1231315
  const metodoInterno = () => { console.log(ID) }
  metodoInterno()

  // atributos e metodos publicos
  this.nome = nome
  this.sobrenome = sobrenome
  this.cargo = 'CD2'
  this.fala = function (assunto) {
    return `${this.nome} ${this.sobrenome}, ${this.cargo}, esta ${assunto}`
  }
}

const p1 = new Pessoa('Fulano', 'da Silva')
const p2 = new Pessoa('Sicrano', 'Moreira')

console.log(p1, p2)
console.log(p1.fala('nenhum'))
