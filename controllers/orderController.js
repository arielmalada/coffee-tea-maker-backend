const orderRouter = require('express').Router()
const Order = require('../models/orderModel')

orderRouter.post('/', (request, response, next) => {
  const body = request.body

  const order = new Order({
    name: body.name,
    type: body.type,
    packageWeight: body.packageWeight,
    price: body.price,
    roastingLevel: body.roastingLevel
  })

  order.save()
    .then(savedOrder => {
      response.json(savedOrder)
    })
    .catch(error => next(error))
})


module.exports = orderRouter;