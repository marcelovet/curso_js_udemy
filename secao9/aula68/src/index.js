// se ja tver uma variavel de mesmo nome, use as
import { default as nome2, sobrenome, age as idade, soma } from './modulo1'
// importando tudo como um object
import * as md2 from './modulo2'
// importando o default de um modulo
import MinhaClasse from './modulo2'
import meuNome from './modulo1'

const nome = 'Sicrano'
console.log(`${nome} amigo de ${nome2} ${sobrenome} tem ${idade} anos`)
console.log(`${md2.nome} amigo de ${nome2} ${md2.sobrenome} tem ${md2.idade} anos`)

const x = 1
const y = 2
const somado = soma(x, y)
console.log(`Resultado da soma de ${x} + ${y} = ${somado}`)

const umaInstancia = new MinhaClasse('marcelo')
console.log(umaInstancia.nome)
console.log(meuNome)
