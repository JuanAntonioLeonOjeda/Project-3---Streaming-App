const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: [true, "This email has been register already"]
  },
  password: {
    type: String
  }
})

const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel