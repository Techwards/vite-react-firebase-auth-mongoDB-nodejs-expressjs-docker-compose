const UserControllers = require('../controllers/userControllers')

const authRoutes = (app) => {
    app.post('/current-user', UserControllers.currentUser)
} 
module.exports = authRoutes