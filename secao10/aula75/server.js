const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello world!')

})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente')
  
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
    res.send('Recebi o formulario')
})

app.listen(3000, () => {
    console.log('Acess at http://localhost:3000')
})
