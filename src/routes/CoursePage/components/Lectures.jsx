import React, { useState, useEffect } from 'react'
import { Flex, Heading, Text, Icon, Image, useBreakpointValue, Show, Hide } from '@chakra-ui/react'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'

const Lectures = ({ lectures, speakers }) => {
    const [currentLecture, setCurrentLecture] = useState(0)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {

        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleWindowResize)
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    const lectureTitleSlice = useBreakpointValue({
        base: 48,
        md: 96,
    })

    if (!lectures?.length) {
        return ''
    }


    return (
        <Flex flexDir="column" gap="2em" mt="2em" id="lectures">
            <Heading fontSize="24px" fontWeight="medium">
                Lecture{lectures.length > 1 && 's'}
            </Heading>
            <Flex flexDir={{ base: "column", xl: "row" }} gap="2em" >
                {['offline', 'unrecorded'].includes(lectures.at(currentLecture)?.item_type) ? (
                    <Flex minWidth="760" minHeight="427" bg="#c8c8c8" align="center" justify="center">
                        <Text>No Video</Text>
                    </Flex>
                ) : (
                    <Flex flexDir="column" gap="1em">
                        <Show above="lg">
                            <iframe
                                width="960"
                                height="539"
                                style={{ background: '#c8c8c8' }}
                                src={`https://www.youtube.com/embed/${lectures.at(currentLecture)?.link?.split("https://youtu.be/").pop()}`}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                            />
                        </Show>
                        <Hide above="lg" >
                            <iframe
                                width={windowWidth}
                                height={Math.round(windowWidth * 9 / 16)}
                                style={{ background: '#c8c8c8', marginRight: 'auto', marginLeft: -0.05 * windowWidth }}
                                src={`https://www.youtube.com/embed/${lectures.at(currentLecture)?.link?.split("https://youtu.be/").pop()}`}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                            />
                        </Hide>
                        <Heading fontSize={{ base: "18px", lg: "24px" }} fontWeight="medium" mt="0.5em">{lectures.at(currentLecture)?.title}</Heading>
                        {lectures.length && lectures.length > 1 && (
                            <Flex flexDir="row" gap="1em" fontSize={{ base: "14px", lg: "16px" }}>
                                <Text
                                    onClick={() => setCurrentLecture(currentLecture > 0 ? currentLecture - 1 : 0)}
                                    cursor="pointer"
                                    _hover={{ textDecoration: "underline" }}
                                >
                                    <Icon mr="0.5em" as={ArrowBackIcon} />
                                    Previous
                                </Text>
                                <Text
                                    onClick={() => setCurrentLecture(currentLecture < lectures.length - 1 ? currentLecture + 1 : lectures.length - 1)}
                                    cursor="pointer"
                                    _hover={{ textDecoration: "underline" }}
                                >
                                    Next
                                    <Icon ml="0.5em" as={ArrowForwardIcon} />
                                </Text>
                            </Flex>
                        )}
                    </Flex>
                )}
                {lectures.length && lectures.length > 1 && (
                    <Flex
                        flexDir="column"
                        border="1px solid #c8c8c8"
                        borderRadius="10px"
                        px="1em"
                        py="1em"
                        w="500px"
                        maxW="100%"
                        gap="1.5em"
                        h="fit-content"
                        maxH="539px"
                    >
                        <Heading fontSize="22px" fontWeight="medium">Timeline</Heading>
                        <Flex flexDir="column" gap="0.5em" overflowY="auto">
                            {lectures.map((lecture, idx) => (
                                <Flex flexDir="row" align="start" gap="1em" position="relative" onClick={() => setCurrentLecture(idx)} cursor="pointer" pr="5px">
                                    <Flex>
                                        {currentLecture === idx ? (
                                            <Icon as={MdOutlineArrowForwardIos} alignSelf="center" w="15px" h="15px" position="absolute" left="-4px" />
                                        ) : (
                                            <Text alignSelf="center" position="absolute" left="0" fontSize={{ base: "12px", lg: "14px" }}>{idx + 1}</Text>
                                        )}
                                        {['offline', 'unrecorded'].includes(lecture.item_type) ? (
                                            <Flex ml={{ base: "1em", lg: "2em" }} minW="100px" h="56px" bg="#c8c8c8" />
                                        ) : (
                                            <Image
                                                ml={{ base: "1.5em", lg: "2em" }}
                                                src={`https://img.youtube.com/vi/${lecture?.link?.split('https://youtu.be/').pop()}/sddefault.jpg`}
                                                minW={{ base: "80px", lg: "100px" }}
                                                h="56px"
                                                bg="#c8c8c8"

                                            />
                                        )}
                                    </Flex>
                                    <Flex flexDir="column">
                                        <Text fontSize="14px" fontWeight="medium">{lecture.title.slice(0, lectureTitleSlice)}{lecture.title.length > lectureTitleSlice && '...'}</Text>
                                        <Text fontSize="12px">{speakers.at(lecture.speaker)?.name}</Text>
                                    </Flex>
                                </Flex>
                            ))}
                        </Flex>
                    </Flex>
                )}
            </Flex>
        </Flex>

    )
}

export default Lectures