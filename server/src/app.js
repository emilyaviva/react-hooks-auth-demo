// Third-party resources
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

// Prepare the express app
const app = express()

// App-level middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// Routes
const authRouter = require('./routes/authRouter')
app.use(authRouter)
const rolesRouter = require('./routes/rolesRouter')
app.use(rolesRouter)

// Catch-alls
const notFound = require('./middleware/notFound')
app.use(notFound)
const errorHandler = require('./middleware/errorHandler')
app.use(errorHandler)

// Export the server and a start method
module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => {
      console.log(`Express server listening on port ${port}.`)
    })
  }
}
