const router = require('express').Router()

router.get('/', (req, res) => {
  res.send("estamos dentro")
})

module.exports = router;