import React from 'react'
import { Flex, Heading, Text, HStack, Box, Button, Image } from '@chakra-ui/react'
import Benefits from './Benefits'
import Events from './Events'
import Photos from './Photos'

const Home = () => {
    return (
        <Flex
            flexDir="column"
            gap="5em"
            pb="20px"
        >
            <Flex
                flexDir="column"
                rowGap="2em"
                py="100px"
                align="center"
                bg="#0D4C94"
                textAlign="center"
                color="white"
            >
                <Heading
                    w="1000px"
                    fontSize="96px"
                    fontWeight="bold"
                    lineHeight="92px"
                    letterSpacing={-3}
                >
                    Join our events featuring leading industry experts
                </Heading>
                <Text fontSize="24px">
                    We aim to give our members the most enriching <br />lectures with Oil & Gas top experts
                </Text>
                <Flex columnGap="5em" fontWeight="semibold">
                    <Flex flexDir="column">
                        <Text fontSize="28px" fontWeight="medium">50</Text>
                        <Text fontSize="14px" fontWeight="normal">Lectures</Text>
                    </Flex>
                    <Flex flexDir="column">
                        <Text fontSize="28px" fontWeight="medium">800+</Text>
                        <Text fontSize="14px" fontWeight="normal">Members</Text>
                    </Flex>
                    <Flex flexDir="column">
                        <Text fontSize="28px" fontWeight="medium">1+</Text>
                        <Text fontSize="14px" fontWeight="normal">Year</Text>
                    </Flex>
                </Flex>

                <Button w="200px" borderRadius="10px" color="black">
                    JOIN OUR CHAPTER
                </Button>
            </Flex>
            <Benefits />
            <Events />
            <Photos />
        </Flex >
    )
}

export default Home