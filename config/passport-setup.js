const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user')

passport.use(new GoogleStrategy({
    callbackURL: 'http://localhost:3000/auth/google/return',
    clientID: '636141471176-hg7al47hpaboa3ktlko4gc401ql10mv6.apps.googleusercontent.com',
    clientSecret: 'KyQFeoFb8uK8jxZmkkr72pqP'
    }, 
    (accessToken, refreshToken, profile, done) => {
        
        console.log(profile);
    } 
));