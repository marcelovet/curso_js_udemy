/* 
 * Operadores aritmeticos, de atribuicao e de incremento
 * Aritmeticos
 * +: adicao e concatenacao
 * - / * **: subtracao, divisao, multiplicacaoe potenciacao
 * %: resto da divisao
*/

const firstNum = 5;
const secondNum = 3;
console.log(firstNum + secondNum)
console.log(firstNum - secondNum)
console.log(firstNum * secondNum)
console.log(firstNum / secondNum)
console.log(firstNum ** secondNum)
console.log(firstNum % secondNum)
const thirdNum = 7;
console.log(firstNum + secondNum * thirdNum)

/**
 * ordem de precedencia
 * ()
 * **
 * * / %
 * + -
 */
console.log((firstNum + secondNum) * thirdNum)

// ++ operador de incremento - incrementa 1
let contador = 0;
console.log(contador++); // apresenta contador e depois incrementa
console.log(++contador); // incrementa e depois apresenta contador
// -- operador de decremento - decrementa 1
console.log(contador--); // apresenta contador e depois decrementa
console.log(--contador); // decrementa e depois apresenta contador

// operadores de atribuicao
const myStep = 10;

contador += myStep;
console.log(contador);
contador += myStep;
console.log(contador);
contador += myStep;
console.log(contador);

contador += 5;
console.log(contador);
contador -= 5;
console.log(contador);
contador *= 5;
console.log(contador);
contador /= 5;
console.log(contador);
contador %= 5;
console.log(contador);
contador **= 5;
console.log(contador);

const myString = 'string';
console.log(contador + myString) // com + vai causar uma concatenacao
console.log(contador - myString) // com os demais gera um not a number

const a = 10;
let newString = '5';
console.log(a - newString) // comportamento estranho do JS que tenta resolver o erro para nos

// parseando para number
newString = parseInt('5');
console.log(newString)
newString = parseFloat('5.45');
console.log(newString)
newString = Number('5.45');
console.log(newString)
newString = Number('ze');
console.log(newString)