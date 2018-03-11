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
        portrait: Number
    }
});

const User = mongoose.model('users', userSchema);

module.exports = User;