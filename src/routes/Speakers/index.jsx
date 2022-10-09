import React from 'react'
import { Flex, Text, Heading, Link, Image, Grid, Avatar } from '@chakra-ui/react'
import { useUser } from '../../auth/UserContext'
import Layout from '../../components/Layout'

const Speakers = () => {
    const { speakers } = useUser()

    if (!speakers || speakers.length === 0) {
        return 'Loading'
    }

    return (
        <Layout gap="3em">
            <Heading>Instructors</Heading>
            <Grid gridTemplateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
            }} gap="3em">
                {speakers.map((speaker, i) => (
                    <Flex
                        key={i}
                        flexDir="column"
                        align="center"
                        boxShadow="0 0 0 1px #c8c8c8"
                        py="1em"
                        width="280px"
                        borderRadius="15px"
                        justify="space-between"
                    >
                        <Flex
                            flexDir="column"
                            align="center"
                            gap="0.5em"
                        >
                            {speaker.image !== '/images/speaker.png' ? (
                                <Image
                                    src={`http://spebuog-dev.vercel.app${speaker.image}`}
                                    alt="instructor"
                                    width="150px"
                                    height="150px"
                                    maxWidth="200px"
                                    maxHeight="200px"
                                    borderRadius="50%"
                                    objectFit="cover"
                                    mb="10px"
                                />) : (
                                <Avatar
                                    width="150px"
                                    height="150px"
                                    maxWidth="200px"
                                    maxHeight="200px"
                                    borderRadius="50%"
                                    objectFit="cover"
                                    mb="10px"
                                />
                            )}
                            <Heading fontSize="16px">{speaker.name}</Heading>
                            <Flex flexDir="column" align="center" mb="1em" textAlign="center" gap="0.25em">
                                <Text fontSize="16px" >{speaker.position}</Text>
                                <Text fontSize="16px">{speaker.organization}</Text>
                            </Flex>
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
                        </Flex>
                        <Link href={`/speaker/${speaker.uid}`} variant="textButton" mt="1em" justifySelf="end">
                            Go to profile
                        </Link>
                    </Flex>
                ))}
            </Grid>
        </Layout>
    )
}

export default Speakers