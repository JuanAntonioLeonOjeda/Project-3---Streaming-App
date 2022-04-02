const router = require('express').Router()
const { authUser, authAdmin } = require('../utils')

const { 
    getAllUsers, 
    getOneUser, 
    deleteProfile, 
    getProfile, 
    updateProfile, 
    getAllMyStreams, 
    getMyBadges,
    getMyFriends,
    addOneFriend
} = require('../controllers/user.controller')

router
    .get('/', authUser, authAdmin, getAllUsers)
    .get('/me', authUser, getProfile)
    .delete('/me', authUser, deleteProfile)
    .put('/me', authUser, updateProfile)
    .get('/me/streams', authUser, getAllMyStreams)
    .get('/me/badges', authUser, getMyBadges)
    .get('/me/friends', authUser, getMyFriends)
    .post('/me/friends/:friendId', authUser, addOneFriend)

    .get('/:userId', authUser, authAdmin, getOneUser)

module.exports = router