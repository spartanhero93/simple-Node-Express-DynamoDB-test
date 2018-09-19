const express = require('express')
const app = express()

/
// <=========> //

const PORT = process.env.PORT || 9000
const api = require('./routes')

app.use('/api', api)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
