const router = require('express').Router()

const authRouter = require('./auth.router')
const userRouter = require('./user.router')
const badgeRouter = require('./badge.router')

router
  .use('/auth', authRouter)
  .use('/users', userRouter)
  .use('/badges', badgeRouter)

module.exports = router;