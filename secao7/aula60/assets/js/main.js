class ValidaFormulario {
  constructor () {
    this.formulario = document.querySelector('.formulario')
  }

  events () {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e)
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    const validFields = this.checkValidFields()
    const validPassword = this.validatePassword()
    if (validFields && validPassword) {
      window.alert('Usuario registrado')
      this.formulario.submit()
    }
  }

  checkValidFields () {
    let valid = true
    this.clearErrorMsgs()
    for (const field of this.formulario.querySelectorAll('.register-field')) {
      const label = field.previousElementSibling.innerText
      if (!field.value) {
        this.createError(field, `Campo "${label.replace(':', '')}" deve ser preenchido`)
        valid = false
      }
      if (field.id === 'cpf') {
        console.log(field.value)
        const usrCpf = new ValidaCPF(field.value)
        console.log(usrCpf.valida())
        if (!usrCpf.valida()) {
          this.createError(field, 'CPF invalido')
          valid = false
        }
      }
      if (field.id === 'usuario' && !this.validateUsrName(field)) valid = false
    }
    return valid
  }

  createError (element, msg) {
    const div = document.createElement('div')
    div.classList.add('error-message')
    div.innerText = msg
    element.insertAdjacentElement('afterend', div)
  }

  validateUsrName (fieldName) {
    const userName = fieldName.value
    let valid = true
    if (!userName) valid = false
    if (userName.length < 3 || userName.length > 12) {
      this.createError(fieldName, 'Usuario deve ter entre 3 e 12 caracteres')
      valid = false
    }
    if (!userName.match(/^[a-zA-z0-9]+$/g)) {
      this.createError(fieldName, 'Usuario deve conter somente letras ou numeros')
      valid = false
    }
    return valid
  }

  clearErrorMsgs () {
    for (const div of document.querySelectorAll('.error-message')) {
      if (div) div.remove()
    }
  }

  validatePassword () {
    let valid = true
    const password = document.querySelector('#senha')
    const repeatPassword = document.querySelector('#repeat-senha')
    if (repeatPassword.value !== password.value) {
      this.createError(repeatPassword, 'Senhas nao correspondem')
      valid = false
    }
    return valid
  }
}

const valida = new ValidaFormulario()
valida.events()
