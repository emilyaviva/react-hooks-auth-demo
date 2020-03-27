function errorHandler (err, req, res, next) {
  console.error('___SERVER ERROR___', err)
  res.status(500).json({ error: err.message })
}

module.exports = errorHandler
