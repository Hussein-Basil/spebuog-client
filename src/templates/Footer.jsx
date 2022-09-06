import React from 'react'
import { Text, Flex, Heading, Link, Icon } from '@chakra-ui/react'
import { ReactComponent as Facebook } from '../assets/facebook.svg'
import { ReactComponent as Telegram } from '../assets/telegram-1.svg'
import { ReactComponent as Instagram } from '../assets/instagram.svg'
import { ReactComponent as Linkedin } from '../assets/linkedin.svg'

import { Link as RouterLink } from 'react-router-dom'

const Footer = () => {
    return (
        <Flex
            flexDir="column"
            mt="2em"
            py="4em"
            bg="primary.500"
            color="white"
        >
            {/* Site Map */}
            <Flex w={{
                sm: "320px",
                md: "768px",
                lg: "1024px",
                xl: "1000px",
            }} mx="auto" flexDir="column" rowGap="45px">
                <Flex justifyContent="space-between">
                    <Flex flexDir="column" rowGap="5px">
                        <Heading as="h3" size="md" mb="10px">LOCATION</Heading>
                        <Text>
                            Basrah, Iraq
                        </Text>
                    </Flex>

                    <Flex flexDir="column" rowGap="5px">
                        <Heading as="h3" size="md" mb="10px">HELP</Heading>
                        <RouterLink to="/privacy-terms">Privacy terms</RouterLink>
                        <RouterLink to="/faq">FAQ</RouterLink>
                    </Flex>
                </Flex>
                <Flex justifyContent="space-between">
                    {/* Social Links */}
                    <Flex flexDir="column" rowGap="20px">
                        <Heading as="h3" size="md">Follow us</Heading>
                        <Flex columnGap="20px">
                            <Link href="https://fb.com/spebuog"><Icon as={Facebook} w="40px" h="40px" fill="white" /></Link>
                            <Link href="https://www.instagram.com/spebuog"><Icon as={Instagram} w="40px" h="40px" /></Link>
                            <Link href="https://t.me/SPEBUOG"><Icon as={Telegram} w="40px" h="40px" fill="white" /></Link>
                            <Link href="https://www.linkedin.com/company/buog-spe-student-chapter"><Icon as={Linkedin} w="40px" h="40px" fill="white" /></Link>
                        </Flex>
                    </Flex>
                    {/* Contact Info*/}
                    <Flex flexDir="column" rowGap="5px">
                        <Heading as="h3" size="md" mb="10px">Contact</Heading>
                        <Link href="mailto:buog.spe.chapter@gmail.com">📧 buog.spe.chapter@gmail.com</Link>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Footer