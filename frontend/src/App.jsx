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

// context
import { AuthProvider } from './context/AuthContext'

function App() {

    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <Route path="/signin">
                        <SignIn/>
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </AuthProvider>
        </Router>
    )
}

export default App
