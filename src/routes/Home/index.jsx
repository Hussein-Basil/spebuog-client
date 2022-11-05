import React from 'react'
import { Flex, Heading, Text, Button, Link } from '@chakra-ui/react'
import About from './About'
import Upcoming from './Upcoming'
import Courses from './Courses'
import Layout from '../../components/Layout'
import Hero from './Hero'
import CompaniesProof from './CompaniesProof'
import NumbersProof from './NumbersProof'


const Home = () => {
    return (
        <Flex
            flexDir="column"
            w="100vw"
        >
            <Hero />
            <Layout pt="0" position="relative" gap="0" pb="0">
                <CompaniesProof />
                <About />
                <Upcoming />
                <Courses />
                <Flex w="100vw" bg="#F6BB43" py="4em" align="center" justify="center"  flexDir="column" gap="1em">
                    <Heading fontSize={{ base: "1.75rem", lg: "2.25rem" }} textAlign="center">Don't be hesitated to contact us</Heading>
                    <Text fontSize={{ base: "16px", lg: "18px" }} fontWeight="medium">Be sure to follow us for new events</Text>
                    <Link href="/contact" _hover={{ textDecoration: "none" }}>
                        <Button
                            bg="#0d4c94"
                            borderRadius="10px"
                            w="150px"
                            mt="1em"
                        >Contact
                        </Button>
                    </Link>
                </Flex>
            </Layout>
        </Flex>
    )
}

export default Home