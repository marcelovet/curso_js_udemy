/**
 * Primitivos (imutaveis) - string, number, boolean, undefined, null,
 * bigint e symbol
 */

let nome = 'luiz';
nome = 'outro valor, nao alterei o anterior';
console.log(nome);
let a = 'a';
let b = a;
console.log(a, b);
b = 'outro valor';
console.log(a, b);

/**
 * Valores por referencia (mutaveis) - array, object, function
 */

let nomes = ['luiz', 'fulano']
nomes[1] = 'alterei o valor'
console.log(nomes)
a = ['a'];
b = a;
console.log(a, b);
b[0] = 'por ser referencia, vai alterar em a e b';
console.log(a, b);

// copiando o valor de um mutavel em outra variavel sem manter referencia
let var1 = [1, 2, 3, 4, 5];
let var2 = [...var1];
var2.pop();
console.log(var1, var2);

const pessoa1 = {
    nome: 'Fulano',
    sobrenome: 'da silva',
}

const pessoa2 = pessoa1;
pessoa1.nome = 'Sicrano';
console.log(pessoa1, pessoa2);

const pessoa3 = {...pessoa1};
pessoa3.nome = 'Delfino';
console.log(pessoa1, pessoa3);
