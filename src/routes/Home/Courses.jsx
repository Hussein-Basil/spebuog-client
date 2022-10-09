import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import Course from '../../components/Course'
import { useUser } from '../../auth/UserContext'

const Courses = () => {
    const { events } = useUser()


    return (
        <Flex flexDir="column" align="center" gap="2em">
            <Heading fontSize="28px" fontWeight="medium">Browse Our Courses</Heading>
            <Flex gap={{ base: "1em", lg: "3em" }} flexDir={{ base: "column", lg: "row" }} w={{ base: "90%", md: "unset" }} align={{ base: "center", lg: "unset" }}>
                {events.slice(0, 3).map((course, idx) => (
                    <Course course={course} key={idx} />
                ))}
                {events?.length === 0 && <>
                    <Course />
                    <Course />
                    <Course />
                </>}
            </Flex>
        </Flex>
    )
}

export default Courses