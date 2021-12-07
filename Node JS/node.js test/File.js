import fs from 'fs'
import path from 'path'

export class File {
    ['write'](res, name) {
        fs.writeFile(path.resolve(path.resolve(), name), 'string', (err) => {
            if (err) return res.status(400).json(err)
            res.status(200).json(`${name} has been wrote`)
        })
    }

    ['append'](res, name) {
        fs.writeFile(path.resolve(path.resolve(), name), 'string', (err) => {
            if (err) return res.status(400).json(err)
            res.status(200).json(`${name} has been appended`)
        })
    }

    ['remove'](res, name) {
        fs.unlink(path.resolve(path.resolve(), name), (err) => {
            if (err) return res.status(400).json(err)
            res.status(200).json(`${name} has been removed`)
        })
    }
}