const BadgeModel = require("../models/badge.model")

async function getAllBadges(req, res) {
  try {
    const badges = await BadgeModel.find()
    res.status(200).json(badges)
  } catch (error) {
    res.status(500).send(`Couldn't get badges ${error}`)
  }
}

module.exports = { getAllBadges }