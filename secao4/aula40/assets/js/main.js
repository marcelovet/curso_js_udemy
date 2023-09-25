/**
 * factory function
 */
function criaCalculadora () {
  return {
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),

    clearDisplay () {
      this.display.value = ''
    },

    delValue () {
      this.display.value = this.display.value.slice(0, -1)
    },

    makeEquation () {
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
    },

    inicia () {
      this.clickButton()
      this.pressEnter()
    },

    pressEnter () {
      this.display.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) this.makeEquation()
      })
    },

    clickButton () {
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
    },

    btnToDisplay (value) {
      this.display.value += value
      console.log(value)
    }
  }
}

const calculadora = criaCalculadora()
calculadora.inicia()
