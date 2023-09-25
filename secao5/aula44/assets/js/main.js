// revisao arrays
// criacao
const array1 = [1, 2, 3, 4, 5]
const nomes = new Array('valor1', 'valor2', 'valor3')
// index
console.log(nomes[0])
console.log(array1[1])
// atribuicao em indices
console.log(array1[2])
array1[2] = 9
console.log(array1[2])
// deletar sem remover o indice e removendo o indice
delete nomes[1]
console.log(nomes)
nomes.pop()
console.log(nomes)
// spread, pega os elementos de um e espalha no outro
// eh uma forma de n manter a referencia dos valores em copia
const novo = [...nomes]
nomes.pop()
console.log(nomes, novo)
// shift e pop => remove no inicio e no fim
// unshift e push => adiciona no inicio e no fim
console.log(novo)
novo.pop()
console.log(novo)
novo.shift()
console.log(novo)
novo.push('bla')
console.log(novo)
novo.unshift('blo')
console.log(novo)
// slice
nomes.pop()
nomes.push('ta')
nomes.push('te')
nomes.push('ti')
nomes.push('to')
nomes.push('tu')
console.log(nomes)
console.log(nomes.slice(0, -1)) // do primeiro ao penultimo
console.log(nomes.slice(0, 2)) // do primeiro ao segundo
// str to array (split) - array to str (join)
const frase = 'era uma vez, um rato xadrez'
console.log(frase.split(' '))
console.log(frase.split(' ').join(' '))
// splice
// splice faz change in place, assim como pop
// nome.splice(indiceOndeIniciar, quantosDeletar, elementosAAcionar1, elementosAAcionar2)
const newNames = ['maria', 'joao', 'eduardo', 'gabriel', 'juliz']
console.log(newNames)
newNames.splice(4, 1)
console.log(newNames)
// remover nenhum e adicionar no 0
newNames.splice(0, 0, 'ze', 'fulano')
console.log(newNames)
// remover o ultimo e adicionar no final
newNames.splice(-1, 1, 'ze', 'fulano')
console.log(newNames)
// iniciar em um indice e remover ate o final, depois adicionar os valores
newNames.splice(2, Number.MAX_VALUE, 'ze', 'fulano')
console.log(newNames)
// concatenando arrays
console.log(nomes)
const arrayConcatenada = nomes.concat(newNames, array1)
console.log(arrayConcatenada)
// ou
const array2 = [...nomes, ...newNames, ...array1]
console.log(array2)
