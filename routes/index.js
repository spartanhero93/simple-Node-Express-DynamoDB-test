const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send({ data: 'Hello Waifus' })
})

module.exports = router
