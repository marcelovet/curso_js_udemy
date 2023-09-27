module.exports.middlewareGlobal = (req, res, next) => {
  if (req.body.nome) {
    console.log()
    console.log(`Vi que voce enviou ${req.body.nome}`)
    console.log()
  }
  res.locals.umaVariavelLocal = 'Este eh o valor da variavel local'
  next()
}

module.exports.checkCsrfError = (error, req, res, next) => {
  if (error && error.code === 'EBADCSRFTOKEN') {
    return res.render('404')
  }
}

module.exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken()
  next()
}