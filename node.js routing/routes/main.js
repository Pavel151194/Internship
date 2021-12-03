import { Router } from "../core/Router.js"
import { usersRouter } from "./users.js"
import { goodsRouter } from "./goods.js"

export const router = new Router()

router.use('users', usersRouter)
router.use('goods', goodsRouter)