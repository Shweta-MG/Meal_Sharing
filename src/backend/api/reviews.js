const express = require("express");
const reviewsRouter = express.Router();
const knex = require("../database.js");


// get
reviewsRouter.get("/", async (request, response) => {
  
    try {
      const reviews = await knex.select("*").from('reviews');
      response.json(reviews);
    } catch (error) {
      //throw error;
      response.status(500).json({
        error: 'Internal Server Error - An error occurred while fetching data'
      });
    }
});

// get
reviewsRouter.get("/:id", async (request, response) => {
    const id = +(request.params.id);
    
    try {
      const review = await knex.select("*")
        .from('reviews')
        .where('id', id)
        .first();    
      if (review) {
        response.json(review);      
      } else {
        response.send({ "message": `Review with  ID number ${id} does not exist` });
      }    
    } catch (error) {
      //throw error;
      response.status(500).json({
        error: 'Internal Server Error - An error occurred while fetching data'
      });
    }
});

//Post
reviewsRouter.post("/", async (request, response) => {
    const newReview = request.body;
    try {
      await knex('reviews').insert(newReview);
      response.json(newReview);
    } catch (error) {
      //throw error;
      //It can be '400'  when log in specific rights will be considered. 
      response.status(500).json({
        error: 'Internal Server Error - An error occurred while creating data'
      });
      
    }
})


//Delete
reviewsRouter.delete("/:id", async (request, response) => {
    const id = +(request.params.id);
    
    try {
      const deletedReview = await knex('reviews')
        .where('id', id)
        .del();
      if (deletedReview) {
        response.send({ "message": `Review with  ID number ${id} is deleted.` });
      } else {
        response.send({ "message": `Review with  ID number ${id} does not exist.` });
      }    
    } catch (error) {
      //throw error;
      //It can be '400'  when log in specific rights will be considered. 
      response.status(500).json({
        error: 'An error occurred'
      });
    }
});


//put
reviewsRouter.put("/:id", async (request, response) => {
    const updatedReview = request.body;
    const id = +(request.params.id);
    try {
      await knex('reservations')
        .where('id', id)
        .update(updatedReview);
      response.json(updatedReview);
    } catch (error) {
      //throw error;
      //It can be '400'  when log in specific rights will be considered. 
      response.status(500).json({
        error: 'An error occurred'
      });
    }
}); 


module.exports = reviewsRouter;
