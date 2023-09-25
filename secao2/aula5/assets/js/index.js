/* 
Primeira diferenca entre let e var
var pode ser redeclarado e let so e declarado uma vez
*/
nome = 'ze'; // NAO FACA ISSO, declarar primeiro sem let ou const,cria variavel global no sistema
var nome = 'fulano';
var nome = 'mane';

console.log(nome)