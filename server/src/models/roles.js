const mongoose = require('mongoose')

const rolesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  permissions: [String]
})

module.exports = mongoose.model('Role', rolesSchema)
