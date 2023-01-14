import React, { useState } from 'react'
import { Flex, Text, Heading, Link, Image, Grid, Avatar, Button, Show, LinkOverlay, LinkBox, SkeletonCircle, SkeletonText  } from '@chakra-ui/react'
import { useUser } from '../../../auth/UserContext'
import {motion} from 'framer-motion'

const View = ({
    gridView,
    loading,
    filteredSpeakers,
    responsiveGridView,
}) => {
    const {  urlFor } = useUser()
    const [sliceIndex, setSliceIndex] = useState(12)

    const nullSpeakers = [...Array(12)].map((_, idx) => (
        <Flex
            key={idx}
            flexDir="column"
            boxShadow="0 0 0 1px #e8e8e8"
            p="1em"
            borderRadius="15px"
            {...(gridView ? { 
                align: "center",
                justify: "space-between",
                w: "354px",
                h: "100%"
            } : {})}
        >
            <Flex alignSelf="start">
                <SkeletonCircle 
                    width="100px"
                    height="100px"
                    borderRadius="50%"
                    objectFit="cover"
                    mb="10px"
                    as={Avatar}
                />
                <Flex
                    flexDir="column"
                    align="start"
                    pl="1em"
                >
                    <SkeletonText w="200px" mt="4" noOfLines={1} />
                    <SkeletonText w="150px" mt="4" noOfLines={1}/>
                    <SkeletonText  w="75px" mt="8"noOfLines={1}/>
                </Flex>
            </Flex>
        </Flex>
    ))   


    return <>
        {responsiveGridView && gridView ? (
            <Grid gridTemplateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
                xl: "repeat(4, 1fr)"
            }} gap="1.5em" >
                {loading ? nullSpeakers : filteredSpeakers?.length ? filteredSpeakers?.slice(0, sliceIndex).map((speaker, i) => (
                    <LinkBox><LinkOverlay href={`/instructor/${speaker.slug?.current}`}>
                        <Flex
                            key={i}
                            flexDir="column"
                            align="center"
                            boxShadow="0 0 0 1px #e8e8e8"
                            p="1em"
                            // width="280px"
                            borderRadius="15px"
                            justify="space-between"
                            w="354px"
                            h="100%"
                            as={motion.div} initial={{ opacity: 0}} whileInView={{opacity: 1}} transition={{ delay: 1 }}
                        >
                            <Flex alignSelf="start">
                                <Image
                                    src={speaker.image ? urlFor(speaker.image).toString() : ""}
                                    alt="instructor"
                                    width="100px"
                                    height="100px"
                                    borderRadius="50%"
                                    objectFit="cover"
                                    mb="10px"
                                    as={Avatar}
                                />

                                <Flex
                                    flexDir="column"
                                    align="start"
                                    pl="1em"
                                >
                                    <Heading fontSize="16px" w="80%" fontWeight="medium">{speaker.name}</Heading>
                                    <Text fontSize="14px" w="80%" color="gray">{speaker.position}</Text>
                                    <Text fontSize="14px" color="gray">{speaker.organization}</Text>
                                    <Flex
                                        flexWrap="wrap"
                                        width="250px"
                                        gap="5px"
                                        justify="center"
                                    >
                                        {speaker.tags?.map((tag, idx) => (
                                            <Flex
                                                key={idx}
                                                px="0.65em"
                                                color="white"
                                                justify="center"
                                                bg="grey"
                                                borderRadius="15px"
                                                fontSize="14px"
                                            >
                                                {tag}
                                            </Flex>
                                        ))}
                                    </Flex>
                                        <Link href={`/instructor/${speaker.slug?.current}`} variant="textButton" _hover={{textDecor: "none"}}>
                                            View Profile
                                        </Link>
                                </Flex>
                            </Flex>
                        </Flex>
                    </LinkOverlay></LinkBox>
                )) : 'No Results Found'}
            </Grid>
        ) : (
            <Flex flexDir="column" gap="1em" maxW={{ base: "90vw", md: "100%"}}>
                {loading ? nullSpeakers : filteredSpeakers?.length && filteredSpeakers.slice(0, sliceIndex).map((speaker, idx) => {
                    return (
                        <LinkBox><LinkOverlay href={`/instructor/${speaker.slug?.current}`}>
                            <Flex
                                key={idx}
                                align="center"
                                boxShadow="0 0 0 1px #e1e1e1"
                                px="1em"
                                py="1em"
                                borderRadius="15px"
                                as={motion.div} initial={{ opacity: 0}} whileInView={{opacity: 1}}
                            >
                                <Image
                                    src={speaker.image ? urlFor(speaker.image).toString() : ""}
                                    alt="instructor"
                                    width="100px"
                                    height="100px"
                                    maxWidth="200px"
                                    maxHeight="200px"
                                    borderRadius="50%"
                                    objectFit="cover"
                                    mb="10px"
                                    mr="1em"
                                    as={Avatar}
                                />
                                <Flex flexDir="column" gap="1em" alignSelf="start" mt="0.5em">
                                    <Heading fontSize="16px" fontWeight="medium">{speaker.name}</Heading>
                                    <Flex flexDir="column" gap="0.25em" color="gray">
                                        <Text fontSize="14px" >{speaker.position}</Text>
                                        <Text fontSize="14px">{speaker.organization}</Text>
                                    </Flex>
                                </Flex>
                                {speaker.tags?.map((tag, idx) => (
                                <Flex
                                    flexWrap="wrap"
                                    width="250px"
                                    gap="5px"
                                    justify="center"
                                >
                                    
                                        <Flex
                                            key={idx}
                                            px="0.65em"
                                            color="white"
                                            justify="center"
                                            bg="grey"
                                            borderRadius="15px"
                                            fontSize="14px"
                                        >
                                            {tag}
                                        </Flex>
                                </Flex>
                                ))}
                                <Show above="lg">
                                    <Link ml="auto" href={`/instructor/${speaker.slug?.current}`} _hover={{textDecor: "none"}}>
                                        <Button>View Profile</Button>
                                    </Link>
                                </Show>
                            </Flex>
                        </LinkOverlay></LinkBox>
                    )
                })}
            </Flex>
        )}
        {sliceIndex < filteredSpeakers.length && (
            <Button mt="2em" variant="outline" onClick={() => setSliceIndex(undefined)}>Load More</Button>
        )}
    </>
}

export default View