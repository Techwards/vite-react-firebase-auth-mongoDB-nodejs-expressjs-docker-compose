const mongoose = require('mongoose')
const UserControllers = require('../controllers/userControllers')

const authRoutes = (app) => {
    const User = mongoose.model('users')

    app.post('/current-user', UserControllers.currentUser)
} 
module.exports = authRoutes