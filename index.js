const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const keys = require('./config/keys')

require('./models/user'); //load model before using it in passport.js
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000, // cookie lasts for 30 days
        keys: [keys.cookieKey]
    })
    
);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

//chuj wie co to xD
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);
require('./routes/characterRoutes')(app);



const PORT = process.env.PORT || 8000;
app.listen(PORT);