const express = require("express");
const mealsRouter = express.Router();
const knex = require("../database.js");




// get
mealsRouter.get("/", async (request, response) => {
  
  try {
    const meals = await knex.select("*").from('meals');
    response.json(meals);
  } catch (error) {
    //throw error;
    response.status(500).json({
      error: 'An error occurred'
    });
  }
});




module.exports = mealsRouter;
