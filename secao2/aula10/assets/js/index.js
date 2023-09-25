// strngs sao indexadas e iteraveis
let umaString = "um \"um texto\" ";

console.log(umaString);
console.log(umaString[0]);
console.log(umaString[4]);
console.log(umaString[16]);
console.log(umaString[-1]);

//metodos de strings
console.log(umaString.length);
console.log(umaString.charAt(6));
// retorna vazio inves de NaN como indices
console.log(umaString.charAt(16));
console.log(umaString.concat('em um', ' lindo dia'));
// encontrar sub-string
console.log(umaString.indexOf('texto'));
// pesquisa a partir de um indice
console.log(umaString.indexOf('texto', 3));
// e case sensitive e retorna -1 se nao encontrado
console.log(umaString.indexOf('Texto'));
// pesquisa de tras p frente
console.log(umaString.lastIndexOf('texto', 3));
// pesquisa regex
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/[a-z]/g));

// The replace() method does not change the string it is called on.
// The replace() method returns a new string.
// The replace() method replaces only the first match
// If you want to replace all matches, use a regular expression with the /g flag set.
console.log(umaString.replace(/um/g, 'dois'));
// To replace case insensitive, use a regular expression with an /i flag (insensitive):
let text = "Please visit Microsoft!";
console.log(text.replace(/MICROSOFT/i, "W3Schools"));


console.log(umaString.toLowerCase());
console.log(umaString.toUpperCase());

// The trim() method removes whitespace from both sides of a string:
let text1 = "      Hello World!      ";
console.log(text1.trim());
// trimStart and trimEnd to remove in only one side

// The padStart() method pads a string from the start.
// The padEnd() method pads a string from the end.
// It pads a string with another string (multiple times) until it reaches a given length.
text1 = "5"
console.log(text1.padStart(5, 'x'));
console.log(text1.padEnd(5, 'x'));


// There are 3 methods for extracting a part of a string:
// slice(start, end)
// substring(start, end)
// substr(start, length)
// slices, tem end exclusivo
console.log(umaString.slice(3, 7));
// slice negativo, conta o length - o valor e vai ate o end
console.log(umaString.slice(-7, 12));
console.log(umaString.slice(-7, -2));
console.log(umaString.substring(
    umaString.length - 7, umaString.length - 2
));

// array de substring
console.log(umaString.split(' '));
console.log(umaString.split(' ', 2));