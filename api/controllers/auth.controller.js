const UserModel = require("../models/user.model")

async function signup(req, res) {
  try {
    const user = await UserModel.create(req.body)
    res.status(200).send('You have signed up successfully!')
  } catch (error) {
    res.status(500).send(`Sign up error ${error}`)
  }
}

module.exports = {signup}
