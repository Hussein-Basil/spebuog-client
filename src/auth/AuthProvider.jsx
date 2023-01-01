import React, { useState, useEffect } from 'react'
import UserContext from './UserContext'

const AuthProvider = (props) => {
    const [status, setStatus] = useState('fetching')
    const [user, setUser] = useState({})
    const [notifications, setNotification] = useState([])

    const [speakers, setSpeakers] = useState([])
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://spebuog-dev.netlify.app/.netlify/functions/api/event')
        .then(res => res.json())
        .then(data => setEvents(data.error ? [] : data.events))
        
        setLoading(true)
        fetch('https://spebuog-dev.netlify.app/.netlify/functions/api/speaker')
            .then(res => res.json())
            .then(data => {
                setSpeakers(data.error ? {} : data.speakers)
                setLoading(false)
        })
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
        loading
    }

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

export default AuthProvider