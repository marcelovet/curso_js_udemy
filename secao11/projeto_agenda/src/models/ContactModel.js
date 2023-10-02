const mongoose = require('mongoose')
const { async } = require('regenerator-runtime')
const validator = require('validator')

const ContactSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: false, default: '' },
    phone: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    createdAt: { type: Date, default: Date.now }
})

const ContactModel = mongoose.model('Contact', ContactSchema)

function Contact (body) {
  this.body = body
  this.errors = []
  this.contact = null
}

Contact.prototype.register = async function () {
  this.fieldsValidation()

  if (this.errors.length > 0) return

  this.contact = await ContactModel.create(this.body)
}

Contact.prototype.fieldsValidation = function () {
  this.cleanUp()

  if(!this.body.firstname) this.errors.push('O nome e um campo obrigatorio')

  if (this.body.email && !validator.isEmail(this.body.email)) {
    this.errors.push('E-mail invalido')
  }

  if (!this.body.email && !this.body.phone) {
    this.errors.push('O contato deve ter telefone ou email (ao menos um deles)')
  }
}

Contact.prototype.cleanUp = function () {
  for (const key in this.body) {
    if (typeof this.body[key] !== 'string') {
      this.body[key] = ''
    }
  }

  this.body = {
    firstname: this.body.firstname,
    lastname: this.body.lastname,
    phone: this.body.phone,
    email: this.body.email
  }

}

Contact.prototype.edit = async function (id) {
  if (typeof id !== 'string') return
  this.fieldsValidation()
  if (this.errors.length > 0) return
  this.contact = await ContactModel.findByIdAndUpdate(
    id, this.body, { new: true }
  )
}

// static methods
Contact.findById = async function (id) {
  if (typeof id !== 'string') return
  const contact = await ContactModel.findById(id)
  return contact
}

Contact.findContacts = async function () {
  const contact = await ContactModel.find().sort({ createdAt: -1 })
  return contact
}

Contact.delete = async function (id) {
  if (typeof id !== 'string') return
  const contact = await ContactModel.findByIdAndDelete(id)
  return contact
}

module.exports = Contact
