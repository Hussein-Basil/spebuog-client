import React from 'react'
import { Flex, Heading, Grid, SkeletonText, Text } from '@chakra-ui/react'
import { PortableText } from '@portabletext/react'

const About = ({ 
    description,
    target,
    agenda, 
    loading 
}) => {
    if (loading) {
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

    else if (description || agenda || target) {
        return (
            <Flex flexDir={{ base: "column", lg: "row" }} gap={{ base: "2em", lg: "0" }} id="about">
                <Grid gridTemplateColumns={{ base: "1fr", lg: "1.25fr 0.75fr"}} flexDir="column" gap="2em" align="start" justify="start">
                    {description && 
                    <Flex flexDir="column" gap="2em">
                        <Heading fontSize="24px" fontWeight="medium">About this course</Heading>
                        <Text maxW="800px">{description}</Text>
                    </Flex>}
                    {target &&
                    <Flex flexDir="column" align="start" w="fit-content" gap="2em">
                        <Heading fontSize="24px" fontWeight="medium">Who this course is for</Heading>
                        <PortableText value={target} />
                    </Flex>}
                    {agenda && 
                    <Flex flexDir="column" gap="2em">
                        <Heading fontSize="24px" fontWeight="medium">What you'll learn</Heading>
                        <PortableText value={agenda} />
                    </Flex>}
                </Grid>
            </Flex>
        )
    } else return ''
}

export default About