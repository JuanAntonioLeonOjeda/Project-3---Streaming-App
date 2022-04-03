const StreamModel = require('../models/stream.model')
const UserModel = require('../models/user.model')
const GenreModel = require('../models/genre.model')

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
    if(Object.keys(req.query)[0] === 'genre') {
      const genre = await GenreModel.findById(req.query.genre)
      const streams = await StreamModel.find({ live: true, genre: genre }, { quality: 0 })
      if(!streams.length) return res.status(404).send(`No live streams available for ${genre.name} genre :(`)
      res.status(200).json(streams)
    } else {
      const streams = await StreamModel.find({ live: true }, { quality: 0 })
      if(!streams.length) return res.status(404).send('No live streams available :(')
      res.status(200).json(streams)
    }
  } catch (error) {
    res.status(500).send(`Couldn't get live streams: ${error}`)
  }
}

async function joinStream(req, res) {
  try {
    const user = res.locals.user
    const stream = await StreamModel.findById(req.params.id)
    if(!stream.live) return res.status(404).send('This stream has ended')
    if(stream.currentViewers.indexOf(user.id) === -1) {
      stream.currentViewers.push(user.id)
    }
    if(stream.totalViews.indexOf(user.id) === -1) {
      stream.totalViews.push(user.id)
      user.myActivity.push(stream.id)
      await user.save()
    }
    await stream.save()
    res.status(200).json(stream)
  } catch (error) {
    res.status(500).send(`Couldn't join stream: ${error}`)
  }
}

async function createStream(req, res) {
  try {
    const streamer = res.locals.user
    if (streamer.live) return res.status(403).send(`Already streaming. Please stop current stream before starting a new one`)
    const stream = await StreamModel.create(req.body)
    const genre = await GenreModel.findById(stream.genre)
    stream.streamer = streamer.id
    streamer.myStreams.push(stream.id)
    streamer.live = true
    genre.streams.push(stream.id)
    await stream.save()
    await streamer.save()
    await genre.save()
    res.status(200).json({ message: 'Stream started!', id: stream.id })
  } catch (error) {
    res.status(500).send(`Couldn't start stream: ${error}`)
  }
}

async function updateStream(req, res) {
  try {
    const streamer = res.locals.user
    const stream = await StreamModel.findOneAndUpdate({ streamer: streamer.id, live: true }, { description: req.body.description })
    if(!stream) return res.status(404).send('No active stream available')
    res.status(200).json({ message: 'Stream updated', stream })
  } catch (error) {
    res.status(500).send(`Couldn't update stream: ${error}`)
  }
}

async function stopStream(req, res) {
  try {
    const streamer = res.locals.user
    const stream = await StreamModel.findOneAndUpdate({ streamer: streamer.id, live: true }, { live: false })
    if(!stream) return res.status(404).send(`You don't have any active streams`)
    const genre = await GenreModel.findById(stream.genre)
    streamer.live = false
    const index = genre.streams.indexOf(stream.id)
    genre.streams.splice(index,1)
    await streamer.save()
    await genre.save()
    res.status(200).send('Stream stopped')
  } catch (error) {
    res.status(500).send(`Couldn't stop stream: ${error}`)
  }
}

async function removeStream(req, res) {
  try {
    const stream = await StreamModel.findByIdAndDelete(req.params.id)
    const streamer = await UserModel.findById(stream.streamer)
    streamer.myStreams.remove(stream.id)
    await streamer.save()
    const viewers = await UserModel.find({ myActivity: stream.id })
    viewers.forEach(async viewer => {
      viewer.myActivity = viewer.myActivity.filter(activity => {
        return activity.toString() !== stream.id
      })
      await viewer.save()
    })
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