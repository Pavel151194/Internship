import express from "express"
import mongoose from "mongoose"
import handlebars from "express-handlebars"
import toDoRoutes  from "./routes/todo_routes.js"

const PORT = process.env.PORT || 5000

const app = express()
const hbs = handlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(express.urlencoded({ extended: true }))
app.use(toDoRoutes)

const init = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://admin:admin@cluster0.s79dn.mongodb.net/todos?retryWrites=true&w=majority', 
            { useNewUrlParser: true }
        )
        app.listen(PORT, () => {
            console.log('Server has been started...')
        })
    } catch (err) {
        console.log(err)
    }
}

init()