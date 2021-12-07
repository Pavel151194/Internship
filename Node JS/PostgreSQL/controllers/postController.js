const db = require('../db.js')

class PostController {
    async createPost(req, res) {
        const { title, content, userId } = req.body
        const newPost = await db.query('INSERT INTO (title, content, user_id) values ($1, $2, $3) RETURNING *', [title, content, userId])
        res.json(newPost.rows[0])
    }

    async getPostByUsers(req, res) {
        const id = req.query.id
        const posts = await db.query('SELECT from post where user_id = $1', [id])
        res.json(posts.rows)
    }
}

module.exports = new PostController()