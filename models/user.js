const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String,
    name: String,
    character:{
        name: String,
        title: String,
        classGame: String,
        portrait: String,
        statistics:{
            hp: Number,
            mp: Number,
            strength: Number,
            defence: Number,
            magic: Number,
            magicResist: Number,
            agility: Number,
            luck: Number,
            speed: Number
        }
    }
});

// Siła - modyfikuje atak,
// Obrona - zmniejsza obrazenia,
// magia - zwieksza sile magii,
// magis res - zmniejsza obrazenia od magii,
// zwinnosc - wiekszy dodge
// zrecznosd - crit chance


const User = mongoose.model('users', userSchema);

module.exports = User;