import { Router } from "express"
import { body } from "express-validator"
import { userController } from "../controllers/user_controller.js"

const router = new Router()

router.post(
    '/registration',
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 30 }),
    userController.registration
)
router.post('/login', userController.login)
router.post('/logout', userController.logout)

router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)
router.get('/users', userController.getUsers)

export default router