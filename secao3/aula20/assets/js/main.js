// function myescope () {
//   const form = document.querySelector('#imc-form')
//   function setResult (msg) {
//     const result = document.querySelector('#imc-calculado')
//     result.innerHTML = msg
//   }

//   function imcCalculator (formEvent) {
//     formEvent.preventDefault()
//     const peso = form.querySelector('#peso')
//     const altura = form.querySelector('#altura')

//     const personData = {
//       peso: parseFloat(peso.value),
//       altura: parseFloat(altura.value)
//     }
//     personData.imc = parseFloat(personData.peso / (personData.altura ** 2))
//     if (personData.imc < 18.5) {
//       personData.imcCategory = 'Abaixo do peso'
//     } else if (personData.imc >= 18.5 && personData.imc <= 24.9) {
//       personData.imcCategory = 'Peso normal'
//     } else if (personData.imc > 24.9 && personData.imc <= 29.9) {
//       personData.imcCategory = 'Sobrepeso'
//     } else if (personData.imc > 29.9 && personData.imc <= 34.9) {
//       personData.imcCategory = 'Obesidade grau 1'
//     } else if (personData.imc >= 34.9 && personData.imc < 39.9) {
//       personData.imcCategory = 'Obesidade grau 2'
//     } else {
//       personData.imcCategory = 'Obesidade grau 3'
//     }

//     if (isNaN(personData.peso) || isNaN(personData.altura)) {
//       let strigHtml = '<div id="imc-error">'
//       if (isNaN(personData.peso) && isNaN(personData.altura)) {
//         strigHtml += '<p>Peso e Altura invalidos</p></div>'
//       } else if (isNaN(personData.peso)) {
//         strigHtml += '<p>Peso invalido</p></div>'
//       } else {
//         strigHtml += '<p>Altura invalida</p></div>'
//       }
//       setResult(strigHtml)
//     } else {
//       const strigHtml = '<div id="imc-result">' +
//         `<p>Seu IMC e ${personData.imc.toFixed(2)} (${personData.imcCategory})</p>` +
//         '</div>'
//       setResult(strigHtml)
//     }
//   }
//   form.addEventListener('submit', imcCalculator)
// }

// myescope()
const form = document.querySelector('#imc-form')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  const peso = e.target.querySelector('#peso')
  const altura = e.target.querySelector('#altura')
  const personData = {
    peso: parseFloat(peso.value),
    altura: parseFloat(altura.value)
  }

  if (!personData.peso || !personData.altura) {
    personData.class = 'imc-error'
    let strigHtml = ''

    if (!personData.peso && !personData.altura) {
      strigHtml += 'Peso e Altura invalidos'
    } else if (!personData.peso) {
      strigHtml += 'Peso invalido'
    } else {
      strigHtml += 'Altura invalida'
    }

    setResult(strigHtml, personData.class)
    return
  }

  personData.imc = personData.peso / (personData.altura ** 2)
  personData.imcCategory = evalImc(personData.imc)
  personData.class = 'imc-result'
  const strigHtml = `Seu IMC e ${personData.imc.toFixed(2)} (${personData.imcCategory})`
  setResult(strigHtml, personData.class)
})

function setResult (msg, type) {
  const result = document.querySelector('#imc-calculado')
  result.innerHTML = ''
  const p = document.createElement('p')
  p.innerHTML = msg
  const div = document.createElement('div')
  div.classList.add(type)
  div.appendChild(p)
  result.appendChild(div)
}

function evalImc (n) {
  const imc = [
    'Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
    'Obesidade grau 2', 'Obesidade grau 3'
  ]
  if (n < 18.5) return imc[0]
  if (n >= 18.5 && n <= 24.9) return imc[1]
  if (n > 24.9 && n <= 29.9) return imc[2]
  if (n > 29.9 && n <= 34.9) return imc[3]
  if (n > 34.9 && n <= 39.9) return imc[4]
  if (n > 39.9) return imc[5]
}
