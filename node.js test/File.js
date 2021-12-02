import fs from 'fs'
import path from 'path'

export class File {
    ['add'](req, res) {
        // fs.mkdir(path.resolve(path.resolve(), 'folder'), (err) => {
        //     if (err) return res.status(400).json(err)
        //     res.status(200).json(`folder has been added`)
        // })
    }

    ['remove'](req, res) {
        // fs.rmdir(path.resolve(path.resolve(), 'folder'), (err) => {
        //     if (err) return res.status(400).json(err)
        //     res.status(200).json(`folder has been removed`)
        // })
    }
}