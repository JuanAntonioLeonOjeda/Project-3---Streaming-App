const router = require('express').Router()

const { getAllBadges } = require ('../controllers/badge.controller')

router.get('/', getAllBadges)

module.exports = router