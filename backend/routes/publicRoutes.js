const mongoose = require('mongoose')

const authRoutes = (app) => {
    const User = mongoose.model('users')

    app.post('/save-user-info', async (req, res) => {
        // const userInfo = await req.oidc.fetchUserInfo()
        
        // const user = await User.findOne({auth0Id: req.oidc.user.sub})
        // if(user) {
        //     console.log('User exist')
        // } else {
        //     console.log('New User')
        //     const oidcUserInfo = {
        //         auth0Id: req.oidc.user.sub,
        //         firstName: req.oidc.user.given_name,
        //         lastName: req.oidc.user.family_name,
        //         fullName: req.oidc.user.name,
        //         picture: req.oidc.user.picture,
        //         email: req.oidc.user.email
        //     }
        //     new User(oidcUserInfo).save()
        // }
        
        res.send(JSON.stringify(req.body))
    })
} 
module.exports = authRoutes