const express = require('express')
const app = express()

require('dotenv').config() // para carregar variaveis
const dbUsr = process.env.MONGO_USER
const dbPwd = process.env.MONGO_PWD
const dbName = process.env.MONGO_DB
// uri do mongodb
const uri = `mongodb+srv://${dbUsr}:${dbPwd}@cursojs01.pbuagzg.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// chamando o mongoose conectando ao mongoDB
const mongoose = require('mongoose')
mongoose.connect(uri)
  .then(() => {
    console.log('Mongo conectado')
    app.emit('DB connected')
  })
  .catch(e => console.log(e))

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
app.on("DB connected", () => {
  app.listen(3000, () => {
    console.log('Acess at http://localhost:3000')
  })
})

