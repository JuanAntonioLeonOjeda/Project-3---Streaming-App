const router = require('express').Router()
const { authUser, authAdmin } = require('../utils')

const { getAllUsers, getOneUser, deleteProfile } = require('../controllers/user.controller')

router
    .get('/', authUser, authAdmin, getAllUsers)
    .get('/:userId', authUser, authAdmin, getOneUser)
    .delete('/me', authUser, deleteProfile)

module.exports = router