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
    
  }
}

module.exports = { getAllUsers, getOneUser, deleteProfile }