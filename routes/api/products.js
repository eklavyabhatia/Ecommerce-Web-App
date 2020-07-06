const Products = require('../../db').Products
const route = require('express').Router()

route.get('/', (req, res) => {
    Products.findAll()
        .then((products) => {
            res.status(200).send(products)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Error in retreiving products"
            })
        })
})

route.post('/', (req, res) => {
    Products.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price)
    })
        .then((product) => {
            res.status(201).send(product)
        })
        .catch((err) => {
            error: "Error in creating product"
        })
})

exports = module.exports = route