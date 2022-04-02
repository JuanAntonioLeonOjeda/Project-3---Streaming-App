const router = require('express').Router()
const { authUser, authAdmin } = require('../utils')

const { getAllUsers, getOneUser } = require('../controllers/user.controller')

router
    .get('/', authUser, authAdmin, getAllUsers)
    .get('/:userId', authUser, authAdmin, getOneUser)

module.exports = router