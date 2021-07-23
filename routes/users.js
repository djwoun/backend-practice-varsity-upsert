const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const FaveMeal = require("../models/FaveMeal");
const router = express.Router();

/* 1. GET all users from the database */
router.get("/", function (req, res, next) {
  User.find()
    .then((user) => {
      // res.status(200);
      res.send(user);
    })
    .catch((err) => {
      //res.status(400);
      console.log(err);
    });
  /* your code here */
});

/* 2. POST a new user to the database. No need to specify faveMeals; let it use the default */
router.post("/", function (req, res, next) {
  const newUser = new User({
    name: "Jun",
  });
  blog
    .save()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
    });

  /* your code here */
});

/* 3. PATCH an existing user by adding a new favorite meal to their list of favorites */
router.patch("/", function (req, res, next) {


  
  /* your code here */
});

/* 4. GET a list of new users that haven't favorited anything yet */
router.get("/new", function (req, res, next) {
  /* your code here */
});

module.exports = router;
