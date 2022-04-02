const router = require('express').Router()

const authRouter = require('./auth.router')
const userRouter = require('./user.router')
const streamRouter = require('./stream.router')

router
  .use('/auth', authRouter)
  .use('/users', userRouter)
  .use('/streams', streamRouter)

module.exports = router;