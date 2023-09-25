// // getters e setters
// class Carro {
//   constructor (nome) {
//     this.nome = nome
//     this.velocidade = 0
//   }

//   acelerar () {
//     if (this.velocidade >= 100) return
//     this.velocidade++
//   }

//   freiar () {
//     if (this.velocidade <= 0) return
//     this.velocidade--
//   }
// }

// // ate aqui funcionou tudo da forma espeerada
// const c1 = new Carro('Fusca')
// for (let idx = 0; idx < 201; idx++) {
//   c1.acelerar()
// }
// console.log(c1)

// for (let idx = 0; idx < 201; idx++) {
//   c1.freiar()
// }
// console.log(c1)
// // mas a velocidade ainda nao esta protegida de alteracao no harcode
// c1.velocidade = 1000
// console.log(c1)
// // isso pode ser prevenido colocando ela em privado e criando getter e setter
const _velocidade = Symbol('velocidade')
class Carro {
  constructor (nome, ano) {
    this.nome = nome
    this[_velocidade] = 0 // privado
    this._ano = 0
  }

  acelerar () {
    if (this[_velocidade] >= 100) return
    this[_velocidade]++
  }

  freiar () {
    if (this[_velocidade] <= 0) return
    this[_velocidade]--
  }

  get velocidade () {
    return this[_velocidade]
  }

  set velocidade (value) {
    if (typeof value !== 'number') return
    if (value >= 100 || value <= 0) {
      console.log(`Valor ${value} fora do intervalo aceito. Velocidade aceita: 0 a 100`)
      return
    }
    this[_velocidade] = value
  }

  // nao e obrigado a ter um setter e getter (o par), pode ter so um deles
  get estadoDoCarro () {
    return `${this.nome}, ano ${this.ano}, esta a ${this.velocidade} Km/h`
  }

  get ano () {
    return this._ano
  }

  set ano (value) {
    if (typeof value !== 'number') return
    this._ano = value
  }
}

const c1 = new Carro('Fusca')
for (let idx = 0; idx < 201; idx++) {
  c1.acelerar()
}
console.log(c1)
console.log(c1.velocidade)
c1.velocidade = 30
console.log(c1.velocidade)
c1.velocidade = 3000
console.log(c1.velocidade)
c1.ano = 1970
console.log(c1.estadoDoCarro)
