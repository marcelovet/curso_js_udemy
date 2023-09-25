/* 
 * alert, confirm e prompt
 * sao methods de window, mas podem ser chamadas como funcoes
*/

window.alert('Um alerta');
window.confirm('Solicita confirmacao e retorna true ou false do usuario');
// window.prompt('Solicita um preenchimento');

const userNum1 = prompt('Digite um numero');
const userNum2 = prompt('Digite outro numero');
const num1 = Number(userNum1);
const num2 = Number(userNum2);

let opResult = num1 * num2;

alert(`O resultado da multiplicacao de seus numeros foi ${opResult}`);
