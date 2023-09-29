/**
 * Padrao MVC
 * Model - controla a forma como os dados se comportam
 * View - apresenta a informacao requisita ao cliente
 * Controller - intermedia as requisicoes da view e respostas do model
 */

// requires
require('dotenv').config() // para carregar variaveis em .env
const express = require('express') // o server em si
const mongoose = require('mongoose') // trabalhar o mongo e modelar a base de dados
const session = require('express-session') // criar sessions (por padrao, salva no sistema)
const MongoStore = require('connect-mongo') // criar sessions, mas salvar no mongo
const flash = require('connect-flash') // messages instantaneas
const routes = require('./routes') // define as rotas da aplicacao
const path = require('path') // resolver o sistema de caminhos do OS
const { middlewareGlobal, checkCsrfError, csrfMiddleware, pageNotFound } = require('./src/middlewares/middleware') // funcoes executadas entre a requisicao e resposta final ao cliente
const helmet =  require('helmet') // https://expressjs.com/en/advanced/best-practice-security.html#use-helmet
const csrf = require('csurf') // evitar Cross-site Request Forgery

const app = express()

const dbUsr = process.env.MONGO_USER
const dbPwd = process.env.MONGO_PWD
const dbName = process.env.MONGO_DB
// uri do mongodb
const uri = `mongodb+srv://${dbUsr}:${dbPwd}@cursojs01.pbuagzg.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// mongoose conectando ao mongoDB
mongoose.connect(uri) // retorna uma promisse
  .then(() => {
    console.log('Mongo conectado')
    app.emit('DB connected') // entao quando resolve (conecta), emito um sinal ao app
  })
  .catch(e => console.log(e))

// cria os cookies de sessao
// http://expressjs.com/en/resources/middleware/session.html
// opcoes de configuracao das sessions
const sessionOptions = session({
  secret: process.env.MONGO_SESSIONS,
  store: MongoStore.create({ mongoUrl: uri }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
    sameSite: "lax"
  }
})
app.use(sessionOptions)
app.use(flash())

// helmet - https://expressjs.com/en/advanced/best-practice-security.html#use-helmet
app.use(helmet())

// faz o parser de url encodada
app.use(express.urlencoded({ extended: true })) // para postar formularios na aplicaacao
// parser de requisicoes json https://expressjs.com/pt-br/api.html#express.json
app.use(express.json())
// serve arquivos estaticos
app.use(express.static(path.resolve(__dirname, 'public')))

// define onde encontrar as views (o que sera renderizado ao client)
app.set('views', path.resolve(__dirname, 'src', 'views'))
// define qual engine renderiza as views
app.set('view engine', 'ejs')

// csrf
app.use(csrf())

// declara middlewares globais
// app.use(middlewareGlobal)
app.use(checkCsrfError)
app.use(csrfMiddleware)

// declara as rotas que serao servidas
app.use(routes)

// obrigatoriamente apos o router
app.use(pageNotFound)


// retorna um servidor http que fica em listen para conexoes
// inicia o app somente ao ouvir o emit que foi enviado
app.on("DB connected", () => {
  app.listen(3000, () => {
    console.log('Acess at http://localhost:3000')
  })
})

