const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserModel = require("../models/user.model")

async function signup(req, res) {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10)
    req.body.password = hash
    const user = await UserModel.create(req.body)
    const payload = {email: user.email}
    const token = jwt.sign(payload, process.env.SECRET, {expiresIn: '1h'})
    res.status(200).json({email: user.email, token: token})
  } catch (error) {
    res.status(500).send(`Sign up error ${error}`)
  }
}

module.exports = {signup}