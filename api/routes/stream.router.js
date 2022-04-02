const router = require('express').Router()

const { 
  getAllStreams
 } = require('../controllers/stream.controller')

router
  .get('/', getAllStreams)

module.exports = router