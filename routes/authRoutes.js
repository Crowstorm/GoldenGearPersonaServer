const passport = require('passport');

module.exports = (app) =>{
    app.get('/auth/google', passport.authenticate('google', { //inside of GoogleStrategy
        scope: ['profile', 'email'] //scopes also predefined by google
    }))
    
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (req, res) =>{
            res.redirect('/surveys');
        }
    );

    app.get('/api/logout', (req, res) =>{
        req.logout(); //passport method
        res.redirect('/');
    })

    app.get('/api/current_user', (req, res) =>{
        res.send(req.user);
    })
}

 