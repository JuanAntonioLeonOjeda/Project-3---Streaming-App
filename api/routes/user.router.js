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
    addOneFriend,
    removeOneFriend
} = require('../controllers/user.controller')

router
    .get('/', authUser, authAdmin, getAllUsers)
    .get('/me', authUser, getProfile)
    .delete('/me', authUser, deleteProfile)
    .put('/me', authUser, updateProfile)
    .get('/me/streams', authUser, getAllMyStreams)
    .get('/me/badges', authUser, getMyBadges)
    .get('/me/friends', authUser, getMyFriends)
    .post('/me/friends/:friendId', authUser, addOneFriend) //! params id or friendId¿?¿?¿?
    .delete('/me/friends/:friendId', authUser, removeOneFriend) //! params id or friendId¿?¿?¿?

    .get('/:userId', authUser, authAdmin, getOneUser) //! params id or userId¿?¿?¿?

module.exports = router