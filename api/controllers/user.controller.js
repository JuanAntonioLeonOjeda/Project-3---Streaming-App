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

module.exports = { getAllUsers, getOneUser, deleteProfile, getProfile, updateProfile }