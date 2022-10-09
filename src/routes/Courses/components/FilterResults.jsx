import React, { useState, useEffect } from 'react'
import { Flex, Divider, Link, LinkBox, Text, Image, Avatar } from '@chakra-ui/react'
import { useUser } from '../../../auth/UserContext'

const FilterResults = ({
    results
}) => {
    if (!results) return 'Loading'
    if (!(results instanceof Array)) {
        return 'No results'
    }
    return (
        <Flex flexDir="column">
            {results.map((course, idx) => (
                <Flex flexDir="column" key={idx}>
                    <Flex
                        flexDir="row"
                        p="1em"
                        justify="space-between"
                    >
                        <Link href={`/course/${course.uid}`} fontSize={{ base: "16px", lg: "18px" }} fontWeight="medium" >{course.title}</Link>
                        <Flex gap="1em" align="center">
                            {/* {course.speakers.map((speaker, idx) => {
                                if (speaker?.image && speaker.image === '/images/speaker.png') {
                                    return <Avatar key={idx} w="40px" h="40px" />
                                } else return (
                                    <Image key={idx} w="40px" h="40px" borderRadius="50%" src={`https://spebuog-dev.vercel.app${speaker.image}`} />
                                )
                            })} */}
                            {/* <Text>
                                {course.speakers.at(0)?.name}{' '}
                                {course.speakers.length > 1 && `+${course.speakers.length - 1}`}
                            </Text> */}
                        </Flex>
                    </Flex>
                    <Divider />
                </Flex>
            ))}
        </Flex>
    )
}

export default FilterResults