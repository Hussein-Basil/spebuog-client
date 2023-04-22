import { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'

import useSWR from 'swr'

export default function useGetEvent () {
    const location = useLocation()
    const navigate = useNavigate()
    const params = useParams()

    const [event, setEvent] = useState(null)
    const { data, isLoading } = useSWR(`
        *[_type == 'event' && slug.current == '${params.slug}'][0]
        {
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
        if (data) {

            if (['course', 'internship'].includes(data.event_type)) {
                setEvent({
                    ...data,
                    instructors: [...new Map(data.instructors.map(item => 
                            [item['_id'], item])).values()]
                })
            } else {
                setEvent(data)
            }

            if (
                location.pathname.startsWith('/course') && 
                ['course_lecture', 'webinar'].includes(data.event_type)
            ) {
                navigate(`/lecture/${data.slug?.current}`)
            } else if (
                location.pathname.startsWith('/lecture') && 
                ['course', 'internship'].includes(data.event_type)
            ) {
                navigate(`/course/${data.slug?.current}`)
            }
        }
    }, [data, location.pathname, navigate])

    return { event, isLoading}
}