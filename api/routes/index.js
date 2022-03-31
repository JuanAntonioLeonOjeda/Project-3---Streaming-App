const router = require('express').Router()

router.get('/', (req, res) => {
  res.send("estamos dentro")
})

const {signup} = require ('../controllers/auth.controller')

router.post('/auth/signup', signup)

module.exports = router;