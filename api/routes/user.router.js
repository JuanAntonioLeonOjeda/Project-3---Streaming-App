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
    addFriend,
    removeFriend,
    getMyFavoriteStreamers,
    addFavoriteStreamer,
    removeFavoriteStreamer
} = require('../controllers/user.controller')

router
    .get('/', authUser, authAdmin, getAllUsers)
    .get('/me', authUser, getProfile)
    .delete('/me', authUser, deleteProfile)
    .put('/me', authUser, updateProfile)
    .get('/me/streams', authUser, getAllMyStreams)
    .get('/me/badges', authUser, getMyBadges)
    .get('/me/friends', authUser, getMyFriends)
    .post('/me/friends/:friendId', authUser, addFriend) //! params id or friendId¿?¿?¿?
    .delete('/me/friends/:friendId', authUser, removeFriend) //! params id or friendId¿?¿?¿?
    .get('/me/favoriteStreamers', authUser, getMyFavoriteStreamers)
    .post('/me/favoriteStreamers/:favoriteStreamerId', authUser, addFavoriteStreamer)
    .delete('/me/favoriteStreamers/:favoriteStreamerId', authUser, removeFavoriteStreamer)

    .get('/:userId', authUser, authAdmin, getOneUser) //! params id or userId¿?¿?¿?

module.exports = router