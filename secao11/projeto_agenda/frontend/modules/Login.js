import validator from "validator"
import createErrorMsg from "./createErrorMsg"

export default class Login {
  constructor (formID) {
    this.form = document.querySelector(formID)
  }

  init () {
    this.events()
  }

  events () {
    if(!this.form) return
    this.form.addEventListener('submit', e => {
      e.preventDefault()
      this.validate(e)
    })
  }

  validate (e) {
    const el = e.target
    const emailInput = el.querySelector('input[name="email"]')
    const pwdInput = el.querySelector('input[name="password"]')
    let error = false

    if (pwdInput.value.length < 3 || pwdInput.value.length > 50) {
      error = true      
      pwdInput.after(createErrorMsg('password'))
    } else {
      createErrorMsg('password', true)
    }
    
    if (!validator.isEmail(emailInput.value)) {
      error = true
      emailInput.after(createErrorMsg('email'))
    } else {
      createErrorMsg('email', true)
    }

    if (!error) return el.submit()
    
  }
}