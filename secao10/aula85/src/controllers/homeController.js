exports.homePage = (req, res) => {
    res.render('index', {
        titulo: 'Este sera o <span style="color: red;">titulo</span> da pagina',
        numeros: [0, 1, 2, 3, 4, 5]
    })
    return
}
