const express = require('express')
const userRouter = require('./routes/userRoutes.js')
const postRouter = require('./routes/postRoutes.js')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)

app.listen(PORT, () => {console.log(`Serever has been started on port ${PORT}`)})