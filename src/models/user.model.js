const mongoose = require('mongoose')

const opts = {
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: { currentTime: () => Math.floor(Date.now()) }
};

const user = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    codeVerify:{
        type: String,
        default: ''
    },
    emailVerify:{
        type: Boolean,
        default: false
    },
    coursesAcess:{
        type: Array,
        default: []
    }

}, opts)

module.exports = mongoose.model('user',user)