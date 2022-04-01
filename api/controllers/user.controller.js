const UserModel = require("../models/user.model")

async function getAllUsers(req, res) {
  try {
    const users = await UserModel.find()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).send(`Couldn't get all users ${error}`)
  }
}

module.exports = { getAllUsers }