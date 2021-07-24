const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const FaveMeal = require("../models/FaveMeal");
const router = express.Router();

/* 1. GET all users from the database */
router.get("/all-users", function (req, res, next) {
  User.find()
    .then((user) => {
      res.status(200);
      res.send(user);
    })
    .catch((err) => {
      res.status(400);
      console.log(err);
    });
  /* your code here */
});

/* 2. POST a new user to the database. No need to specify faveMeals; let it use the default */
router.post("/add", function (req, res, next) {
  const user = new User({
    name: req.query.name,
  });

  user
    .save()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

/* 3. PATCH an existing user by adding a new favorite meal to their list of favorites */

router.get("/fav", function (req, res, next) {
  const filter = { name: req.query.name };

  const faveMeal = new FaveMeal({
    name: req.query.iName,
    price: req.query.iPrice,
    calories: req.query.iCalories,
  });
  const change = { $push: { faveMeals: faveMeal } };

  console.log(faveMeal);
  User.findOneAndUpdate(filter, change, { upsert: true })
    .then((oldUser) => {
      res.status(200).json({ oldUser });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ err });
    });
});

/* 4. GET a list of new users that haven't favorited anything yet */
router.get("/new", function (req, res, next) {
  User.find({ faveMeals: [] })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ err });
    });
  /* your code here */
});

module.exports = router;
