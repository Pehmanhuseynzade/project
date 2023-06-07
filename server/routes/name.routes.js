const express = require('express')
const name_router = express.Router()

const nameController = require('../controllers/name.controller')

name_router.get(`/`,nameController.getAll);

name_router.get(`/:id`,nameController.getByID)

name_router.post(`/`,nameController.getPost)

name_router.delete(`/:id`,nameController.getDelete)

module.exports = name_router;