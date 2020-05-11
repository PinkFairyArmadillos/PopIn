const db = require('../models/databaseConnection');

const usersController = {};

// verifyUser middleware to check if a user has an open session. This middleware is not functional yet and
// is therefor untested
usersController.verifyUser = (req, res, next) => {
  if (req.cookies.isVerified) {
    console.log(' it says i have a cookie')
    return next();
  } else {
    console.log('Error, no cookies found');
    res.redirect('/');
  }
}


usersController.createCookie = (req, res, next) => {

}

module.exports = usersController;