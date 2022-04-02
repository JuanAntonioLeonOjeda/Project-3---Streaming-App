const mongoose = require('mongoose');

const badgeSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: [true, "This badge exists already"]
  },
})

const BadgeModel = mongoose.model('badge', badgeSchema)

module.exports = BadgeModel