const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');

const keys = require('../config/keys');

passport.serializeUser((user, done)=>{ //user model
    //generates ID for user (user.id in DB)
    //store user in a cookie
    done(null, user.id); //null may be error in more complicated functions
});


passport.deserializeUser((id, done )=>{
    User.findById(id).then((user)=>{
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({googleId: profile.id}).then((existingUser)=>{
            if(existingUser){
                //user exist
                done(null, existingUser);
            } else {
                //create new user
                new User({googleId: profile.id, name: profile.displayName}).save().then(user =>{
                    done(null, user);
                })

            }
        })
    })
); //authenticate with google