const mongoose = require('mongoose');

const User = require('../models/user');

module.exports = app => {
    app.post('/api/createCharacter', (req, res) => {

        let stats = {};
        if (req.body.classGame === "warrior") {
            stats = {
                hp: 30,
                mp: 10,
                strength: 8,
                defence: 7,
                magic: 3,
                magicResist: 3,
                agility: 5,
                luck: 5
            }
        }
        console.log('statsy', stats)
        User.findOneAndUpdate({ "googleId": req.body.id }, { $set: { "character.name": req.body.name, "character.title": req.body.title, "character.portrait": req.body.portrait, "character.classGame": req.body.classGame, "character.statistics": stats } }).then((result, err) => {
            console.log(result);
            if (!err) {
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