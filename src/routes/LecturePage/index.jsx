import React, { useState, useEffect } from 'react'
import { Flex } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import Speakers from './components/Speakers'
import Lecture from './components/Lecture'
import Header from './components/Header'
import About from './components/About'
import FAQ from './components/FAQ'

const LecturePage = () => {
    const params = useParams()
    const [event, setEvent] = useState({})

    useEffect(() => {
        fetch(`https://spebuog-dev.netlify.app/.netlify/functions/api/event/${params.id}`)
            .then(res => res.json())
            .then(data => setEvent(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (event.title) {
            document.title = `${event.title} - SPE BUOG`
        }
    }, [event.title])

    if (!event || !event.title) {
        return 'Loading'
    }

    return (
        <Flex
            flexDir="column"
            mb="5em"
            w="100vw"
        >
            <Header event={event} />
            <Navbar />
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
                    <About course={event} />
                    <Speakers speakers={event.speakers} />
                    <Lecture event={event} />
                    {/* <Files />
                    <SupportingLectures /> */}
                    <FAQ />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default LecturePage