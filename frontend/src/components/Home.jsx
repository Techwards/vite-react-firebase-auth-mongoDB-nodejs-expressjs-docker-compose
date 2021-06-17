import React, { useEffect } from 'react'
import { Link, useHistory } from "react-router-dom"
import { useAuth } from '../context/AuthContext'

//components
import Button from '@material-ui/core/Button';

export default function Home() {
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    useEffect(() => {
        console.log('currentUser: ', currentUser);
        if (!currentUser) {
            history.push("/signin")
        } else {
            history.push("/")
        }
    }, [currentUser])


    // handle functions
    function handleLogout(e) {
        logout()
    }
    function handleUpdateProfile() {
        history.push('/update-profile')
    }
    function handleSendEmailLink() {
        history.push({
            pathname: '/send-email-link',
            state: {
                btnName: "Send Email Link"
            }
        })
    }
    return (
        <div>
            {
                currentUser ?
                    (
                        <div>
                            <h1>My home</h1>
                            <Button variant="contained" color="primary" onClick={handleLogout}>
                                Logout
                        </Button>
                            <br />
                            <Button variant="contained" color="secondary" onClick={handleUpdateProfile}>
                                Update profile
                        </Button>
                            <br />
                            <Button variant="contained" color="secondary" onClick={handleSendEmailLink}>
                                Send Email Link
                        </Button>
                        </div>
                    ) :
                    <h1>Loading...</h1>
            }
        </div>
    )
}
