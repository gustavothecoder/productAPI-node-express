const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dateBase = require('./dataBase')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/products', (req, res, next) => {
    res.send(dateBase.getProducts())
})

app.get('/products/:id', (req, res, next) => {
    res.send(dateBase.getProduct(req.params.id))
})

app.post('/products', (req, res, next) => {
    const product = dateBase.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) //JSON
})

app.put('/products/:id', (req, res, next) => {
    const product = dateBase.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) //JSON
})

app.delete('/products/:id', (req, res, next) => {
    const product = dateBase.deleteProduct(req.params.id)
    res.send(product) //JSON
})

app.listen(port, () => {
    console.log(`Server running on the port ${port}.`)
})