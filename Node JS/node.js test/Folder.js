import fs from 'fs'
import path from 'path'

export class Folder {
    ['add'](res, name) {
        fs.mkdir(path.resolve(path.resolve(), name), (err) => {
            if (err) return res.status(400).json(err)
            res.status(200).json(`${name} has been added`)
        })
    }

    ['remove'](res, name) {
        fs.rmdir(path.resolve(path.resolve(), name), (err) => {
            if (err) return res.status(400).json(err)
            res.status(200).json(`${name} has been removed`)
        })
    }
}