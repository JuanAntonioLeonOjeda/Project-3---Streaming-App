const router = require('express').Router()

const { 
  getAllStreams,
  joinStream,
  createStream
 } = require('../controllers/stream.controller')

router
  .get('/', getAllStreams)
  .get('/:id', joinStream)
  .post('/me', createStream)

module.exports = router