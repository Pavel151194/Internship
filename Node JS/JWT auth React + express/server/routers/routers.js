import { Router } from "express"
import { body } from "express-validator"
import { userController } from "../controllers/user_controller.js"
import { authMiddleware } from "../middlewares/auth_middleware.js"

const router = Router()

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
router.get('/users', authMiddleware, userController.getUsers)

export default router