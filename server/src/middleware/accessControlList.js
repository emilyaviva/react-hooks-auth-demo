function accessControlList (permission) {
  return function (req, res, next) {
    try {
      if (req.user.role.permissions.includes(permission)) {
        next() // allow the user to go on
      } else {
        // when you call next() with anything other than a request object
        // as the first parameter, Express treats it as an error and shunts
        // it to whichever middleware handles the error first
        // by having e.g. function errorHandler (err, req, res, next) --
        // so, we could call this as next('You shall not pass')
        // or next(new Error('You shall not pass')) and have it properly handled
        // by the error-handling middleware we wrote which expects an Error object
        next(new Error('You shall not pass'))
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = accessControlList
