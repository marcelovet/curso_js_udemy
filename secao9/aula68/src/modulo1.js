const nome = 'Fulano'
const sobrenome = 'da Silva'
const idade = 30

function soma (x, y) {
    return x + y
}

// formas de exportar
// export { o que quero }
// use as para alterar o nome de exportacao da variavel
// colocando uma variavel como default
export { nome as default, sobrenome, idade as age, soma }
// export direto na criacao
export const cidade = 'BH'