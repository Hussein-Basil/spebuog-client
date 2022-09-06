import React, { useState, useEffect } from 'react'
import UserContext from './UserContext'

const AuthProvider = (props) => {
    const [status, setStatus] = useState('fetching')
    const [user, setUser] = useState({})
    const [notifications, setNotification] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        if (status === "fetching") {
            fetch("http://localhost:8000/api/auth/status", {
                method: "GET",
                credentials: "include"
            })
                .then(res => res.json())
                .then(data => {
                    setStatus(data.isLoggedIn ? "loggedIn" : "loggedOut")
                    setUser(data.user || {})
                    setCartItems(data.cart || [])
                })
                .catch(err => setStatus("loggedOut"))
        }
    }, [])


    const value = {
        status,
        setStatus,
        user,
        setUser,
        notifications,
        setNotification,
        cartItems,
        setCartItems
    }

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

export default AuthProvider