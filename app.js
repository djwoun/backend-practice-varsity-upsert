var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

require("dotenv").config();

mongoose
  .connect(process.env.MONGODBURI, {
    useNewUrlParser: true,
  })
  .then((_) => console.log("Successfully Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB", err));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
