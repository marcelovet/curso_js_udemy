// evitar que variaveis do meu script conflitem com de outras libs
function meuEscopo() {
    // manipular o evento de envio do form para nao atualizar a pagina
    // quando clica no button
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    // maneira 1
    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert(1);
    //     console.log('foi enviado')
    // };

    
    // maneira 2
    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        // usando arrays
        // const pessoa = [
        //     nome.value, sobrenome.value,
        //     peso.value, altura.value
        // ];
        // pessoas.push(pessoa);
        // console.log(pessoas);
        // resultado.innerHTML += `<p>${pessoa[0]} ${pessoa[1]} ${pessoa[2]} ${pessoa[3]}</p>`

        // usando objects
        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        };

        pessoas.push(pessoa);
        console.log(pessoas);

        resultado.innerHTML += `<p>${pessoa.nome} ${pessoa.sobrenome} ${pessoa.altura} ${pessoa.peso}</p>`
    };
    
    form.addEventListener('submit', recebeEventoForm);

};
meuEscopo();