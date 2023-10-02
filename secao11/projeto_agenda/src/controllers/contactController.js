const { async } = require('regenerator-runtime')
const Contact = require('../models/ContactModel')

exports.index = (req, res) => {
  res.render('contact', { index: true, contact: {} })
}

exports.register = async (req, res) => {
  try {
    const contact = new Contact(req.body)
    await contact.register()

    if (contact.errors.length > 0) {
      req.flash('errors', contact.errors)
      req.session.save(function () {
        return res.redirect('/contact')
      })
      return
    }

    req.flash('success', 'Seu contato foi salvo')
    req.session.save(function () {
      return res.redirect(`/contact/${contact.contact._id}`)
    })

  } catch (e) {
    console.log(e)
    res.render('404')
  }
}

exports.editIndex = async function (req, res) {
  try {
    if (!req.params.id) res.render('404')

    const contact = await Contact.findById(req.params.id)
    
    if (!contact) res.render('404')

    res.render('contact', { index: false, contact })
  } catch (e) {
    console.log(e)
    res.render('404')
  }
}

exports.edit = async function (req, res) {
  try {
    if (!req.params.id) res.render('404')
    const contact = new Contact(req.body)
    await contact.edit(req.params.id)

    if (contact.errors.length > 0) {
      req.flash('errors', contact.errors)
      req.session.save(function () {
        return res.redirect(`/contact/${req.params.id}`)
      })
      return
    }

    req.flash('success', 'Contato editado com sucesso')
    req.session.save(function () {
      return res.redirect(`/contact/${contact.contact._id}`)
    })

  } catch (e) {
    console.log(e)
    res.render('404')
  }
}

exports.delete = async function (req, res) {
  try {
    if (!req.params.id) res.render('404')

    const contact = await Contact.delete(req.params.id)
    
    if (!contact) res.render('404')

    req.flash('success', 'Contato apagado com sucesso')
    req.session.save(function () {
      return res.redirect('/')
    })
  } catch (e) {
    console.log(e)
    res.render('404')
  }
}