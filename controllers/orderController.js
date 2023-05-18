const orderRouter = require('express').Router()
const Order = require('../models/orderModel')


orderRouter.get('/', (request, response) => {
  Order.find({}).then(orders => {
    response.json(orders)
  })
})

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

orderRouter.post('/search', (request, response) => {
  const query = new RegExp(request.body.query, 'i')
  Order.find({name : query}).then(orders => {
    response.json(orders)
  })
})


module.exports = orderRouter;