const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')
const middlewareGlobal = require('./src/middlewares/middleware')

// faz o parser de url encodada
app.use(express.urlencoded({ extended: true }))

// serve arquivos estaticos
app.use(express.static(path.resolve(__dirname, 'public')))

// direciona as view
app.set('views', path.resolve(__dirname, 'src', 'views'))
// define qual engine renderiza as views
app.set('view engine', 'ejs')

// 
// middleware global
app.use(middlewareGlobal) 
// declara as rotas
app.use(routes)

// retorna um servidor http que fica em listen para conexoes
app.listen(3000, () => {
  console.log('Acess at http://localhost:3000')
})
