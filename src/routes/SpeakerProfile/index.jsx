import React, { useEffect, useState } from 'react'
import { Icon, Flex, Heading, Text, Image, Avatar, Button } from '@chakra-ui/react'
import { GiAchievement } from 'react-icons/gi'

import { useParams } from 'react-router-dom'
import Course from '../../components/Course'

const SpeakerProfile = () => {
    const params = useParams()
    const [speaker, setSpeaker] = useState()

    useEffect(() => {
        fetch(`https://spebuog-dev.vercel.app/api/speaker/${params.id}`)
            .then(res => res.json())
            .then(data => setSpeaker({ ...data.speaker, events: data.events }))

    }, [params.id])

    if (!speaker) {
        return 'Loading...'
    }

    return (
        <Flex flexDir="column" align="center" gap="1em" mb="5em" w="100vw">
            <Flex bg="#0D4C94" pt={{ base: "3em", lg: "7em" }} pb={{ base: "3em", lg: 0 }} width="100%" justify="center" align="end" mb="60px">
                <Flex w={{
                    base: '100%',
                    md: '768px',
                    lg: '1024px',
                    xl: '1440px',
                    '2xl': '1500px',
                }}
                    justify="space-between"
                    flexDir={{ base: 'column', lg: 'row' }}
                    align={{ base: "center", lg: "unset" }}

                >
                    <Flex
                        gap="2.5em"
                        flexDir={{ base: "column", lg: "row" }}
                        align={{ base: "center", lg: "unset" }}
                        textAlign={{ base: "center", lg: "unset" }}
                    >
                        <Image
                            src={`https://spebuog-dev.vercel.app${speaker.image}`}
                            w={{ base: "150px", lg: "200px" }}
                            h={{ base: "150px", lg: "200px" }}
                            mb="-45px"
                            as={Avatar}
                        />
                        <Flex flexDir="column" color="white" gap="1em" mt="15px">
                            <Heading fontSize={{ base: "24px", lg: "32px" }}>{speaker.name}</Heading>
                            <Flex flexDir="column">
                                <Text fontSize="18px" fontWeight="light">{speaker.position}</Text>
                                <Text fontSize="18px">{speaker.organization}</Text>
                            </Flex>
                        </Flex>
                    </Flex>

                    <Flex flexDir="row" gap="1em" align="center">
                        <Icon as={GiAchievement} w="56px" h="56px" color="#e0a800" />
                        <Flex gap="1em" align="center" color="white">
                            <Text fontSize="64px" fontWeight="semibold">{speaker.events.length}</Text>
                            <Text>Completed<br />Courses</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex w={{
                base: '90%',
                md: '768px',
                lg: '1024px',
                xl: '1440px',
                '2xl': '1500px',
            }}
                flexDir="column"
                gap="3em"
            >
                <Flex flexDir="column" gap="1em" maxW="800px">
                    <Heading fontSize="24px" fontWeight="medium">Experience</Heading>
                    <Text >{speaker.description.split('\n').map(s => <>{s}<br /></>)}</Text>
                </Flex>

                <Flex flexDir="column" gap="1em">
                    <Heading fontSize="24px" fontWeight="medium">
                        Courses
                    </Heading>
                    <Flex flexDir="row" gap="3em" width="100%" overflow="auto" >
                        {speaker.events.map(event => (
                            <Course course={event} />
                        ))}
                        {speaker.events.length === 0 && (
                            <Text>No results found</Text>
                        )}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default SpeakerProfile