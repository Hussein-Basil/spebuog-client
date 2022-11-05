import React from 'react'
import { Flex, Grid, Text, Image, Avatar, Heading, Link } from '@chakra-ui/react'

const Speakers = ({ speakers }) => {
    return (
        <Flex flexDir="column" gap="2em" mt="2em" id="instructors">
            <Heading fontSize="24px" fontWeight="medium">Instructor{'s' && speakers.length > 1 }</Heading>
            <Grid gap={{ base: "2em", lg: "5em" }} gridTemplateColumns={{
                base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr"
            }} >
                {
                    speakers.map(speaker => (
                        <Flex align="center" gap="1em" maxW="450px">
                            <Image
                                src={`https://spebuog-dev.vercel.app/images/${speaker.image}`}
                                as={Avatar}
                                w={{ base: "100px", lg: "130px" }}
                                h={{ base: "100px", lg: "130px" }}
                                borderRadius="50%"
                                objectFit="cover" />
                            <Flex flexDir="column">
                                <Link href={`/speaker/${speaker.uid}`} fontSize="18px" fontWeight="medium">{speaker.name}</Link>
                                <Text fontSize="16px">{speaker.position}</Text>
                                <Text fontSize="16px">{speaker.organization}</Text>
                            </Flex>
                        </Flex>
                    ))
                }
            </Grid>
        </Flex>
    )
}

export default Speakers