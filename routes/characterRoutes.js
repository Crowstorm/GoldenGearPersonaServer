const mongoose = require('mongoose');

const User = require('../models/user');

module.exports = app => {
    app.post('/api/createCharacter', (req, res) => {

        let stats = {};
        switch (req.body.classGame) {
            case "warrior":
                stats = {
                    hp: 30,
                    mp: 10,
                    strength: 8,
                    defence: 7,
                    magic: 3,
                    magicResist: 3,
                    agility: 5,
                    luck: 5
                };
                break;
            case "thief":
                stats = {
                    hp: 25,
                    mp: 15,
                    strength: 5,
                    defence: 4,
                    magic: 4,
                    magicResist: 5,
                    agility: 8,
                    luck: 7
                };
                break;
            case "mage":
                stats = {
                    hp: 20,
                    mp: 20,
                    strength: 3,
                    defence: 4,
                    magic: 8,
                    magicResist: 7,
                    agility: 4,
                    luck: 4
                };
                break;
            default:
                stats = {
                    hp: 0,
                    mp: 0,
                    strength: 0,
                    defence: 0,
                    magic: 0,
                    magicResist: 0,
                    agility: 0,
                    luck: 0
                };
                break;
        }
        // if (req.body.classGame === "warrior") {
        //     stats = {
        //         hp: 30,
        //         mp: 10,
        //         strength: 8,
        //         defence: 7,
        //         magic: 3,
        //         magicResist: 3,
        //         agility: 5,
        //         luck: 5
        //     }
        // }
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