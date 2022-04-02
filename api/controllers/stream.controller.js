const StreamModel = require('../models/stream.model')

async function getAllStreams (req, res) {
  try {
    const streams = await StreamModel.find({}, { currentViewers: 0, quality: 0 })
    res.status(200).json(streams)
  } catch (error) {
    res.status(500).send(`Couldn't get all streams: ${error}`)
  }
}

module.exports = {
  getAllStreams
}