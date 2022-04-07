process.stdout.write('\x1B[2J\x1B[0f') // Clear terminal screen

require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const { createServer } = require('http')
const { Server } = require('socket.io')
const ExpressPeerServer = require('peer').ExpressPeerServer

  ; (async function () {
    try {
      await mongoose.connect(process.env.MONGO_URL, {
        dbName: process.env.MONGO_DB
      })
      console.log('connected to DB successfully')
    } catch (error) {
      throw new Error(`Error connecting to DB: ${error}`)
    }
  })()

const app = express()
const httpServer = createServer(app)
const io = new Server (httpServer, {
  cors: {
    origin:'https://peek-beats-front.herokuapp.com'
  }
})

const peerServer = ExpressPeerServer(httpServer, {
  debug: true
})

io.on('connection', (socket) => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    socket.to(roomId).emit('user-connected', userId)
  })
})

try {
  app
    .use(cors({ origin: 'https://peek-beats-front.herokuapp.com' }))
    .use(morgan('dev'))
    .use(express.json())
    .use(express.static('public'))
    .use('/peerjs', peerServer)
    .use('/api', require('./api/routes'))

  httpServer.listen(process.env.PORT, () => {
    console.info('💻 Reboot Server Live')
    console.info(`📡 PORT: http://localhost:${process.env.PORT}`)
  })
} catch (error) {
  throw new Error(`Can't start Express: ${error}`)
}
