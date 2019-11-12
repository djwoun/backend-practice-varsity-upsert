const mongoose = require('mongoose')
const FaveMeal = require('./FaveMeal')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  faveMeals: {
    type: [FaveMeal.schema],
    default: [],
  },
})

const User = mongoose.model('User', userSchema)
module.exports = User
