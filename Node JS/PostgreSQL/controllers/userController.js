const db = require('../db.js')

class UserController {
    async createUser(req, res) {
        const { firstName, secondName } = req.body
        const newPerson = await db.query('INSERT INTO person (firstname, secondname) values ($1, $2) RETURNING *', [firstName, secondName])
        res.json(newPerson.rows[0])
    }

    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM person')
        res.json(users.rows)
    }

    async getOneUser(req, res) {
        const id = req.params.id
        const user = await db.query('SELECT * FROM person where id = $1', [id])
        res.json(user.rows[0])
    }

    async updateUser(req, res) {
        const { id, firstName, secondName } = req.body
        const user = await db.query(
            'UPDATE person set (firstname, secondname) = ($2, $3) where id = $1 RETURNING *', 
            [id, firstName, secondName]
        )
        res.json(user.rows[0])
    }

    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query('DELETE FROM person where id = $1', [id])
        res.json(`person where id ${id} has been deleted`)
    }
}

module.exports = new UserController()