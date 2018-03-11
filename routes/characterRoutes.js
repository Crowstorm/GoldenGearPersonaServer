const mongoose = require('mongoose');

const User = require('../models/user');

module.exports = app =>{
    app.post('/api/createCharacter', (req, res) =>{
        // if(!req.user){
        //     return res.status(401).send({error: 'You must log in'})
        // };
        //const {id, name, title, classGame, portrait} = req.body;

        // const character = new Character({
        //     name,
        //     title,
        //     classGame,
        //     portrait
        // })
        id = "114468872587333207421"
        User.find({"googleId": id}).then(result =>{
            console.log(result);
            res.send(result);
        })
    })
}