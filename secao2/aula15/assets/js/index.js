// objeto literal
const pessoa1 = {
    // atributos
    nome: 'Luiz',
    sobrenome: "da Silva",
    idade: 25,

    falaIdade() {
        console.log(`Sou ${this.nome} e tenho ${this.idade} anos`)
    },

    incrementaIdade() {
        this.idade++;
    },
};

console.log(pessoa1.nome)
console.log(`${pessoa1.nome} ${pessoa1.sobrenome} tem ${pessoa1.idade} anos`)
pessoa1.falaIdade()
pessoa1.incrementaIdade()
pessoa1.falaIdade()

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,

        falaIdade() {
            console.log(`Sou ${this.nome} e tenho ${this.idade} anos`)
        },
    
        incrementaIdade() {
            this.idade++;
        },
    };
};

/**
 * ou
    function criaPessoa (nome, sobrenome, idade) {
        return {nome, sobrenome, idade};
    };
*/


const pessoa2 = criaPessoa('ze', 'fulano', 43);
const pessoa3 = criaPessoa('fe', 'fulano', 33);
const pessoa4 = criaPessoa('te', 'fulano', 53);

pessoa2.falaIdade();