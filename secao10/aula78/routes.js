const express = require('express')
const route = express.Router()
const homeController = require('./controllers/homeController')
const contactController = require('./controllers/contactController')

// rotas de HOME
route.get('/', homeController.homePage)

// rotas de CONTATO
route.get('/contato', contactController.contactPage)
route.post('/contato', contactController.contactPost)

module.exports = route
