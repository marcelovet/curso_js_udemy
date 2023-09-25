const arrayExemplo = ['Luiz', 'Maria', 'Joao', 12, 5.5, null, true];
console.log(arrayExemplo);
console.log(arrayExemplo[0]);
console.log(arrayExemplo[4]);

// adicionar e atualizar elementos
const alunos = ['Luiz', 'Maria', 'Joao'];
alunos[0] = 'Fulano';
alunos[alunos.length] = 'Luiza';
alunos.push('Sicrano');
alunos.unshift('Bertranho');
console.log(alunos);

// remover elementos
alunos.pop() // remove o ultimo
console.log(alunos);
alunos.shift() // remove o primeiro
console.log(alunos);
delete alunos[1] // remove sem alterar indices
console.log(alunos);

// slice
console.log(alunos.slice(2,4));

// avalia se e array
console.log(alunos instanceof Array);
