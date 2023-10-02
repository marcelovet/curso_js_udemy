const { async } = require('regenerator-runtime')
const Login = require('../models/LoginModel')

exports.index = (req, res) => {
  if (req.session.user) return res.redirect('/')
  res.render('login')
}

// como o model eh uma promisse, meu controller tbm precisa ser
exports.register = async (req, res) => {
  try {
    const login = new Login(req.body)
    await login.register()

    // em caso de erro, exibir ele ao usuario na mesma pagina
    if (login.errors.length > 0) {
      // flash message do erro
      req.flash('errors', login.errors)
      // salvo a sessao e redireciono o cliente a mesma page
      req.session.save(function () {
        return res.redirect('/login')
      })
      // finalizo o controller para nao continuar o codigo
      return
    }

    // flash message do sucesso
    req.flash('success', 'Seu usuario foi criado com successo')
    // salvo a sessao e redireciono o cliente a mesma page
    req.session.save(function () {
      return res.redirect('/login')
    })
  } catch (e) {
    console.log(e)
    res.render('404')
  }
}

exports.login = async (req, res) => {
  try {
    const login = new Login(req.body)
    await login.login()

    // em caso de erro, exibir ele ao usuario na mesma pagina
    if (login.errors.length > 0) {
      // flash message do erro
      req.flash('errors', login.errors)
      // salvo a sessao e redireciono o cliente a mesma page
      req.session.save(function () {
        return res.redirect('/login')
      })
      // finalizo o controller para nao continuar o codigo
      return
    }

    // flash message do erro
    req.flash('success', `Bem vindo ${login.user.email}`)
    req.session.user = login.user
    // salvo a sessao e redireciono o cliente a mesma page
    req.session.save(function () {
      return res.redirect('/')
    })
  } catch (e) {
    console.log(e)
    res.render('404')
  }
}

exports.logout = function (req, res) {
  req.session.destroy()
  res.redirect('/')
}