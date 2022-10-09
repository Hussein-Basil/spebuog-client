import React, { useState, useEffect } from 'react'
import UserContext from './UserContext'

const AuthProvider = (props) => {
    const [status, setStatus] = useState('fetching')
    const [user, setUser] = useState({})
    const [notifications, setNotification] = useState([])

    const [speakers, setSpeakers] = useState([])
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('http://spebuog-dev.vercel.app/api/event')
            .then(res => res.json())
            .then(data => setEvents(data))

        fetch('http://spebuog-dev.vercel.app/api/speaker')
            .then(res => res.json())
            .then(data => setSpeakers(data))
    }, [])


    const value = {
        status,
        setStatus,
        user,
        setUser,
        notifications,
        setNotification,
        speakers,
        events,
    }

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

export default AuthProvider