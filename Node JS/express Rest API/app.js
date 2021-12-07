const express = require('express')
const path = require('path')
const { v4 } = require('uuid')
const app = express()

let CONTACTS = [
    {id: v4(), name: 'name', value: 'value', marked: false}
]

app.use(express.json())

app.get('/api/contacts', (req, res) => {
    res.status(200).json(CONTACTS)
    console.log(res)
})

app.post('/api/contacts', (req, res) => {
    const contact = {...req.body, id: v4(), marked: false}
    CONTACTS.push(contact)
    res.status(201).json(contact)
})

app.delete('/api/contacts/:id', (req, res) => {
    CONTACTS = CONTACTS.filter(el => el.id !== req.params.id)
    res.status(200).json({message: 'Котнакт был удален'})
})

app.put('/api/contacts/:id', (req, res) => {
    const index = CONTACTS.findIndex(el => el.id === req.params.id)
    CONTACTS[index] = req.body
    res.json(CONTACTS[index])
})



app.use(express.static(path.resolve(__dirname, 'client')))

app.listen(3000, () => {
    console.log('Server has been started...')
})