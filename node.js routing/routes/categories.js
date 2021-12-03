import { Router } from "../core/Router.js"

export const categoriesRouter = new Router()

categoriesRouter.get('', (req, res) => {
    res.end('I am categories GET router')
})