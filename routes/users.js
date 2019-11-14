const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/User')
const FaveMeal = require('../models/FaveMeal')
const router = express.Router()

/* 1. GET all users from the database */
router.get('/', function(req, res, next) {
  User.find().then(users => {
    res.status(200)
    res.send(users)
  })
  .catch(err => {
    res.status(400)
    console.log(err)
  })
})

/* 2. POST a new user to the database. No need to specify faveMeals; let it use the default */
router.post('/', function(req, res, next) {
  const newUser = new User(req.body)
  newUser
    .save().then(user => {
      res.status(201).json({user})
    })
    .catch(err => {
      console.log(err)
      res.status(400).json({err})
    })

})

/* 3. PATCH an existing user by adding a new favorite meal to their list of favorites */
router.patch('/', function(req, res, next) {
  const filter = { name: req.query.username }
  const faveMeal = new FaveMeal({
    name: req.query.itemName,
    price: req.query.itemPrice,
    calories: req.query.itemCalories
  })
  const change = { $addToSet: { faveMeals: faveMeal} }
  console.log(faveMeal)
  User.findOneAndUpdate(filter, change, { upsert: true }).then(oldUser => {
    res.status(200).json({oldUser})
  })
  .catch(err => {
    console.log(err)
    res.status(400).json({err})
  })
})

/* 4. GET a list of new users that haven't favorited anything yet */
router.get('/new', function(req, res, next) {
  User.find({ faveMeals: [] })
  .then(users => {
    res.status(200).json(users);
  })
  .catch(err => {
    console.log(err)
    res.status(400).json({err})
  })
})

module.exports = router
