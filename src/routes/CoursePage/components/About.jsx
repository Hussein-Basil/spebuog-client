import React from 'react'
import { Flex, Heading, SkeletonText, Text } from '@chakra-ui/react'

const About = ({ course }) => {

    if (!course?.title) {
        return (
            <Flex flexDir={{ base: "column", lg: "row" }} gap={{ base: "2em", lg: "0" }} id="about">
            <Flex flexDir="column" gap="2em" w={{ base: "100%", lg: "500px", xl: "600px"}}>
                <Heading fontSize="24px" fontWeight="medium">About this course</Heading>
                <SkeletonText noOfLines={6} w="100%" />
                <Heading fontSize="24px" fontWeight="medium">What you'll learn</Heading>
                <SkeletonText noOfLines={6} w="100%"/>
            </Flex>
            <Flex flexDir="column" align="start" w="fit-content" ml={{ base: "0", lg: "200px" }} gap="2em">
                <Heading fontSize="24px" fontWeight="medium">Who this course is for</Heading>
                <SkeletonText noOfLines={6}  w={{ base: "100%", lg: "350px", xl: "600px"}}/>
            </Flex>
        </Flex>
        )
    }

    else return (
        <Flex flexDir={{ base: "column", lg: "row" }} gap={{ base: "2em", lg: "0" }} id="about">
            <Flex flexDir="column" gap="2em">
                <Heading fontSize="24px" fontWeight="medium">About this course</Heading>
                <Text maxW="800px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan elementum sapien. Praesent sed varius purus. In hac habitasse platea dictumst.
                    Vivamus vel sodales enim, a vehicula mi. Quisque odio ex, viverra eu metus quis, bibendum molestie risus. Curabitur et pulvinar quam. Donec a purus tortor.
                    In volutpat vehicula quam id rutrum.
                </Text>
                <Heading fontSize="24px" fontWeight="medium">What you'll learn</Heading>
                <Text maxW="800px">
                    - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan elementum sapien. Praesent sed varius purus. In hac habitasse platea dictumst.<br /><br />
                    - Vivamus vel sodales enim, a vehicula mi. Quisque odio ex, viverra eu metus quis, bibendum      molestie risus. Curabitur et pulvinar quam. Donec a purus tortor.<br /><br />
                    - In volutpat vehicula quam id rutrum.
                </Text>
            </Flex>
            <Flex flexDir="column" align="start" w="fit-content" ml={{ base: "0", lg: "200px" }} gap="2em">
                <Heading fontSize="24px" fontWeight="medium">Who this course is for</Heading>
                <Text>
                    - Undergraduate students, Recommended for first and second stage<br />
                    - Fresh Graduate<br />
                    - Drilling Engineers<br />
                    - People who want to join Drilling Industry, Geology, Mechanical Engineering, Chemical Engineering
                </Text>
            </Flex>
        </Flex>
    )
}

export default About