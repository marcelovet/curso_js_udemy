/**
 * factory function
 */
function CriaCalculadora () {
  this.display = document.querySelector('.display')
  this.btnClear = document.querySelector('.btn-clear')

  this.inicia = () => {
    this.clickButton()
    this.pressEnter()
  }

  this.btnToDisplay = (value) => {
    this.display.value += value
    this.display.focus()
  }

  this.clearDisplay = () => { this.display.value = '' }
  this.delValue = () => { this.display.value = this.display.value.slice(0, -1) }

  this.makeEquation = () => {
    let equation = this.display.value

    try {
      equation = eval(equation)

      if (!equation) {
        window.alert('Conta invalida')
        return
      }

      this.display.value = String(equation)
    } catch (error) {
      window.alert('Conta invalida')
    }
  }

  this.pressEnter = () => {
    document.addEventListener('keyup', (e) => {
      if (e.code === 'Enter') this.makeEquation()
    })
  }

  this.clickButton = () => {
    // this aqui -> calculadora
    document.addEventListener('click', (e) => {
      // this aqui -> document
      // entao usa o .bind(this) para referenciar a calculadora
      // ou a arrow function pq ela nao altera o this
      const el = e.target
      if (el.classList.contains('btn-num')) this.btnToDisplay(el.innerText)
      if (el.classList.contains('btn-clear')) this.clearDisplay()
      if (el.classList.contains('btn-del')) this.delValue()
      if (el.classList.contains('btn-eq')) this.makeEquation()
    })
  }
}

const calculadora = new CriaCalculadora()
calculadora.inicia()
