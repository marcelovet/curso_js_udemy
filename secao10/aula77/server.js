const express = require('express')
const app = express()

// parametros de url
// /profiles/1234?     (1234 seriam param)
// campanha=googleleads& (? inicia uma querystring)
// nome_campanha=seila (& para adicionar outra query)

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello world!')

})

// usando params :nomeDoParam? (: indica que eh param e ? que eh opcional)
app.get('/testes/:idUsers?', (req, res) => {
  console.log(req.params)
  console.log(req.query)
  
  if (req.params.idUsers) {
    res.send(`Ola usuario ${req.params.idUsers}`)
  } else { res.send(`Ola usuario anonimo`) }
       
})

app.get('/form', (req, res) => {
  res.send(`
    <form action="/form" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
  `)  
})

app.post('/form', (req, res) => {
  // os nomes dos objetos daqui serao iguais aos parametros name do input
  console.log(req.body)
  res.send(`Recebi o seguinte de voce: ${req.body.nome}`)
})

app.listen(3000, () => {
  console.log('Acess at http://localhost:3000')
})
