module.exports.middlewareGlobal = (req, res, next) => {
  if (req.body.nome) {
    console.log()
    console.log(`Vi que voce enviou ${req.body.nome}`)
    console.log()
  }
  res.locals.umaVariavelLocal = 'Este eh o valor da variavel local'
  next()
}