import React from 'react'
import { Flex, Heading, Text, Box, Button, Show, Hide, Link, LinkBox, LinkOverlay } from '@chakra-ui/react'
import NumbersProof from './NumbersProof'
import ResponsiveWidth from '../../components/ResponsiveWidth'

const Hero = () => {
    return (
        <Box bg="#0D4C94">
            <Flex
                w={{
                    base: '90%',
                    md: '768px',
                    lg: '1024px',
                    xl: '1440px',
                    '2xl': '1500px',
                }}
                mt={{ base: "50px", xl: "100px" }}
                mb={{ base: "25px", lg: "50px" }}
                pb="2.5em"
                mx="auto"
                flexDir={{ base: "column", lg: "row"}}
                gap="2em"
            >
                
            <Flex
                flexDir="column"
                rowGap="2em"
                align="start"
                textAlign="start"
                color="white"
                position="relative"
                maxW={{ base: "unset", lg: "580px", xl: "unset"}}
            >
                <Heading
                    maxW={{ base: "500px", md: "700px", lg: "1000px" }}
                    wordBreak="break-word"
                >
                    <Text
                        color="#F6BB43"
                        fontSize={{ base: "1.75rem", md: "2.75rem", lg: "44px" }}
                        fontWeight="medium"
                    >
                        Join our events
                    </Text>
                    <Text
                        fontSize={{ base: "4rem", md: "5rem", lg: "58px",xl: "6rem" }}
                        lineHeight={{ base: "4rem", md: "80px", lg: "62px", xl: "92px" }}
                        fontWeight={{ base: "semibold", lg: "bold" }}
                        letterSpacing={-2}
                    >
                        featuring leading industry experts
                    </Text>
                </Heading>
                <Text
                    // fontSize={{ base: "1rem", lg: "1.5rem" }}
                    fontSize="20px"
                    wordBreak="break-word"
                    width="90%"
                    maxW={{ base: "400px", lg: "600px" }}
                    lineHeight={1.25}
                    
                >
                    We aim to give our members the most enriching lectures with Oil & Gas top experts
                </Text>
                <Flex gap="1em">
                    <LinkBox>
                    <LinkOverlay href="/courses">
                        <Button 
                            // size={{ base: "md", lg: "huge" }} 
                            px={{ base: "1em", md: "1.5em" }}
                            borderRadius="10px" 
                            color="black"
                            fontSize={{ base: "16px", xl: "20px"}}
                            textTransform="none"
                            height="52px"
                            >
                           Explore Events
                        </Button>
                    </LinkOverlay>
                    </LinkBox>
                    <LinkBox>
                    <LinkOverlay href="/membership">
                        <Button 
                            px={{ base: "1em", md: "1.5em" }}
                            borderRadius="10px" 
                            bg="none" 
                            color="gold"
                            border="1.5px solid gold"
                            fontSize={{ base: "16px", xl: "20px"}}
                            textTransform="none"
                            height="52px"
                        >
                            Become Member
                        </Button>
                    </LinkOverlay>
                    </LinkBox>
                </Flex>
                </Flex>
                {/* <Show above="xl">
                    <iframe
                        width="700"
                        height="370"
                        style={{ background: 'none', alignSelf: 'center' }}
                        src={'https://www.youtube.com/embed/NXz5wCl8GtU'}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    />
                </Show> */}
                {/* <Hide above="xl">
                <iframe
                    height="317"
                    width="100%"
                    style={{ background: 'none', alignSelf: 'center' }}
                    src={'https://www.youtube.com/embed/NXz5wCl8GtU'}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                />
                </Hide> */}
            </Flex>
            <NumbersProof />
        </Box>
    )
}

export default Hero