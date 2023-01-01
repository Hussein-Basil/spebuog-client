import React, { useState } from 'react'
import { Flex, Heading,Button, Text, Image, Avatar, Link, Skeleton, SkeletonText, SkeletonCircle, Divider } from '@chakra-ui/react'
import Lorem from '../../components/Lorem'
import ResponsiveWidth from '../../components/ResponsiveWidth'
import { useUser } from '../../auth/UserContext'
import moment from 'moment'
import { useEffect } from 'react'

const UpcomingItem = ({ event, lastItem }) => {
    if (!event?.title) {
        return (
            <>
            <Flex gap="2em" p="1em" borderRadius="10px" justify="start" >
                {/* <Flex flexDir="column" align="center" textAlign="center">
                    <SkeletonText noOfLines={1} mt="4" w="30px" />
                    <SkeletonText noOfLines={1} skeletonHeight="0.75em" mt="4" w="50px" />
                    <SkeletonText noOfLines={1} mt="4" w="30px" />
                </Flex> */}
                <Flex flexDir="column" pt="0.25em" gap="1em">
                    <SkeletonText noOfLines={1} w="100px" />
                    <SkeletonText noOfLines={1} w="400px" />
                    <SkeletonText noOfLines={4} w="800px" mt="4" />
                </Flex>
                {/* <Flex flexDir="column" w="450px" align="center" textAlign="center" gap="0.5em">
                    <SkeletonCircle 
                        w="100px"
                        h="100px"
                    />
                    <SkeletonText noOfLines={1} mt="0.5em" skeletonHeight="1em" w="125px" />
                </Flex> */}
            </Flex> 
            {!lastItem && <Divider />}  
            </> 
        )
    }

    return (
        <>
        <Flex p="1em" flexDir="row" justify="space-between" borderRadius="10px">
            {/* <Flex flexDir="column" justify="start" textAlign="center">
                <Text>January</Text>
                <Text fontSize="1.5em" fontWeight="semibold">20</Text>
                <Text>2022</Text>
            </Flex> */}
            <Flex flexDir="column" pt="0.25em" gap="1em">
                <Text fontWeight="semibold">{moment(event.date).format('MMMM DD, YYYY')}</Text>
                <Heading fontSize="18px" color="#0D4C94">{event.title}</Heading>
                <Text>{event.description || `Join ${event.speakers.at(0).name} to talk about ${event.title}`}</Text>
                {/* <Text>Join Dr. Ali explaining the current situation at COVID-19!</Text> */}
            </Flex>
            {/* <Flex flexDir="column" maxW="450px" align="end" textAlign="center" gap="0.5em">
                <Image 
                    as={Avatar} 
                    w="100px"
                    h="100px"
                    src={`https://spebuog-dev.vercel.app/images/${event.speakers.at(0).image}`} 
                />
                <Text>{event.speakers.at(0)?.name}</Text>
            </Flex> */}
        </Flex>
        {!lastItem && <Divider />}  
        </> 
    )
}

const Upcoming = () => {
    const [sliceIndex, setSliceIndex] = useState()
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch('https://spebuog-dev.netlify.app/.netlify/functions/api/event/upcoming')
        .then(res => res.json())
        .then(data => {
            setEvents(data.error ? [] : data.events)
            setLoading(false)
        })
    }, [])

    return (
        <ResponsiveWidth my="3em">
            <Heading fontSize="28px" fontWeight="medium" mb="0.5">Browse Our Upcoming Events</Heading>
            <Text mb="1em">Check out our future lectures and activites!</Text>
            <Flex flexDir="column" gap="1em">
                {!loading ? events.slice(0, sliceIndex).filter(event => ['webinar', 'course_lecture'].includes(event.event_type)).map((event, idx) => 
                    <UpcomingItem event={event} key={idx} lastItem={idx + 1 === events.length} />
                    
                ) : [...Array(6)].map((_, idx) => (
                    <UpcomingItem key={idx} lastItem={idx + 1 === events.length} />
                ))}
                {sliceIndex < events.length &&
                <Button variant="outline" onClick={() => setSliceIndex(sliceIndex+6)}>Load More</Button>}
            </Flex>
            {!loading && events.length === 0 && (
                <Text mt="2em" fontSize='28px' color="#0D4C94">No upcoming events currently.</Text>
            )}
        </ResponsiveWidth>
    )
}

export default Upcoming