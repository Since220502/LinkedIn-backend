const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        // require: true,
    },
    password: {
        type: String,
        // require: true,
        
    },
    username: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,

    },
    job: {
        type: String,
        require: true,

    },
    age: {
        type: Number
    }


});

const user = mongoose.model('user' , userSchema)

module.exports = user