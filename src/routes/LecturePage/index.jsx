import React, { useState, useEffect } from 'react'
import { Flex } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import Speakers from './components/Speakers'
import Lecture from './components/Lecture'
import Header from './components/Header'
import About from './components/About'
import FAQ from './components/FAQ'
import RelatedLectures from './components/RelatedLectures'

const LecturePage = () => {
    const params = useParams()
    const [event, setEvent] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://spebuog-dev.netlify.app/.netlify/functions/api/event/${params.id}`)
            .then(res => res.json())
            .then(data => {
                if (['course', 'internship'].includes(data.event_type)) {
                    navigate(`/course/${params.id}`)
                } else {
                    setEvent(data.error ? {} : data.event)
                }
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (event.title) {
            document.title = `${event.title} - SPE BUOG`
        }
    }, [event.title])

    return (
        <Flex
            flexDir="column"
            mb="5em"
            w="100vw"
        >
            <Header event={event} />
            <Navbar event={event} />
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
                    {event?.title && (event.description || event.agenda?.length > 0 || event.target?.length > 0) &&
                    <About course={event} />}
                    <Speakers speakers={event.speakers} />
                    <Lecture event={event} />
                    {/* <Files /> */}
                    <RelatedLectures event={event} />
                    {/* <FAQ /> */}
                </Flex>
            </Flex>
        </Flex>
    )
}

export default LecturePage