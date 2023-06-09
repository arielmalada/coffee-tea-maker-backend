const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ['coffee', 'tea'],
    required: true
  },
  pricePerGram: {
    type: Number,
    required: true
  },
});

productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Product', productSchema)