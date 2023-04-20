import { useState, useEffect } from 'react'
import useSWR from 'swr'

export default () => {
    const [events, setEvents] = useState([])
    const { data, isLoading } = useSWR(`
        *[_type == 'event' && event_type in ['course', 'internship']][0..3] 
        { 
            event_type, 
            title, 
            description, 
            slug,
            date,
            event_type == 'course' => {
                'children': *[_type =='event' && references(^._id)],
                'instructors': *[_type == 'event' && references(^._id)]{instructors[]->{name, image, _id}}.instructors[]
            },
            event_type == 'internship' => {
                'children': *[_type =='event' && references(^._id)],
                'instructors': *[_type == 'event' && references(^._id)] {
                    'children': *[_type == 'event' && references(^._id)]{ instructors[]->{name, image, _id}}
                }.children[].instructors[]
            }
        }
    `) 

    useEffect(() => {
        setEvents(data?.map(event => {
            if (['course', 'internship'].includes(event?.event_type)) {
                return {
                    ...event,
                    instructors: [...new Map(event.instructors.filter(instructor => instructor).map(item => 
                        [item['_id'], item])).values()]
                }
            } else return event
        }))
    }, [data])

    return { events, isLoading }
}