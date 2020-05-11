const express = require('express');
const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const session = require('express-session');

const router = express.Router();

const userInfo = {};

router.use(session({
  secret: 'randomSecret',
  resave: true,
  saveUninitialized: true,
}));

router.use(passport.initialize());
router.use(passport.session());

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

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user, done) => done(null, user));

router.get('/twitter/login',
  passport.authenticate('twitter'));

router.get('/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/' }),
  (req, res) => res.redirect('/authSuccess'));

module.exports = router;