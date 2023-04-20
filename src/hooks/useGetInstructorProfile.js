import { useState, useEffect } from 'react'
import useSWR from 'swr'

export default ({ id }) => {
    const [speaker, setSpeaker] = useState(null)

    const { data, isLoading } = useSWR(`
    *[_type == 'instructor' && slug.current == '${id}'][0]
        {..., 'events': *[ _type == 'event' && references(^._id)]{..., 'instructors': instructors[]->} }
    `)

    useEffect(() => {
        setSpeaker(data || {})
    }, [data])

    return { speaker, isLoading }
}