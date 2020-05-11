const express = require('express');
const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const session = require('express-session');
const db = require('../models/databaseConnection');

const router = express.Router();

// This router handles everything related to the twitter OAuth. It utilizes the passport package and the
// passport-twitter package to implement the OAuth and utilize the twitter id and twitter username

// obj that holds the authenticated user's info
const userInfo = {};

// create a session for each authorized user
router.use(session({
  secret: 'randomSecret',
  resave: true,
  saveUninitialized: true,
}));

// you need to do this in order to use passport and create a session
router.use(passport.initialize());
router.use(passport.session());

// refer to the twitter strategy docs: https://github.com/jaredhanson/passport-twitter on the syntax for this!
passport.use(new TwitterStrategy({
  consumerKey: 'RlwDUFR3CB2NPajqPn0NtlaA7',
  consumerSecret: 'PtVncn9tIuXLhp2tXhB38vXCKaNpcoA1E6OJ6ITYOyfkAqr24z',
  callbackURL: 'http://localhost:3000/auth/twitter/callback',
  proxy: true,
}, (token, tokenSecret, profile, done) => {
  userInfo.twitterId = profile.id;
  userInfo.username = profile.username;
  return done(null, profile);
}));

// serialize the user
passport.serializeUser((user, done) => done(null, user));

// deserialize the user
passport.deserializeUser((user, done) => done(null, user));

// login to twitter button on the frontend directs you to this route and initiates twitter OAuth
router.get('/twitter/login',
  passport.authenticate('twitter'));

router.get('/twitter/callback',
  //connect to twitter for oauth
  passport.authenticate('twitter', { failureRedirect: '/' }),
  (req, res) => {
    //set a cookie here
    // res.cookie('isVerified', true, { expires: new Date(Date.now() + 900000), httpOnly: true });

    //query the database for the username
    const queryIfExist = 'SELECT * FROM users WHERE users.username = $1';
    const values = [userInfo.username];
    
    db.query(queryIfExist, values)
      .then(data => {
        //if database does not have username then create a new entry in the database for this user
        if (data.rows.length === 0) {
          const createNewUser = 'INSERT INTO users (username, fullname, profilepicture) VALUES ($1, $2, $3)';
          const newUserValues = [userInfo.username, 'empty', 'empty'];
          db.query(createNewUser, newUserValues);
        }
      })
      .catch(err => {
        console.log('An error has occurred: ', err);
      })
    return res.redirect('/home');
  },
);
// res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true })
module.exports = router;