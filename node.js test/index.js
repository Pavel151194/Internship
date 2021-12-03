import express from 'express'

import { Folder } from './Folder.js'
import { File } from './File.js'

const folder = new Folder
const file = new File

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
    console.log(req.query)
    
    res.status(200).json(`Server has been started on port ${PORT}...`)
})

app.post('/folder', (req, res) => { // POST http://localhost:3000/folder?FolderNmae=add
    const folderName = Object.keys(req.query)[0]
    const method = Object.values(req.query)[0]

    folder[method](res, folderName)
})

app.post('/file', (req, res) => { // POST http://localhost:3000/file?FileName=write
    console.log(req.query)

    const fileName = Object.keys(req.query)[0]
    const method = Object.values(req.query)[0]

    file[method](res, fileName)
})

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))