// const HomeModel = require('../models/HomeModel')

// HomeModel.create({
//     titulo: 'Outro titulo de testes',
//     descricao: 'Outra descricao de testes'
// })
//   .then(data => console.log(data))
//   .catch(e => console.log(e))

// HomeModel.find()
//   .then(data => console.log(data))
//   .catch(e => console.log(e))

exports.homePage = (req, res) => {
    // req.session.user = { user: 'siclano', logged: true }
    // // console.log(req.session.user)
    // req.flash('info', 'Ola mundo') // cria uma vez e a utiliza
    // req.flash('error', 'Deu ruim') // mas apos seu uso ela
    // req.flash('success', 'Deu bom') // some
    console.log(req.flash('error'))
    res.render('index')
    return
}
