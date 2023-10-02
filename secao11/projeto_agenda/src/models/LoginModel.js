const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
})

const LoginModel = mongoose.model('Login', LoginSchema)

class Login {
  constructor (body) {
    this.body = body
    this.errors = []
    this.user = null
  }

  async login () {
    this.loginValidation()
    if (this.errors.length > 0) return

    // procura no mongo em LoginModel por essa chave
    this.user = await LoginModel.findOne({ email: this.body.email })
    if (!this.user) {
      this.errors.push('Usuario ou senha incorretos')
      return
    }

    if (!bcryptjs.compareSync(this.body.password, this.user.password)) {
      this.errors.push('Usuario ou senha incorretos')
      this.user = null
      return
    }
  }
  
  async register () {
    this.loginValidation()
    if (this.errors.length > 0) return

    await this.userExists()
    if (this.errors.length > 0) return

    // a salt is random data fed as an additional input to a one-way
    // function that hashes data
    const salt = bcryptjs.genSaltSync()
    // gera um hash a partir de uma string
    this.body.password = bcryptjs.hashSync(this.body.password, salt)
    this.user = await LoginModel.create(this.body)
  }

  loginValidation () {
    this.cleanUp()
    // o email precisa ser valido
    if (!validator.isEmail(this.body.email)) this.errors.push('E-mail invalido')
    // a senha precisa ter entre 3 e 50 caracteres
    if (this.body.password.length < 3 || this.body.password.length > 50) {
      this.errors.push('A senha precisa ter entre 3 e 50 caracteres')
    }
  }

  cleanUp () {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = ''
      }
    }

    this.body = {
      email: this.body.email,
      password: this.body.password
    }

  }
  
  async userExists () {
    this.user = await LoginModel.findOne({ email: this.body.email })
    if (this.user) this.errors.push('Usuario ja cadastrado')
  }
}

module.exports = Login
