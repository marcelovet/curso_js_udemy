// const mod1 = require('./mod1') // importa o objeto todo
// const falaNome = require('./mod1').falaNome // somente o que quero
// mod1.nomeMeu
// falaNome()
// console.log(mod1)
const { nomeMeu, sobrenome, falaNome} = require('./mod1')

falaNome()
console.log(nomeMeu, sobrenome)

// pacotes istalados pelo npm no node
const axios = require('axios') // so precisa do nome do modulo
// axios('aula72/pessoas.json')
//   .then(response => console.log(response.data))
//   .catch(e => console.log(e))

const multiplica = require('./export_funcao')
console.log(multiplica(2, 3))
const Cachorro = require('./export_class')
const dog = new Cachorro('Akita')
console.log(dog.latir())

// caminho absoluto do diretorio e arquivo atual
console.log(__dirname)
console.log(__filename)
// trabalhando com caminhos de arquivos no sistema
const path = require('path')
// criando caminhos
// em relacao ao root do projeto
console.log(path.resolve('dir_a', 'dir_b', 'dir_d', 'arquivo'))
// .. retorna um caminho p tras
console.log(path.resolve('..'))
// em relacao ao caminho absoluto do diretorio do arquivo atual
console.log(path.resolve(__dirname, '..'))
