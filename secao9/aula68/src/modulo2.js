const nome = 'Ze'
const sobrenome = 'da Tarara'
const idade = 900

function soma (x, y) {
    return x + y
}

// definindo um default
export default class Pessoa {
    constructor (nome) {
        this.nome = nome
    }
}
// formas de exportar
export { nome, sobrenome, idade, soma }