const router = require('express').Router()

const authRouter = require('./auth.router')
const userRouter = require('./user.router')
const genreRouter = require('./genre.router')

router
  .use('/auth', authRouter)
  .use('/users', userRouter)
  .use('/genres', genreRouter)

module.exports = router;