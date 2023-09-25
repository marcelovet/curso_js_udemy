import randomString from "./randomFunctions"

export default class CreatePassword {
    constructor () {
      this.button = document.querySelector('.gerar-senha')
      this.title = document.querySelector('.title')
    }

    eventClick () {
        this.button.addEventListener('click', e => {
          let passwordDiv = document.querySelector('.senha-gerada')
          if (passwordDiv === null) {
            passwordDiv = document.createElement('div')
            passwordDiv.classList.add('senha-gerada')
            this.getNewPassword(passwordDiv)
            return this.title.insertAdjacentElement('afterend', passwordDiv)
          }
          this.getNewPassword(passwordDiv)
        })
    }

    getNewPassword (passwordDiv) {
      if (document.querySelector('.senha-error') !== null) {
        document.querySelector('.senha-error').remove()
      }
      
      const charNumbers = Number(document.querySelector('.pwd-length').value)
      const chkMaiusculas = document.querySelector('.chk-maiusculas').checked
      const chkMinusculas = document.querySelector('.chk-minusculas').checked
      const chkNumeros = document.querySelector('.chk-numeros').checked
      const chkSimbolos = document.querySelector('.chk-simbolos').checked
      
      const someChecked = chkMaiusculas || chkMinusculas || chkNumeros || chkSimbolos

      if (!charNumbers) {
        passwordDiv.innerText = 'Voce deve definir o numero de caracteres'
        passwordDiv.classList.remove('senha-gerada')
        passwordDiv.classList.add('senha-error')
        return
      }

      if (charNumbers < 0) {
        passwordDiv.innerText = 'Defina um numero valido de caracteres'
        passwordDiv.classList.remove('senha-gerada')
        passwordDiv.classList.add('senha-error')
        return
      }

      if (!someChecked) {
        passwordDiv.innerText = 'Voce deve escolher algum tipo de caracter'
        passwordDiv.classList.remove('senha-gerada')
        passwordDiv.classList.add('senha-error')
        return
      }

      passwordDiv.innerText = randomString(
        charNumbers,
        chkMaiusculas, chkMinusculas, chkNumeros, chkSimbolos
      )
    }
}