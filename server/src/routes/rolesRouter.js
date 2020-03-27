const express = require('express')
const rolesRouter = express.Router()

const Role = require('../models/roles')

rolesRouter.get('/roles', async (req, res, next) => {
  // send all roles
  const allRoles = await Role.find({})
  res.status(200).json(allRoles)
})

rolesRouter.post('/roles', async (req, res, next) => {
  // expect that the user sent a properly formed request body
  // with name:String and permissions:String[]
  const role = new Role(req.body)
  const created = await role.save()
  res.status(200).json(created)
})

module.exports = rolesRouter
