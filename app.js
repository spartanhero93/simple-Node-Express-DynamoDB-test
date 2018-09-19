const express = require('express')
require('./models/Movies')
require('./data/MoviesLoadData')

const app = express()
const indexRouter = require('./routes')

app.use(express.json())
app.use('/api', indexRouter)

const PORT = process.env.PORT || 9000
app.listen(PORT, () => console.log(`server running on port ${PORT}`))
