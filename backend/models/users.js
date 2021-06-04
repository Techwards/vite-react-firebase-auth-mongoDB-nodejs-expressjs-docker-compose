const mongoose = require('mongoose')

const { Schema } = mongoose

const userModel = () => {
    
    const userSchema = new Schema({
        firstName: String,
        lastName: String,
        fullName: String,
        picture: String,
        email: String
    })
    mongoose.model('users', userSchema)
}

module.exports = userModel