const router = require('express').Router()
const { authUser, authAdmin } = require('../utils')

const { getAllUsers, getOneUser, deleteProfile, getProfile } = require('../controllers/user.controller')

router
    .get('/', authUser, authAdmin, getAllUsers)
    .get('/me', authUser, getProfile)
    .delete('/me', authUser, deleteProfile)
    
    .get('/:userId', authUser, authAdmin, getOneUser)

module.exports = router