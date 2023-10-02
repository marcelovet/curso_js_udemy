import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './assets/css/style.css'

import Login from './modules/Login'
import Contact from './modules/Contact'

const login = new Login('#form-login')
const register = new Login('#form-register')
const contact = new Contact('#form-contact')

login.init()
register.init()
contact.init()