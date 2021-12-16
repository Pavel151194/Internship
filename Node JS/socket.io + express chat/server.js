import express from "express"
import { createServer } from "http"
import { Server } from "socket.io"
import * as path from "path"

const app = express()
const server = createServer(app)
const io = new Server(server)

const PORT = 5000

app.get('/', (req, res) => {
    res.sendFile(path.resolve() + '/index.html')
})

app.use(express.static(path.resolve()))

io.on('connection', socket => {
    socket.on('message', data => {
        io.emit('message', { message: data.message, name: data.name })
    })
})

server.listen(PORT, () => {
    console.log('Server has been started...')
})