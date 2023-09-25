/*
Fulano da Silva tem x anos, pesa ykg
tem z de altura e seu IMC e de t
Fulano da Silva nasceu em w
*/
const firstName = "Fulano";
const lastName = "da Silva";
const age = 35;
const weight = 76;
const height = 1.8;

let imc; // peso / altura*altura
let birthYear;
let currentYear = 2013;

imc = weight / (height * height)
birthYear = currentYear - age

console.log(
    firstName, lastName, "tem", age, "anos, pesa", weight,
    "kg, tem", height, "de altura e seu IMC e de", imc,
    ".", firstName, lastName, "nasceu em", birthYear
)


/* template string */
console.log(
    `${firstName} ${lastName} tem ${age} anos, pesa ${weight} kg, tem ${height} de altura e seu IMC e de ${imc}. ${firstName} ${lastName} nasceu em ${birthYear}.`
)