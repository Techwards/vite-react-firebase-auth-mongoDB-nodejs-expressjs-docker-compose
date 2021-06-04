const firebaseAdmin = require('../firebase')

const UserControllers = (
    function() {

        const currentUser = async (req, res) => {
            console.log('req.headers: ', req.headers.token);
            try {
                const firebaseUser = await firebaseAdmin.auth().verifyIdToken(req.headers.token)
                
                console.log('req: ', firebaseUser);
                res.json(firebaseUser)


            } catch (error) {
                res.status(401).json({
                    error
                })
            }
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
            
        }

        return {
            currentUser
        }
    }
)()

module.exports = UserControllers