const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const knex = require('./database.js');


const buildPath = path.join(__dirname, "../../dist");
const port = process.env.PORT || 3000;
const cors = require("cors");

//'meals' router
const mealsRouter = require("./api/meals");
router.use("/meals", mealsRouter);

//'reservations' router
const reservationsRouter = require("./api/reservations");
router.use('/reservations', reservationsRouter);


//'reservations' router
const reviewsRouter = require("./api/reviews");
router.use('/reviews', reviewsRouter);


// For week4 no need to look into this!
// Serve the built client html
app.use(express.static(buildPath));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cors());

// to use routes
app.use(router);



//'/future-meals' route 
app.get('/future-meals', async (req, res) => {  
  const query = knex.select('id', 'title', 'description', 'price', 'when')
    .from('meals')
    .where('when', '>=', new Date());

  try {
    const results = await query;
    res.json(results);
  } catch (err) {
    throw (err)
  }
});


// '/past-meals' route
app.get('/past-meals', async (req, res) => {  
  const query = knex.select('id', 'title', 'description', 'price', 'when')
    .from('meals')
    .where('when', '<', new Date());

  try {
    const results = await query;
    res.json(results);
  } catch (err) {
    throw (err)
  }
});


//'/all-meals' route
app.get('/all-meals', async (req, res) => {  
  const query = knex.select('id', 'title', 'description', 'price', 'when')
    .from('meals')
    .orderBy('id');
  
  try {
    const results = await query;
    res.json(results);
  } catch (err) {
    throw (err)
  }
});


//'/first-meal'
app.get('/first-meal', async (req, res) => {
  const query = knex.select('*').from('meals').orderBy('id', 'asc').limit(1);
  const results = await query;
  try {
    if (results.length === 0) {
    res.status(404).send(err, 'No meal available')
  } else {
    res.json(results);    
  }}
  catch (err) {   
    res.status(500).send(err)
  }  
});


//'/last-meal'
app.get('/last-meal', async (req, res) => {
  const query = knex.select('*').from('meals').orderBy('id', 'desc').limit(1);
  const results = await query;
  try {
    if (results.length === 0) {
    res.status(404).send(err, 'No meal available')
  } else {
    res.json(results);    
  }}
  catch (err) {   
    res.status(500).send(err)
  }  
});



app.listen(port, () => console.log('I am listening at port ' + port));

if (process.env.API_PATH) {
  app.use(process.env.API_PATH, router);
} else {
  throw "API_PATH is not set. Remember to set it in your .env file"
}

// for the frontend. Will first be covered in the react class
app.use("*", (req, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`));
});

module.exports = app;
