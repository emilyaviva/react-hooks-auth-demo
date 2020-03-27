require('dotenv').config()
const { MONGODB_URI, PORT } = process.env

// connect to mongodb via mongoose
const mongoose = require('mongoose')
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
mongoose.connect(MONGODB_URI, options, () => {
  console.log('Connected to MongoDB.')
})

// start the express server
const app = require('./src/app')
app.start(PORT)
