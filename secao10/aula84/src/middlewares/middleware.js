module.exports = (req, res, next) => {
  if (req.body.nome) {
    console.log()
    console.log(`Vi que voce enviou ${req.body.nome}`)
    console.log()
  }
  next()
}