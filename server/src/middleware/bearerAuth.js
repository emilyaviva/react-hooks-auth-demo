const User = require('../models/users')

function bearerAuth (req, res, next) {
  // check if we have an authorization header
  if (!req.headers.authorization) {
    next(new Error('No authorization header'))
  }

  // if we have an authorization header it'll look like this:
  // "Bearer ufewinvwiubfknoernboernberonbkuwrnbvsfdlv"
  const token = req.headers.authorization.split(' ').pop()

  User.authenticateToken(token)
    .then(validUser => {
      req.user = validUser
      next()
    })
    .catch(err => {
      next(err)
    })
}

module.exports = bearerAuth
