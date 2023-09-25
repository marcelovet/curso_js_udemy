/**
 * factory function
 * sao funcoes que retornam objetos
 */
function criaTecnico (nome, sobrenome, a, p) {
  // variaveis daqui podem ser usadas na definicao do objeto
  // mas nao estarao disponiveis depois como atributos ou metodos
  return {
    nome,
    sobrenome,
    cargo: 'tecnico',
    // this permite acessar o proprio objeto
    fala (assunto) {
      return `${this.nome} ${this.sobrenome}, ${this.cargo}, esta ${assunto}`
    },

    altura: a,
    peso: p,

    // o metodo passa a se comportar como atributo - getter
    get imc () {
      const idxIMC = this.peso / (this.altura ** 2)
      return idxIMC.toFixed(2)
    },
    get nomeCompleto () {
      return `${this.nome} ${this.sobrenome}`
    },
    // setter
    set nomeCompleto (valor) {
      valor = valor.split(' ')
      this.nome = valor.shift()
      this.sobrenome = valor.join(' ')
    }
  }
}

const p1 = criaTecnico('Ze', 'Fulano', 1.8, 90)
console.log(p1.fala('correndo'))
console.log(p1.imc)
p1.peso = 80
console.log(p1.imc)
console.log(p1.nomeCompleto)
p1.nomeCompleto = 'Jose de Oliveira'
console.log(p1.nomeCompleto)
