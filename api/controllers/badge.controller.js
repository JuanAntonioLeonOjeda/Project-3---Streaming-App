const BadgeModel = require("../models/badge.model")

async function createOneBadge(req, res) {
  try {
    const badge = await BadgeModel.create(req.body)
    res.status(200).json(badge)
  } catch (error) {
    res.status(500).send(`Couldn't create any badge ${error}`)
  }
}

async function getAllBadges(req, res) {
  try {
    const badges = await BadgeModel.find()
    res.status(200).json(badges)
  } catch (error) {
    res.status(500).send(`Couldn't get badges ${error}`)
  }
}

async function getOneBadge(req, res) {
  try {
    const badge = await BadgeModel.findOne()
    res.status(200).json(badge)
  } catch (error) {
    res.status(500).send(`Couldn't get that badge ${error}`)
  }
}

module.exports = { createOneBadge, getAllBadges, getOneBadge }