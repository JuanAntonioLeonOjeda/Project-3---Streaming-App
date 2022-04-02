const StreamModel = require('../models/stream.model')
const UserModel = require('../models/user.model')

async function getAllStreams(req, res) {
  try {
    const streams = await StreamModel.find({}, { currentViewers: 0, quality: 0 })
    res.status(200).json(streams)
  } catch (error) {
    res.status(500).send(`Couldn't get all streams: ${error}`)
  }
}

async function joinStream(req, res) {
  try {
    const stream = await StreamModel.findOne({ id: req.params.id })
    res.status(200).json(stream)
  } catch (error) {
    res.status(500).send(`Couldn't join stream: ${error}`)
  }
}

async function createStream(req, res) {
  try {
    const stream = await StreamModel.create(req.body)
    res.status(200).json({ message: 'Stream started!', id: stream.id })
  } catch (error) {
    res.status(500).send(`Couldn't start stream: ${error}`)
  }
}

async function updateStream(req, res) {
  try {
    const stream = await StreamModel.findOneAndUpdate(req.params.id, req.body)
    res.status(200).json({ message: 'Stream updated', stream })
  } catch (error) {
    res.status(500).send(`Couldn't update stream: ${error}`)
  }
}

async function removeStream(req, res) {
  try {
    const stream = await StreamModel.findByIdAndDelete(req.params.id)
    const streamer = await UserModel.findById(stream.streamer)
    const viewers = await UserModel.findById(stream.totalViews)
    streamer.myStreams = streamer.myStreams.filter(id => {
      return id.toString() !== stream.id
    })
    viewers.forEach(viewer => {
      viewer.activity.filter(stream => {
        return stream.toString() !== stream.id
      })
    })
    await streamer.save()
    res.status(200).send('Stream removed')
  } catch (error) {
    res.status(500).send(`Couldn't remove stream: ${error}`)
  }
}

module.exports = {
  getAllStreams,
  joinStream,
  createStream,
  updateStream,
  removeStream
}