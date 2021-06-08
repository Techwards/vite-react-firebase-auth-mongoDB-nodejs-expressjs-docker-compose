const firebaseAdmin = require('../firebase')
const Users = require('../models/users')


const UserControllers = (
    function() {

        const currentUser = async (req, res) => {
            try {
                const firebaseUser = await firebaseAdmin.auth().verifyIdToken(req.headers.token)
                const user = await Users.findOne({email:firebaseUser.email })
                
                if(user) {
                    res.json(user)
                } else {
                    const newUser = new Users({
                        name: firebaseUser.name || '',
                        fullName: firebaseUser.fullName || '',
                        email: firebaseUser.email || '',
                        firstName: firebaseUser.firstName || '',
                        lastName: firebaseUser.lastName || '',
                        picture: firebaseUser.picture || '',

                    })
                    newUser.save()
                    res.json(newUser)
                }
            } catch (error) {
                console.log('error: ', error);
                res.status(401).json({
                    error
                })
            }
        }

        return {
            currentUser
        }
    }
)()

module.exports = UserControllers