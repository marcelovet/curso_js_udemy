module.exports.contactPage = (req, res) => {
  // res.send(`
  //   <form action="/contato" method="POST">
  //   Nome: <input type="text" name="nome">
  //   <button>Enviar</button>
  //   </form>
  // `)
  res.render('index')
}

module.exports.contactPost = (req, res) => {
  console.log(req.body)
  res.send(`Recebi o seguinte de voce: ${req.body.nome}`)
}