import { Router } from "../core/Router.js"

export const usersRouter = new Router()

usersRouter.get('', (req, res) => {
    res.end('I am users GET router')
})