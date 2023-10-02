import validator from "validator"
import createErrorMsg from "./createErrorMsg"

export default class Contact {
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
    
    const firstNameInput = el.querySelector('input[name="firstname"]')
    const emailInput = el.querySelector('input[name="email"]')
    const phoneInput = el.querySelector('input[name="phone"]')
    
    let error = false

    if (!firstNameInput.value) {      
      error = true
      firstNameInput.after(createErrorMsg('firstname'))
    } else {
      createErrorMsg('firstname', true)
    }

    if (!emailInput.value && !phoneInput.value) {
      error = true
      emailInput.after(createErrorMsg('required-email'))
      phoneInput.after(createErrorMsg('required-phone'))
    } else {
      createErrorMsg('required-email', true)
      createErrorMsg('required-phone', true)
    }
    
    if (emailInput.value && !validator.isEmail(emailInput.value)) {
      error = true
      emailInput.after(createErrorMsg('email'))
    } else {
      createErrorMsg('email', true)
    }

    if (!error) return el.submit()
    
  }
}