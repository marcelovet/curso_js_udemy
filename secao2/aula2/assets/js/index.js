// Não podemos criar variáveis com palavras reservadas
// Variáveis precisam ter nomes significativos
// Não pode começar o nome de uma variável com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos redeclarar variáveis com let
// NÃO UTILIZE VAR, UTILIZE LET.
let clientName = 'Ze Fulano';
let clientBirthYear;
clientBirthYear = 1984;

console.log(clientName, `nasceu em`, clientBirthYear)

clientBirthYear = 1990;
console.log(clientName, `nasceu em`, clientBirthYear)
