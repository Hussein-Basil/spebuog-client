import { Flex } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Speakers from './components/Speakers'
import LectureVideo from './components/LectureVideo'
import CourseLectures from './components/CourseLectures'
import InternshipCourses from './components/InternshipCourses'
import Header from './components/Header'
import About from './components/About'
import RelatedEvents from './components/RelatedEvents'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useUser } from '../../auth/UserContext'
import useSWR from 'swr'
import NotFound from '../Errors/NotFound'

const EventPage = () => {
    const params = useParams()
    const location = useLocation()
    const [event, setEvent] = useState(null)
    const navigate = useNavigate()
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
    }, [data])

    useEffect(() => {
        if (event?.title) {
            document.title = `${event.title} - SPE BUOG`
        }
    }, [event?.title])

    if (!isLoading && !event?.title) {
        return <NotFound />
    }

    return (
        <Flex
            flexDir="column"
            w="100vw"
            mb={{ base: '0', xl: '3em'}}
        >
            <Header event={event} loading={isLoading} />
            <Navbar event={event} loading={isLoading} />
            <Flex flexDir="column" align="center">
                <Flex
                    w={{
                        base: '90%',
                        lg: '1024px',
                        xl: '1440px',
                        '2xl': '1500px',
                    }}
                    flexDir="column"
                    gap="1em"
                >
                    
                    <About 
                        description={event?.description}
                        target={event?.target}
                        agenda={event?.agenda}
                        loading={isLoading} 
                    />
                    <Speakers 
                        instructors={event?.instructors} 
                        loading={isLoading} 
                    />
                    {['course_lecture', 'webinar'].includes(event?.event_type) ? (
                        <LectureVideo video={event?.video} image={event?.image} loading={isLoading} />
                    ) : event?.event_type === 'course' ? (
                        <CourseLectures lectures={event?.children} loading={isLoading} />
                    ) : (
                        <InternshipCourses courses={event?.children} loading={isLoading} />
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