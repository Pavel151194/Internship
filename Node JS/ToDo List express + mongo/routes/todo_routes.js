import { Router } from "express"
import todoModel from "../models/todo_model.js"

const router = Router()

router.get('/', async (req, res) => {
    const todos = await todoModel.find({})

    res.render('index', {
        title: 'Todos',
        isIndex: true,
        todos
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create todo',
        isCreate: true
    })
})

router.post('/create', async (req, res) => {
    const todo = todoModel({
        title: req.body.title,
    })
    await todo.save()
    res.redirect('/')
})


export default router