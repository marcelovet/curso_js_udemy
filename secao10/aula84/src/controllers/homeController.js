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
    res.render('index')
    return
}
