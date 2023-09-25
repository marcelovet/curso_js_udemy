let varA = 'a'; // b
let varB = 'b'; // c
let varC = 'c'; // a

// forma mais antiga
let temp = varC;
varC = varA;
varA = varB;
varB = temp;
console.log(varA, varB, varC);

// forma mais moderna
varA = 'a'; // b
varB = 'b'; // c
varC = 'c'; // a

[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC);
