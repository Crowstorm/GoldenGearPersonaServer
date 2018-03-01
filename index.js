const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys')

require('./models/user'); //load model before using it in passport.js
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000, // cookie lasts for 30 days
        keys: [keys.cookieKey]
    })
);
//chuj wie co to xD
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);



const PORT = process.env.PORT || 8000;
app.listen(PORT);