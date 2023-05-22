const express = require("express");
const mealsRouter = express.Router();
const knex = require("../database.js");




// get
mealsRouter.get("/", async (request, response) => {
  const { maxPrice } = request.query;
  let meals;
  
  try {
    if (maxPrice) {
      if (typeof (maxPrice) == NaN) {
        response.send({ Msg : 'Please enter valid response'})
        
      } else {
        meals = await knex.select("*")
          .from('meals')
          .where('price', '<' , maxPrice);
      }
    } else {
      response.status(400).send({Msg: 'Bad Request'
      })
    }
    
    const mealList = await meals;
    response.json(mealList);
    
  } catch (error) {
    //throw error;
    response.status(500).json({
      error: 'An error occurred'
    });
  }
});



// get
mealsRouter.get("/:id", async (request, response) => {
  const id = +(request.params.id);
  
  try {
    const meal = await knex.select("*")
      .from('meals')
      .where('id', id)
      .first();    
    if (meal) {
      response.json(meal);      
    } else {
      response.send({ "message": `Meal with  ID number ${id} does not exist` });
    }    
  } catch (error) {
    //throw error;
    response.status(500).json({
      error: 'An error occurred'
    });
  }
});


//Post
mealsRouter.post("/", async (request, response) => {
  const newMeal = request.body;
  try {
    await knex('meals').insert(newMeal);
    response.status(201).json(newMeal);
  } catch (error) {
    //throw error;
    //It can be '400'  when log in specific rights will be considered. 
    response.status(500).json({
      error: 'An error occurred'
    });
  }
})

//Delete
mealsRouter.delete("/:id", async (request, response) => {
  const id = +(request.params.id);
  
  try {
    const deletedMeal = await knex('meals')
      .where('id', id)
      .del();
    if (deletedMeal === 1) {
      response.send({ "message": `Meal with  ID number ${id} is deleted.` });
    } else if (deletedMeal === 0){
      response.send({ "message": `Meal with  ID number ${id} does not exist.` });
    }    
  } catch (error) {
    //throw error;
    //It can be '400'  when log in specific rights will be considered. 
    response.status(500).json({
      error: 'An error occurred'
    });
  }
});


//Put
mealsRouter.put("/:id", async (request, response) => {
  const updatedMeal = request.body;
  const id = +(request.params.id);
  try {
    await knex('meals')
      .where('id', id)
      .update(updatedMeal);
    if (!id) {
      response.status(200).json({
        message: `Meal with ID ${id} could not found`
      })
    } else {
        response.status(200).json({
          message: `Meal with ID ${id} updated successfully`
        });

      }
    } catch (error) {
    //throw error;
    //It can be '400' - 'authantication required'  when log in 
    //specific rights will be considered.
    response.status(500).json({
      error: 'An error occurred'
    });
  }
});



module.exports = mealsRouter;
