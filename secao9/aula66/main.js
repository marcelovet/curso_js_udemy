const nome = 'fulano'
const obj = { nome }
const novoObj = { ...nome }
console.log(novoObj)

function umObjeto (nome) {
    return { nome }
}
