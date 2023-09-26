// middleware direto
// exports.homePage = (req, res, next) => {
//     res.render('index')
//     console.log(`Olha o que tem na req.session.nome: ${req.session.nome}`)
//     next()
// }

exports.homePage = (req, res) => {
    res.render('index')
    return
}
