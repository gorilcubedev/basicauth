const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const session = require('express-session');
const cors = require('cors');
require('dotenv').config({ path: '../config/.env' });

const app = express();

app.use(cors());
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: 'http://localhost:3000/' }), (req, res) => {
  res.redirect('http://localhost:3000/dashboard?user=' + encodeURIComponent(JSON.stringify(req.user)));
});

app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: 'http://localhost:3000/' }), (req, res) => {
  res.redirect('http://localhost:3000/dashboard?user=' + encodeURIComponent(JSON.stringify(req.user)));
});

app.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));

app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('http://localhost:3000/dashboard?user=' + encodeURIComponent(JSON.stringify(req.user)));
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('http://localhost:3000/');
});

app.listen(5000, () => console.log('Server running on port 5000'));