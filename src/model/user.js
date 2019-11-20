const mongoose = require('mongoose');
const validate = require('validator'); 
const bcrypt = require('bcryptjs');  

const userSchema = new mongoose.Schema(
    {
        email:{
            type: String, 
            require: true, 
            unique: true
        }, 
        name:{
            type: String, 
            require: true
        },
        password:{
            type: String, 
            require: true
        }
    }
)        

userSchema.statics.findByCredential = async (email, password) => {
    const user = await User.findOne({email})

    if(!user) {
        throw new Error("Invalid Credentials")
    }

    const isMatch = bcrypt.compare(password, user.password)
    if(!isMatch) {
        throw new Error("Unable to Login")
    }
    return user
}

userSchema.pre('save', async function (next) {
    const user = this 
    console.log("just before save"); 

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next ()
})

const User = mongoose.model('User', userSchema)


module.exports = User; 