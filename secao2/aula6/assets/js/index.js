/* 
Dados primitivos
string, number and undefined
*/
let myString = 'string';
myString = "string";
myString = `string`;
let myNumber = 10;
myNumber = 10.5;
let myUndefined; // undefined - nao aponta para um local na memoria
let myNull = null; // null - nao aponta para um local na memoria
let myBool = true; // boolean - true or false

console.log(typeof myString, myString);
console.log(typeof myNumber, myNumber);
console.log(typeof myUndefined, myUndefined);
console.log(typeof myNull, myNull);
console.log(typeof myBool, myBool);

// valores por referencia sao alterados em conjunto, p ex, array
let a = [1, 2];
let b = a;
console.log(a, b);
a.push(3)
console.log(a, b);

// valores primitivos nao
a = 3;
b = a;
console.log(a, b);
b = 1;
console.log(a, b);
