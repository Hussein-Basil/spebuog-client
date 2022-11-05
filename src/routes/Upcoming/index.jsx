import React, { useState } from 'react'
import { Flex, Heading, Text, Image, Avatar, Link, Skeleton, SkeletonText, SkeletonCircle } from '@chakra-ui/react'
import Lorem from '../../components/Lorem'
import ResponsiveWidth from '../../components/ResponsiveWidth'
import { useUser } from '../../auth/UserContext'
import moment from 'moment'

const UpcomingItem = ({ event }) => {
    if (!event?.title) {
        return (
            <Flex gap="2em" bg="#f1f1f1" p="1em" borderRadius="10px" justify="start" >
                <Flex flexDir="column" align="center" textAlign="center">
                    <SkeletonText noOfLines={1} mt="4" w="30px" />
                    <SkeletonText noOfLines={1} skeletonHeight="0.75em" mt="4" w="50px" />
                    <SkeletonText noOfLines={1} mt="4" w="30px" />
                </Flex>
                <Flex flexDir="column" pt="0.25em" gap="1em">
                    <SkeletonText noOfLines={1} w="400px" />
                    <SkeletonText noOfLines={4} w="800px" mt="4" />
                </Flex>
                <Flex flexDir="column" w="450px" align="center" textAlign="center" gap="0.5em">
                    <SkeletonCircle 
                        w="100px"
                        h="100px"
                    />
                    <SkeletonText noOfLines={1} mt="0.5em" skeletonHeight="1em" w="125px" />
                </Flex>
            </Flex>    
        )
    }

    return (
        <Flex gap="2em" bg="#f1f1f1" p="1em" borderRadius="10px" justify="start">
            <Flex flexDir="column" justify="start" textAlign="center">
                <Text>Jan</Text>
                <Text fontSize="1.5em" fontWeight="semibold">20</Text>
                <Text>2022</Text>
            </Flex>
            <Flex flexDir="column" pt="0.25em" gap="1em">
                <Heading fontSize="18px"><Link href={`/course/${event.uid}`}>{event.title}</Link></Heading>
                {/* <Text>{event.description}</Text> */}
                <Lorem count={3}/>
            </Flex>
            <Flex flexDir="column" w="450px" align="center" textAlign="center" gap="0.5em">
                <Image 
                    as={Avatar} 
                    w="100px"
                    h="100px"
                    src={`https://spebuog-dev.vercel.app/images/${event.speakers.at(0).image}`} 
                />
                <Text>{event.speakers.at(0)?.name}</Text>
            </Flex>
        </Flex>
    )
}

const Upcoming = () => {
    const { events } = useUser()
    return (
        <ResponsiveWidth mt="3em">
            <Heading fontSize="28px" fontWeight="medium" mb="0.5">Browse Our Upcoming Events</Heading>
            <Text mb="1em">Grow your skills by studying from our exciting courses</Text>
            <Flex flexDir="column" gap="1em">
                {events?.length ? events.filter(event => ['webinar', 'course_lecture'].includes(event.event_type)).map(event => 
                    <UpcomingItem event={event} />
                ) : [...Array(6)].map((_, idx) => (
                    <UpcomingItem/>
                ))}
            </Flex>
        </ResponsiveWidth>
    )
}

export default Upcoming