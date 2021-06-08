const mongoose = require('mongoose')

const { Schema } = mongoose

// const UserModel = () => {
    
    const userSchema = new Schema({
        firstName: {
            type: String,
            trim: true
        },
        lastName: {
            type: String,
            trim: true
        },
        fullName: {
            type: String,
            trim: true
        },
        name: {
            type: String,
            trim: true,
            require: true
        },
        picture: String,
        email: {
            type: String,
            trim: true,
            unique: true,
            require: true
        },
    }, { timestamps:true })
    // mongoose.model('Users', userSchema)
// }

module.exports = mongoose.model('Users', userSchema)