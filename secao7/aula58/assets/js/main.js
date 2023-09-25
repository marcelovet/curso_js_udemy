// metodos estaticos e de instancia
class ControleRemoto {
  constructor (tv) {
    this.tv = tv
    this.volume = 0
    ControleRemoto.trocaPilha(this)
  }

  // metodo da instancia
  aumentarVolume () {
    this.volume += 2
  }

  diminuirVolume () {
    this.volume -= 2
  }

  // metodo da classe (estatico)
  static trocaPilha (objTV) {
    console.log(`Pilha trocada em ${objTV.tv}`)
  }
}

const c1 = new ControleRemoto('LG')
// eh um metodo da instancia
c1.aumentarVolume()
c1.aumentarVolume()
console.log(c1)

// c1.trocaPilha() nao funciona pq nao eh um metodo da instancia
ControleRemoto.trocaPilha(c1)
