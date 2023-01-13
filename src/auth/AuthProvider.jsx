import React, { useState } from 'react'
import UserContext from './UserContext'
import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const AuthProvider = (props) => {
    const [status, setStatus] = useState('fetching')
    const [user, setUser] = useState({})
    const [notifications, setNotification] = useState([])

    const client = sanityClient({
        projectId: 'q6fpo8mv',
        dataset: 'production',
        apiVersion: '2021-10-21',
        useCdn: true,
    })

    const builder = imageUrlBuilder({
        baseUrl: 'https://q6fpo8mv.api.sanity.io',
        projectId: 'q6fpo8mv',
        dataset: 'production',
        useCdn: true,
    })

    const urlFor = (source) => builder.image(source)

    const filterEventsByQuery = (events, q) => {
        let query = q.toLowerCase()
        return events.filter(event => (
            event.title.toLowerCase().includes(query) ||
            event.description?.toLowerCase().includes(query)
        ))
    }

    const filterEventsByTag = (events, tag) => {
        if (tag === 'all') return events
        return events.filter(event => (
            event.tags.includes(tag)
        ))
    }

    const filterById = (group, id) => {
        return group.find(item => item.id === id)
    }

    const value = {
        client,
        filterEventsByQuery,
        filterEventsByTag,
        filterById,
        status,
        setStatus,
        user,
        setUser,
        notifications,
        setNotification,
        urlFor
    }

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

export default AuthProvider