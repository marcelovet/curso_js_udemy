function saudacao(nome) {
    return `Bom  dia! ${nome}`;
}

const variavel = saudacao('Ze');
console.log(variavel);

function soma(val1 = 0, val2 = 0) {
    const resultado = val1 + val2;
    return resultado;
};

console.log(soma(3, 2));
console.log(soma());

const raiz_q = function (n) {
    return n ** (1/2)
};
console.log(raiz_q(2));
console.log(raiz_q(4));

// arrow function
const raiz_c = (n) => n**(1/3);
console.log(raiz_c(8));
