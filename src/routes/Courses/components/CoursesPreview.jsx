import React from 'react'
import { Flex, Icon, Text, Divider } from '@chakra-ui/react'
import { BsDropletFill } from 'react-icons/bs'
import { IoIosFlask } from 'react-icons/io'
import Course from '../../../components/Course'
import { useUser } from '../../../auth/UserContext'

const CoursesPreview = () => {
    const { events } = useUser()
    return (<>
        <Flex flexDir="column" gap="1.5em" mt="1.5em">
            <Flex align="center" gap="1em">
                <Icon as={BsDropletFill} w="28px" h="28px" />
                <Text fontSize="28px" fontWeight="medium">Oil & Gas Engineering</Text>
            </Flex>
            <Flex flexDir="row" gap="3em" overflow="auto">
                {events && events.filter(e => e.event_type !== 'internship').slice(0, 3).map((course, idx) => (
                    <Course course={course} key={idx} />
                ))}
            </Flex>
        </Flex>
        <Divider my="2em" />
        <Flex flexDir="column" gap="1.5em">
            <Flex align="center" gap="1em">
                <Icon as={IoIosFlask} w="28px" h="28px" />
                <Text fontSize="28px" fontWeight="medium">Chemical & Oil Refining</Text>
            </Flex>
            <Flex flexDir="row" gap="3em" overflow="auto">
                {events && events.filter(e => e.event_type !== 'internship').slice(0, 3).map((course, idx) => (
                    <Course course={course} key={idx} />
                ))}
            </Flex>
        </Flex></>
    )
}

export default CoursesPreview