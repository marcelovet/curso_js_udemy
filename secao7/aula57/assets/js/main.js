// heranca
class DispositivoEletronico {
  constructor (nome) {
    this.nome = nome
    this.ligado = false
  }

  ligar () {
    if (this.ligado) {
      console.log(`${this.nome} ja ligado`)
      return
    }

    this.ligado = true
    console.log(`${this.nome} foi ligado`)
  }

  desligar () {
    if (!this.ligado) {
      console.log(`${this.nome} ja desligado`)
      return
    }

    this.ligado = false
    console.log(`${this.nome} foi desligado`)
  }
}

// fazendo uma classe herdar da outra com extends
class Smartphone extends DispositivoEletronico {
  constructor (nome, marca, cor) {
    super(nome) // chama o constructor da parent e envia os parametros
    this.marca = marca
    this.cor = cor
  }
}

const s1 = new Smartphone('Galaxy S10', 'Samsumg', 'Prata')
console.log(s1)
s1.ligar()
s1.desligar()

class Tablet extends DispositivoEletronico {
  constructor (nome, temWifi) {
    super(nome) // chama o constructor da parent e envia os parametros
    this.temWifi = temWifi
  }

  // sobrescrevendo metodo
  ligar () {
    if (this.ligado) {
      console.log('Seu metodo ligar() foi alterado')
      console.log(`Seu tablet ${this.nome} ja esta ligado`)
      return
    }

    this.ligado = true
    console.log(`Seu tablet ${this.nome} foi ligado`)
  }
}

const t1 = new Tablet('Ipad', true)
t1.ligar()
t1.ligar()
