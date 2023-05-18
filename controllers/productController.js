const productRouter = require('express').Router()
const Product = require('../models/productModel')

productRouter.get('/', (request, response) => {
  Product.find({}).then(products => {
    response.json(products)
  })
})

module.exports = productRouter;