import React from 'react'
import { Flex, Text, Heading, Image, Link, Avatar, Icon, Show, Hide } from '@chakra-ui/react'
import { MdLanguage, MdOutlineContentCopy } from 'react-icons/md'
import { IoIosTimer } from 'react-icons/io'


const Header = ({ event }) => {
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
                    {/* <Text> Browse {'>'} {event.category?.name || 'Oil & Gas'}</Text> */}
                    {event.parent && <Text>This {event.event_type === 'event_lecture' ? 'lecture' : event.event_type} is part of the {event.parent.title}</Text>}
                    <Heading fontSize={{ base: "1.5rem", lg: "2.25rem" }}>
                        {event.title}
                    </Heading>
                    <Flex align={{ base: "start", lg: "center" }} gap="1em" flexDir={{ base: "column", lg: "row" }}>
                        <Flex align="center" gap="1em">
                            {event.speakers.at(0) && event.speakers.at(0)?.image !== '/images/speaker.png' ? (
                                <Image
                                    src={`https://spebuog-dev.vercel.app${event.speakers.at(0)?.image}`}
                                    w="50px"
                                    h="50px"
                                />
                            ) : (
                                <Avatar />
                            )}
                            <Text>{event.speakers?.at(0)?.name}</Text>
                        </Flex>
                        <Link href="#speakers" textDecor="underline">{event.speakers.length > 1 && `+${event.speakers.length - 1} more speakers`}</Link>
                    </Flex>
                </Flex>
                <Show above="lg">
                    <Flex
                        flexDir="column"
                        color="white"
                        gap="1em"
                        align="start"
                    >
                        {
                            event.parent &&
                            event.parent.event_type === 'internship' &&
                            event.parent.title && (
                                <Flex align="center" gap="1em">
                                    <Icon w="52px" h="52px" as={MdOutlineContentCopy} />
                                    <Flex flexDir="column">

                                        <Text fontSize="18px">Course 1 of 8 in the</Text>
                                        <Text fontSize="14px">{event.parent.title}</Text>
                                    </Flex>
                                </Flex>)
                        }
                        <Flex align="center" gap="1em">
                            <Icon w="52px" h="52px" as={IoIosTimer} />
                            <Text fontSize="18px">Approx. 9 hours to complete</Text>
                        </Flex>
                        <Flex align="center" gap="1em">
                            <Icon w="52px" h="52px" as={MdLanguage} />
                            <Text fontSize="18px">{event.language} Language</Text>
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
                        {
                            event.parent &&
                            event.parent.event_type === 'internship' &&
                            event.parent.title && (
                                <Flex align="center" gap="1em">
                                    <Icon w="44px" h="44px" as={MdOutlineContentCopy} />
                                    <Flex flexDir="column">

                                        <Text fontSize="16px">Course 1 of 8 in the</Text>
                                        <Text fontSize="12px">{event.parent.title}</Text>
                                    </Flex>
                                </Flex>)
                        }
                        <Flex align="center" gap="0.75em">
                            <Icon w="48px" h="48px" as={IoIosTimer} />
                            <Text fontSize="16px">Approx. 9 hours to complete</Text>
                        </Flex>
                        <Flex align="center" gap="0.75em">
                            <Icon w="48px" h="48px" as={MdLanguage} />
                            <Text fontSize="16px">{event.language} Language</Text>
                        </Flex>
                    </Flex>
                </Hide>
            </Flex>
        </Flex>
    )
}

export default Header