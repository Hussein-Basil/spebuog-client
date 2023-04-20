import { useState, useEffect } from 'react'
import useSWR from 'swr'

export default ({
    eventID,
    tags,
    categoryID,
    type
}) => {
    const [related, setRelated] = useState(null)
    
    const { data, isLoading } = useSWR(`
        *[_type == 'event' && _id != '${eventID}'] | score(
            boost(tags match '${tags?.at(0)}', 4),
            title match '${tags?.at(0)}',
            category._ref match '${categoryID}',
            event_type == '${type}'
        )[0..4]{
            ...,
            parent->,
            event_type in ['course_lecture', 'webinar'] => {
                instructors[]->,
            },
            event_type == 'course' => {
                'children': *[_type == 'event' && references(^._id)]{..., instructors[]-> },
                'instructors': *[_type == 'event' && references(^._id)].instructors[]->
            },
            event_type == 'internship' => {
                'children': *[_type == 'event' && references(^._id)]{
                    ..., 
                    'instructors': *[_type == 'event' && references(^._id)].instructors[]-> 
                },
                'instructors': *[_type == 'event' && references(^._id)] {
                    'children': *[_type == 'event' && references(^._id)]{ instructors[]-> }
                }.children[].instructors[]
            }
        }
    `)

    useEffect(() => {
        setRelated(data?.length ? data : [])
    }, [data])

    return { related, isLoading }
}