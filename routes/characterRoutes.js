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
        
        User.findOneAndUpdate({"googleId": req.body.id}, { $set: { "character.name": req.body.name, "character.title": req.body.title, "character.portrait": req.body.portrait } }).then((result, err) =>{
            console.log(result);
            if(!err){
                res.status(200).send({
                    success: true,
                    'data': result
                });
            } else {
                res.send(err);
            }
            
        })
    })
}