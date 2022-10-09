import React from 'react'
import { Flex, Heading, Text, Box, Button } from '@chakra-ui/react'

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
                mt={{ base: "50px", lg: "100px" }}
                mb={{ base: "25px", lg: "50px" }}
                pb="2.5em"
                flexDir="column"
                rowGap="2em"
                align="start"
                textAlign="start"
                color="white"
                mx="auto"
                position="relative"
            >
                {/* <Image src={Logo} opacity="0.6" w="600px" mt="3em" position="absolute" right="0" top="50px" /> */}
                <Heading
                    maxW={{ base: "500px", md: "700px", lg: "1000px" }}
                    wordBreak="break-word"
                >
                    <Text
                        color="#F6BB43"
                        fontSize={{ base: "1.75rem", md: "2.75rem", lg: "3.5rem" }}
                        fontWeight="medium"
                    >
                        Join our events
                    </Text>
                    <Text
                        fontSize={{ base: "2.5rem", md: "5rem", lg: "6rem" }}
                        lineHeight={{ base: "40px", md: "80px", lg: "92px" }}
                        fontWeight={{ base: "semibold", lg: "bold" }}
                        letterSpacing={-2}
                    >
                        featuring leading industry experts
                    </Text>
                </Heading>
                <Text
                    fontSize={{ base: "1rem", lg: "1.5rem" }}
                    wordBreak="break-word"
                    maxW={{ base: "400px", lg: "600px" }}
                    lineHeight={1.25}
                >
                    We aim to give our members the most enriching lectures with Oil & Gas top experts
                </Text>

                <Button size={{ base: "md", lg: "huge" }} px="3em" borderRadius="32px" color="black">
                    Be a member
                </Button>
                <Flex
                    mt="0em"
                    columnGap={{ base: "2.5em", lg: "5em" }}
                    fontWeight="semibold"
                    alignSelf={{ base: "start", lg: "center" }}
                    textAlign="center"
                >
                    <Flex flexDir="column">
                        <Text fontSize={{ base: "1.5rem", lg: "2.75rem" }} fontWeight="medium">100</Text>
                        <Text fontSize="1rem" fontWeight="normal">Lectures</Text>
                    </Flex>
                    <Flex flexDir="column">
                        <Text fontSize={{ base: "1.5rem", lg: "2.75rem" }} fontWeight="medium">1000+</Text>
                        <Text fontSize="1rem" fontWeight="normal">Members</Text>
                    </Flex>
                    <Flex flexDir="column">
                        <Text fontSize={{ base: "1.5rem", lg: "2.75rem" }} fontWeight="medium">1+</Text>
                        <Text fontSize="1rem" fontWeight="normal">Year</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Hero