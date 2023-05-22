const express = require("express");
const reservationsRouter = express.Router();
const knex = require("../database.js");



// get
reservationsRouter.get("/", async (request, response) => {
  
  try {
    const reservations = await knex.select("*").from('reservations');
    response.json(reservations);
  } catch (error) {
    //throw error;
    response.status(500).json({
      error: 'Internal Server Error - An error occurred while fetching data'
    });
  }
});

// get
reservationsRouter.get("/:id", async (request, response) => {
    const id = +(request.params.id);
    
    try {
      const reservation = await knex.select("*")
        .from('reservations')
        .where('id', id)
        .first();    
      if (reservation) {
        response.json(reservation);      
      } else {
        response.send({ "message": `Reservation with  ID number ${id} does not exist` });
      }    
    } catch (error) {
      //throw error;
      response.status(500).json({
        error: 'Internal Server Error - An error occurred while fetching data'
      });
    }
});
  



//Post
reservationsRouter.post("/", async (request, response) => {
    const newReservation = request.body;
    try {
      await knex('reservations').insert(newReservation);
      response.json(newReservation);
    } catch (error) {
      //throw error;
      //It can be '400'  when log in specific rights will be considered. 
      response.status(500).json({
        error: 'Internal Server Error - An error occurred while creating data'
      });
      
    }
})


//Delete
reservationsRouter.delete("/:id", async (request, response) => {
    const id = +(request.params.id);
    
    try {
      const deletedReservations = await knex('reservations')
        .where('id', id)
        .del();
      if (deletedReservations) {
        response.send({ "message": `Meal with  ID number ${id} is deleted.` });
      } else {
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


//put
reservationsRouter.put("/:id", async (request, response) => {
    const updatedReservations = request.body;
    const id = +(request.params.id);
    try {
      await knex('reservations')
        .where('id', id)
        .update(updatedReservations);
      response.json(updatedReservations);
    } catch (error) {
      //throw error;
      //It can be '400'  when log in specific rights will be considered. 
      response.status(500).json({
        error: 'An error occurred'
      });
    }
});

module.exports = reservationsRouter;