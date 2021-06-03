import React from 'react'
import { Route, Redirect } from "react-router-dom";
import {useAuth} from '../context/AuthContext'


export default function PrivacteRoute({children}) {
    const {currentUser} = useAuth()
    return (
        <>
            {currentUser? children: <Redirect to='/signin' /> }
        </>
    )
}
