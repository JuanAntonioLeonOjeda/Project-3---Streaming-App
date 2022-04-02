const UserModel = require("../models/user.model")

async function getAllUsers(req, res) {
  try {
    const users = await UserModel.find()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).send(`Couldn't get all users ${error}`)
  }
}

async function getOneUser(req, res) {
  try {
    const user = await UserModel.findById(req.params.userId, { password: 0 })
    res.status(200).json(user)
  } catch (error) {
    res.status(500).send(`Couldn't get user, error: ${error}`)
  }
}

async function deleteProfile(req, res) {
  try {
    const user = await UserModel.findByIdAndDelete(res.locals.user.id)
    res.status(200).send(`User ${user.userName} has been deleted`)
  } catch (error) {
    res.status(500).send(`Couldn't delete user profile, error: ${error}`)
  }
}

async function getProfile(req, res) {
  try {
    const user = await UserModel.findById(res.locals.user.id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).send(`Couldn't get user profile, error: ${error}`)
  }
}
  
async function updateProfile(req, res) {
  try {
    const user = await UserModel.findByIdAndUpdate(res.locals.user.id, req.body)
    res.status(200).send("Changes were successfully updated")
  } catch (error) {
    res.status(500).send(`Couldn't update user profile, error: ${error}`)
  }
}

async function getAllMyStreams(req, res) {
  try {
    const user = await UserModel.findById(res.locals.user.id)
    res.status(200).json(user.myStreams)
  } catch (error) {
    res.status(500).send(`Couldn't get user streams, error: ${error}`)
  }
}

async function getMyBadges(req, res) {
  try {
    const user = await UserModel.findById(res.locals.user.id)
    res.status(200).json(user.badges)
  } catch (error) {
    res.status(500).send(`Couldn't get user badges, error: ${error}`)
  }
}

async function getMyFriends(req, res) {
  try {
    const user = await UserModel.findById(res.locals.user.id)
    res.status(200).json(user.friends)
  } catch (error) {
    res.status(500).send(`Couldn't get user badges, error: ${error}`)
  }
}

async function addFriend(req, res) {
  try {
    const user = await UserModel.findById(res.locals.user.id)
    user.friends.push(req.params.friendId)
    await user.save()
    res.status(200).send("User added!")
  } catch (error) {
    res.status(500).send(`Couldn't add friend, error: ${error}`)
  }
}

async function removeFriend(req, res) {
  try {
    const user = await UserModel.findById(res.locals.user.id)
    user.friends.remove(req.params.friendId)
    await user.save()
    res.status(200).send("Friend has been removed!")
  } catch (error) {
    res.status(500).send(`Couldn't remove friend, error: ${error}`)
  }
}

async function getMyFavoriteStreamers(req, res) {
  try {
    const user = await UserModel.findById(res.locals.user.id)
    res.status(200).json(user.favoriteStreamers)
  } catch (error) {
    res.status(500).send(`Couldn't get favorite streamers, error: ${error}`)
  }
}

async function addFavoriteStreamer(req, res) {
  try {
    const user = await UserModel.findById(res.locals.user.id)
    user.favoriteStreamers.push(req.params.favoriteStreamerId)
    await user.save()
    res.status(200).send("Streamer added to your list!")
  } catch (error) {
    res.status(500).send(`Couldn't add streamer to favorites list, error: ${error}`)
  }
}

async function removeFavoriteStreamer(req, res) {
  try {
    const user = await UserModel.findById(res.locals.user.id)
    user.favoriteStreamers.remove(req.params.favoriteStreamerId)
    await user.save()
    res.status(200).send("Streamer has been removed!")
  } catch (error) {
    res.status(500).send(`Couldn't remove favorite streamer, error: ${error}`)
  }
}

module.exports = { 
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
  }