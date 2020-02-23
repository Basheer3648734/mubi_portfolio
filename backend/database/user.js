const mongoose = require('mongoose')
const validator = require('validator');
require('./mongodb.js');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email address is not correct");
            }
        }
    },
    comment: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    }
})
const User = mongoose.model('User', userSchema);

module.exports = User;