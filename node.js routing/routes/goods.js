import { Router } from "../core/Router.js"
import { categoriesRouter } from "./categories.js"

const goods = {
    item1: '123123',
    item2: '321321'
}

export const goodsRouter = new Router()

goodsRouter.use('categories', categoriesRouter)

goodsRouter.get('', (req, res) => {
    let json = JSON.stringify(goods)
    res.end(json)
})