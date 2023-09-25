// atribuicao por desestruturacao em array
const nomes = ['luiz', 'ze', 'fulano', 'sicrano', 'outro', 'e mais um']

const [nome1, nome2] = nomes

// somente os dois primeiros elementos
console.log(nome1, nome2)

// dois primerios em uma variavel cada e restante em outra
// resto prescisa ser o ultimo elemento
// ... --> operador rest e spread
const [nome3, nome4, ...resto] = nomes
console.log(nome3, nome4)
console.log(resto)

// alguns sim e outros nao
const [var1, , var3, var4, , var6] = nomes
console.log(var1, var3, var4, var6)

// em arrays aninhados
const meuArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// atribuindo o valor 6
const [, [, , seis]] = meuArray
console.log(seis)
// ou simplesmente
const [lista1, lista2, lista3] = meuArray
const novoSeis = lista2[2]
console.log(novoSeis)

// atribuicao por desestruturacao em object
const meuObject = {
  nome: 'Fulano',
  sobrenome: 'Sicrano',
  cpf: 1234687654,
  endereco: {
    rua: 'Av Brasil',
    numero: 20
  }
}

// atribuicao
// variavel = valor define um default em caso de ausencia daquela chave
const { nome = '' , idade = 12} = meuObject
console.log(nome, idade)

// atribuindo com novo nome de variavel e obtendo o resto
const { nome: novoNome, cpf, ...restoObj } = meuObject
console.log(cpf)
console.log(restoObj)
console.log(novoNome)

// em object aninhado
const { endereco: { rua, numero } } = meuObject
console.log(rua, numero)
