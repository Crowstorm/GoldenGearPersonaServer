const mongoose = require('mongoose');

const User = require('../models/user');

module.exports = app =>{
    app.post('/api/createCharacter', (req, res) =>{
        // if(!req.user){
        //     return res.status(401).send({error: 'You must log in'})
        // };
        //const {id, name, title, classGame, portrait} = req.body;

        console.log('body',req.body);
        //res.send(req.body)
        
        // User.find({"googleId": req.body.id}).then(result =>{
        //     console.log(result);
        //     res.send(result);
        // })
    })
}