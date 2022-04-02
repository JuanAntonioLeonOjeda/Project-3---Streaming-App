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

async function getLiveStreams(req, res) {
  try {
    const streams = await StreamModel.find({ live: true }, { currentViewers: 0, quality: 0 })
    if(!streams.length) return res.status(200).send('No live streams available :(')
    res.status(200).json(streams)
  } catch (error) {
    res.status(500).send(`Couldn't get live streams: ${error}`)
  }
}

async function joinStream(req, res) {
  try {
    const user = res.locals.user
    const stream = await StreamModel.findOne({ id: req.params.id })
    if(!stream.live) return res.status(200).send('This stream has ended')
    stream.currentViewers.push(user.id)
    stream.totalViews.push(user.id)
    await stream.save()
    user.myActivity.push(stream.id)
    await user.save()
    res.status(200).json(stream)
  } catch (error) {
    res.status(500).send(`Couldn't join stream: ${error}`)
  }
}

async function createStream(req, res) {
  try {
    const streamer = res.locals.user
    const stream = await StreamModel.create(req.body)
    stream.streamer = streamer.id
    streamer.myStreams.push(stream.id)
    await stream.save()
    await streamer.save()
    res.status(200).json({ message: 'Stream started!', id: stream.id })
  } catch (error) {
    res.status(500).send(`Couldn't start stream: ${error}`)
  }
}

async function updateStream(req, res) {
  try {
    const streamer = res.locals.user
    const stream = await StreamModel.findOneAndUpdate({ streamer: streamer.id, live: true }, { description: req.body.description })
    if(!stream) return res.status(200).send('No active stream available')
    res.status(200).json({ message: 'Stream updated', stream })
  } catch (error) {
    res.status(500).send(`Couldn't update stream: ${error}`)
  }
}

async function stopStream(req, res) {
  try {
    const streamer = res.locals.user
    const stream = await StreamModel.findOneAndUpdate({ streamer: streamer.id, live: true }, { live: false })
    if(!stream) return res.status(200).send(`You don't have any active streams`)
    res.status(200).send('Stream stopped')
  } catch (error) {
    res.status(500).send(`Couldn't stop stream: ${error}`)
  }
}

async function removeStream(req, res) {
  try {
    const stream = await StreamModel.findByIdAndDelete(req.params.id)
    const streamer = await UserModel.findById(stream.streamer)
    streamer.myStreams = streamer.myStreams.filter(id => {
      return id.toString() !== stream.id
    })
    await streamer.save()
    res.status(200).send('Stream removed')
  } catch (error) {
    res.status(500).send(`Couldn't remove stream: ${error}`)
  }
}

module.exports = {
  getAllStreams,
  getLiveStreams,
  joinStream,
  createStream,
  updateStream,
  stopStream,
  removeStream
}