module.exports = class Cachorro {
  constructor (raca) {
    this.raca = raca
  }

  latir () {
    return `Um cao ${this.raca} latiu au au`
  }
}