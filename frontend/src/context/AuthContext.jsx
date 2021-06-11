import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import firebase from 'firebase/app'
import { userServices } from '../services/user'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function googleLogin () {
        const provider = new firebase.auth.GoogleAuthProvider();
        return auth.signInWithPopup(provider)
    }

    // function sendPasswordLessSigninLink (email) {
    //     const actionCodeSettings = {
    //         // URL you want to redirect back to. The domain (www.example.com) for this
    //         // URL must be in the authorized domains list in the Firebase Console.
    //         url: 'https://www.example.com/finishSignUp?cartId=1234',
    //         // This must be true.
    //         handleCodeInApp: true,
    //         dynamicLinkDomain: 'example.page.link'
    //     };

    //     // The link was successfully sent. Inform the user.
    //     // Save the email locally so you don't need to ask the user for it again
    //     // if they open the link on the same device.
    //     return auth.sendSignInLinkToEmail(email, actionCodeSettings)
    // }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        // Confirm the link is a sign-in with email link.
        // if (auth.isSignInWithEmailLink(window.location.href)) {
        //     // Additional state parameters can also be passed via URL.
        //     // This can be used to continue the user's intended action before triggering
        //     // the sign-in operation.
        //     // Get the email if available. This should be available if the user completes
        //     // the flow on the same device where they started it.
        //     var email = window.localStorage.getItem('emailForSignIn');
        //     if (!email) {
        //     // User opened the link on a different device. To prevent session fixation
        //     // attacks, ask the user to provide the associated email again. For example:
        //     email = window.prompt('Please provide your email for confirmation');
        //     }
        //     // The client SDK will parse the code from the link for you.
        //     auth.signInWithEmailLink(email, window.location.href)
        //     .then((result) => {
        //         // Clear email from storage.
        //         window.localStorage.removeItem('emailForSignIn');
        //         // You can access the new user via result.user
        //         // Additional user info profile not available via:
        //         // result.additionalUserInfo.profile == null
        //         // You can check if the user is new or existing:
        //         // result.additionalUserInfo.isNewUser
        //     })
        //     .catch((error) => {
        //         // Some error occurred, you can inspect the code: error.code
        //         // Common errors could be invalid email and invalid or expired OTPs.
        //     });
        // }

        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            setCurrentUser(user)
            setLoading(false)
            if(user) {
                
                const payload = {}
                userServices
                    .currentUser(payload)
                    .then(res => {
                        console.log('res: ', res);
                    })
                    .catch(err=> {
                        console.log('err: ', err);
                    })
                    .finally(()=>{
                        //clean up
                    })
            }
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        googleLogin,
        // sendPasswordLessSigninLink,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider value={value}>
        {!loading && children}
        </AuthContext.Provider>
    )
}