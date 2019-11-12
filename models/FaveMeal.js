const mongoose = require('mongoose')

const faveMealSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
})

const FaveMeal = mongoose.model('FaveMeal', faveMealSchema)

module.exports = FaveMeal
