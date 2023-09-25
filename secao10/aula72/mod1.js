// exportando ojetos no Node
const nome = 'luiz'
const sobrenome = 'sicrano'

const falaNome = () => {
    console.log(nome, sobrenome)
}

module.exports.nomeMeu = nome
module.exports.sobrenome = sobrenome
module.exports.falaNome = falaNome

// console.log(module.exports)
