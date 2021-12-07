const Router = require('express')
const router = new Router()
const postController = require('../controllers/postController.js')

router.post('/post', postController.createPost)
router.get('/post', postController.getPostByUsers)

module.exports = router