import React from 'react'
import { Flex, Heading, Text, Button, Link } from '@chakra-ui/react'
import About from '../features/homepage/components/About'
import Features from '../features/homepage/components/Features'
import Courses from '../features/homepage/components/Courses'
import Layout from '../layouts/Layout'
import Hero from '../features/homepage/components/Hero'
import CompaniesProof from '../features/homepage/components/CompaniesProof'


const Home = () => {
    return (
        <Flex
            flexDir="column"
            w="100vw"
        >
            <Hero />
            <Layout pt="0" position="relative" gap="0" pb="0">
                <About />
                <Features />
                <CompaniesProof />
                <Courses />
                <Flex w="100vw" bg="#F6BB43" py="4em" align="center" justify="center"  flexDir="column">
                    <Heading 
                        fontSize={{ base: "32px", lg: "42px" }} 
                        fontWeight="medium"
                        textAlign="center"
                    >
                        Don't be hesitated to contact us
                    </Heading>
                    <Text mt="1em" fontSize={{ base: "16px", lg: "18px" }} fontWeight="medium">Be sure to follow us for new events</Text>
                    <Link href="/contact" _hover={{ textDecoration: "none" }}>
                        <Button
                            bg="#0d4c94"
                            borderRadius="10px"
                            px="2em"
                            mt="1em"
                            size="lg"
                        >Contact
                        </Button>
                    </Link>
                </Flex>
            </Layout>
        </Flex>
    )
}

export default Home