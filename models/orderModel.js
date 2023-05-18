const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['coffee', 'tea'],
    required: true
  },
  packageWeight: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  roastingLevel: {
    type: Number,
    required: function() {
      return this.type === 'coffee';
    },
    min: 1,
    max: 5
  }
});

orderSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Order', orderSchema)