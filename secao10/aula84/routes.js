const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contactController = require('./src/controllers/contactController')

// rotas de HOME
route.get('/', homeController.homePage)

// rotas de CONTATO
route.get('/contato', contactController.contactPage)
route.post('/contato', contactController.contactPost)

module.exports = route
