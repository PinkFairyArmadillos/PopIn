const db = require('../models/databaseConnection');

const eventsController = {};

// middleware that will retrieve all entries from the database events tables
eventsController.getEvents = (req, res, next) => {
  const queryString = 'SELECT * FROM events';

  db.query(queryString)
    .then(data => {
      console.log(data.rows);
      res.locals.events = data.rows;
      return next();
    })
    .catch(err => console.log('Error occured in eventsController.getEvents middleware: ', err));
}

// middle where that will post a new event into the events table
// NOTE for iterators: This middleware has been tested in Postman and it works! It has not been tested with
// or implemented in the actual frontend form yet!
eventsController.postEvents = (req, res, next) => {
  const queryString = `INSERT INTO events (title, time, description, geolocation, address)
   VALUES ($1, $2, $3, $4, $5)`;

  const userInputs = [
    req.body.title,
    req.body.time,
    req.body.description,
    JSON.stringify(req.body.geolocation),
    req.body.address,
  ];

  db.query(queryString, userInputs)
    .then(data => {
      console.log(data);
      return next();
    })
    .catch(err => {
      console.log('error occured in eventsController.postEvents: ', err);
    });
}

module.exports = eventsController;