// middleware geral para adicionar misc em locals
module.exports.middlewareGlobal = (req, res, next) => {
  res.locals.errors = req.flash('errors')
  res.locals.success = req.flash('success')
  res.locals.user = req.session.user
  next()
}

// middleware para renderizar page 404 em caso de tentativa de csrf attack
module.exports.checkCsrfError = (error, req, res, next) => {
  if (error && error.code === 'EBADCSRFTOKEN') {
    return res.render('404')
  }
}

// middleware que cria o csrf token da session
module.exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken()
  next()
}

// middleware para renderizar page 404 em caso de tentar rota inexistente
module.exports.pageNotFound = (req, res, next) => {
  res.status(404);

  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

}

// middleware para pages de login obrigatorio
exports.loginRequired = (req, res, next) => {
  if (!req.session.user) {
    req.flash('errors', 'Voce precisa fazer login para acessar essa pagina.')
    req.session.save(() => res.redirect('/'))
    return
  }

  next()
}

// middleware para CSP
exports.setCSP = (req, res, next) => {
  res.setHeader(
      "Content-Security-Policy",
      "script-src 'self' https://cdn.jsdelivr.net"
  );
  next();
}