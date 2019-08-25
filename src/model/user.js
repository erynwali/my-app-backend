const mongoose = require('mongoose');
const validate = require('validator'); 

const User = mongoose.model('User', {
    email:{
        type: String, 
        require: true
    }, 
    name:{
        type: String, 
        require: true,
    },
    password:{
        type: String, 
        require: true
    }

})

module.exports = User; 