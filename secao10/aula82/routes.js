const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contactController = require('./src/controllers/contactController')

// middleware direto em uma rota de um metodo
// function meuMiddleware (req, res, next) {
//     req.session = { nome: "fulano", sobrenome: "da silva" }
//     console.log()
//     console.log('Passei no meu middleware')
//     console.log()
//     next()
// }
// // rotas de HOME
// route.get('/', meuMiddleware, homeController.homePage, function (req, res) {
//     console.log()
//     console.log('Ainda estou aqui')
//     console.log(`recebi de req.session.sobrenome: ${req.session.sobrenome}`)
// })

// rotas de HOME
route.get('/', homeController.homePage)

// rotas de CONTATO
route.get('/contato', contactController.contactPage)
route.post('/contato', contactController.contactPost)

module.exports = route
