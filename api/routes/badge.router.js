const router = require('express').Router()
const {
  authUser,
  authAdmin
} = require ('../utils')

const { createOneBadge, getAllBadges, getOneBadge } = require ('../controllers/badge.controller')

router
  .post('/', authUser, authAdmin, createOneBadge)
  .get('/', authUser, getAllBadges)
  .get('/:id', getOneBadge)

module.exports = router