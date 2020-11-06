const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 25,
        minlength: 4,
        required: true
    },
    password: {
        type: String,
        maxlength: 20,
        required: true
    }
})

module.exports = mongoose.model('User', UserSchema)