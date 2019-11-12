## Starting the project

First, install all dependencies using `npm install`.

To start the server with live reloading (recommended), use `npm run dev`
To start the server without this (good for production), use `npm start`

## Instructions

1. GET the list of users (without filtering)

    Just do a simple `find()` and return the results using `res.send(data)`

2. POST a new user to the database

    Accept the "name" of the user as a query param. No need to specify the `faveMeals` field when creating a new `User`; just let it use the default

3. PATCH an existing user by adding a new favorite meal to their list of favorites

    **Note:** This should "upsert" the user if they don't have an account yet

    Accept the following keys as query params: `username`, `itemName`, `itemPrice`, `itemCalories`

    Use `findOneAndUpdate` for this. You should filter by the user's name and push a new `FaveMeal` onto the `faveMeals` array, specifying the name, price, and calories.

    But wait... how do you push onto an existing array using Mongoose? Thankfully, there's a Mongo function for this! Learn more about the syntax here: [https://docs.mongodb.com/manual/reference/operator/update/push/](https://docs.mongodb.com/manual/reference/operator/update/push/) 

4. BONUS: GET the list of new users that don't yet have any favorite meals

    This should be in the same format as step 1, but with a filter added.

    Hint: Research how to determine the size of an array using MongoDB