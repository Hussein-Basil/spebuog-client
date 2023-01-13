import React from 'react'
import { Flex, Text, Heading, Image, Link, SkeletonText, SkeletonCircle, Avatar, Icon, Show, Hide } from '@chakra-ui/react'
import { MdLanguage } from 'react-icons/md'
import { IoIosTimer } from 'react-icons/io'
import { useUser } from '../../../auth/UserContext'


const Header = ({ event, loading }) => {
    const { urlFor } = useUser()

    if (loading) {
        return (
            <Flex
            align="start"
            justify="center"
            bg="#0D4C94"
            color="white"
            pt={{ base: "3em", lg: "5em" }}
            pb="3em"
        >
            <Flex
                w={{
                    base: '90%',
                    md: '768px',
                    lg: '1024px',
                    xl: '1440px',
                    '2xl': '1500px',
                }}
                justify="space-between"
                flexDir={{ base: "column", lg: "row" }}
            >
                <Flex
                    flexDir="column"
                    gap="2em"
                    maxW="850px"
                >
                    <SkeletonText w={{ base: "300px", lg: "500px", xl: "600px"}} noOfLines={1} skeletonHeight="0.75em" />
                    <Flex align="center" gap="1em">
                        <SkeletonCircle w="50px" h="50px" />
                        <SkeletonText noOfLines={1} w="100px" />
                    </Flex>
                </Flex>
                <Show above="lg">
                    <Flex
                        flexDir="column"
                        color="white"
                        gap="1em"
                        align="start"
                    >
                        <Flex align="center" gap="1em">
                            <SkeletonText noOfLines={1} mt="4" w="200px" />
                        </Flex>
                        <Flex align="center" gap="1em">
                            <SkeletonText noOfLines={1} mt="4" w="200px" />
                        </Flex>
                    </Flex>
                </Show>
                <Hide above="lg">
                    <Flex
                        flexDir="column"
                        gap="0.5em"
                        align="start"
                        mt="3em"
                    >
                        <Flex align="center" gap="0.75em">
                            <SkeletonText noOfLines={1} mt="4" w="125px" />
                        </Flex>
                        <Flex align="center" gap="0.75em">
                            <SkeletonText noOfLines={1} mt="4" w="125px" />
                        </Flex>
                    </Flex>
                </Hide>
            </Flex>
        </Flex>
        )
    }
    
    else return (
        <Flex
            align="start"
            justify="center"
            bg="#0D4C94"
            color="white"
            pt={{ base: "3em", lg: "5em" }}
            pb="3em"
        >
            <Flex
                w={{
                    base: '90%',
                    md: '768px',
                    lg: '1024px',
                    xl: '1440px',
                    '2xl': '1500px',
                }}
                justify="space-between"
                flexDir={{ base: "column", lg: "row" }}
            >
                <Flex
                    flexDir="column"
                    gap="2em"
                    maxW="850px"
                >
                    {event.category?.title && <Text> Browse {'>'} {event.category?.title}</Text>}
                    {event.parent && <Text>This {event.event_type === 'course_lecture' ? 'lecture' : event.event_type} is part of the {event.parent.title}</Text>}
                    <Heading fontSize={{ base: "1.5rem", lg: "2.25rem" }}>
                        {event.title}
                    </Heading>
                    <Flex align={{ base: "start", lg: "center" }} gap="1em" flexDir={{ base: "column", lg: "row" }}>
                        <Flex align="center" gap="1em">
                            <Image
                                src={event.instructors?.at(0)?.image ? urlFor(event.instructors.at(0).image) : ""}
                                w="50px"
                                h="50px"
                                as={Avatar}
                                opacity={1}
                            />
                            <Text>{event.instructors?.at(0)?.name}</Text>
                        </Flex>
                        <Link href="#instructors" textDecor="underline">{event.instructors?.length > 1 && `+${event.instructors?.length - 1} more instructors`}</Link>
                    </Flex>
                </Flex>
                <Show above="lg">
                    <Flex
                        flexDir="column"
                        color="white"
                        gap="1em"
                        align="start"
                    >
                        {event.video_length && 
                        <Flex align="center" gap="1em">
                            <Icon w="52px" h="52px" as={IoIosTimer} />
                            <Text fontSize="18px">{event.video_length} hours video</Text>
                        </Flex>}
                        {event.language && 
                        <Flex align="center" gap="1em">
                            <Icon w="52px" h="52px" as={MdLanguage} />
                            <Text fontSize="18px">{event.language} Language</Text>
                        </Flex>}
                    </Flex>
                </Show>
                <Hide above="lg">
                    <Flex
                        flexDir="column"
                        gap="0.5em"
                        align="start"
                        mt="3em"
                    >
                        {event.video_length && 
                        <Flex align="center" gap="0.75em">
                            <Icon w="48px" h="48px" as={IoIosTimer} />
                            <Text fontSize="16px">{event.video_length} hours to complete</Text>
                        </Flex>}
                        {event.language && 
                        <Flex align="center" gap="0.75em">
                            <Icon w="48px" h="48px" as={MdLanguage} />
                            <Text fontSize="16px">{event.language} Language</Text>
                        </Flex>}
                    </Flex>
                </Hide>
            </Flex>
        </Flex>
    )
}

export default Header