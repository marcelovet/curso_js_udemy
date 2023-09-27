module.exports.contactPage = (req, res) => {
  res.render('contact')
}

module.exports.contactPost = (req, res) => {
  console.log(req.body)
  res.send(`Recebi o seguinte de voce: ${req.body.nome}`)
}