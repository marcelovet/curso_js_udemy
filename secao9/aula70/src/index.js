import './assets/css/style.css'
import ValidaFormulario from './assets/js/ValidaFormulario'
import GeraCPF from './assets/js/GeraCPF'

// const gerador = new GeraCPF()
// for (let index = 0; index < 10; index++) {
//     console.log(gerador.geraNovoCPF())    
// }

(function () {
  const cpfGenerator = new GeraCPF()
  const cpfDiv = document.querySelector('.cpf-gerado')
  const cpfP = document.createElement('p')
  cpfP.innerText = cpfGenerator.geraNovoCPF()
  cpfDiv.appendChild(cpfP)
})()

const valida = new ValidaFormulario()
valida.events()
