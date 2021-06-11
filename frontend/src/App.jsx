import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

//components
import SignIn from './components/signin'
import SignUp from './components/signup'
import Home from './components/Home'
import UpdateProfile from './components/UpdateProfile'
import ForgotPassword from './components/ForgotPassword'
import SendVerifyLink from './components/SendVerifyLink'
// context
import { AuthProvider } from './context/AuthContext'

// Route
import PrivateRoute from './route/PrivateRoute'


function App() {

    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <Route path="/signin">
                        <SignIn />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/forgot-password">
                        <ForgotPassword />
                    </Route>

                    <PrivateRoute>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/update-profile">
                            <UpdateProfile />
                        </Route>
                        <Route path="/send-email-link">
                            <SendVerifyLink btnName={'Send Email Link'} status={true} />
                        </Route>
                        <Route path="/verify-email-link">
                            <SendVerifyLink btnName={'Verify Email Link'} status={false} />
                        </Route>
                    </PrivateRoute>
                </Switch>
            </AuthProvider>
        </Router>
    )
}

export default App
