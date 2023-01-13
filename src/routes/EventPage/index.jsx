import { Flex } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Speakers from './components/Speakers'
import LectureVideo from './components/LectureVideo'
import Lectures from './components/Lectures'
import Header from './components/Header'
import About from './components/About'
import RelatedEvents from './components/RelatedEvents'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useUser } from '../../auth/UserContext'

const EventPage = () => {
    const params = useParams()
    const location = useLocation()
    const [event, setEvent] = useState({})
    const navigate = useNavigate()
    const { client } = useUser()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        client.fetch(`
            *[_type == 'event' && slug.current == '${params.slug}'][0]
            {
                ...,
                event_type in ['course_lecture', 'webinar'] => {
                    instructors[]->,
                    parent->
                },
                event_type in ['course', 'internship'] => {
                    'instructors': *[_type == 'event' && references(^._id)].instructors[]->,
                    parent->,
                    'children': *[_type == 'event' && references(^._id)]{..., instructors[]-> }
                }
            }
        `)
        .then(result => {
            if (['course', 'internship'].includes(result.event_type)) {
                return {
                    ...result,
                    instructors: [...new Map(result.instructors.map(item => 
                            [item['_id'], item])).values()]
                }
            } else return result
        })
        .then(result => {
            if (
                location.pathname.startsWith('/course') && 
                ['course_lecture', 'webinar'].includes(result.event_type)
            ) {
                navigate(`/lecture/${result.slug?.current}`)
            } else if (
                location.pathname.startsWith('/lecture') && 
                ['course', 'internship'].includes(result.event_type)
            ) {
                navigate(`/course/${result.slug?.current}`)
            } else {
                setEvent(result)
                setLoading(false)
            }
        })
    }, [])

    useEffect(() => {
        if (event?.title) {
            document.title = `${event.title} - SPE BUOG`
        }
    }, [event?.title])

    return (
        <Flex
            flexDir="column"
            mb="5em"
            w="100vw"
        >
            <Header event={event} loading={loading} />
            <Navbar event={event} loading={loading} />
            <Flex flexDir="column" align="center">
                <Flex
                    w={{
                        base: '90%',
                        lg: '1024px',
                        xl: '1440px',
                        '2xl': '1500px',
                    }}
                    flexDir="column"
                    gap="3em"
                >
                    
                    <About 
                        description={event?.description}
                        target={event?.target}
                        agenda={event?.agenda}
                        loading={loading} 
                    />
                    <Speakers 
                        instructors={event?.instructors} 
                        loading={loading} 
                    />
                    {['course_lecture', 'webinar'].includes(event?.event_type) ? (
                        <LectureVideo video={event?.video} image={event?.image} loading={loading} />
                    ) : (
                        <Lectures lectures={event?.children} loading={loading} />
                    )}
                    <RelatedEvents
                        type={event?.event_type}
                        tags={event?.tags}
                        eventID={event?._id}
                        categoryID={event?.category?._ref}
                    />
                    {/* <Files /> */}
                    {/* <FAQ /> */}
                </Flex>
            </Flex>
        </Flex>
    )
}

export default EventPage