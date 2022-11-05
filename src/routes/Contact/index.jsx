import React from 'react'
import {
    Flex, Text, Heading, Image, Input,
    FormLabel, Button, Link, Icon,
    InputGroup, Textarea
} from '@chakra-ui/react'

import { ReactComponent as Facebook } from '../../assets/facebook.svg'
// import { ReactComponent as Telegram } from '../../assets/telegram.svg'
import { ReactComponent as Telegram } from '../../assets/telegram-1.svg'
import { ReactComponent as Instagram } from '../../assets/instagram.svg'
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg'
import ResponsiveWidth from '../../components/ResponsiveWidth'

const Contact = () => {
    return (
        <ResponsiveWidth>
            <Flex
                px="20px"
                gap="3em"
                my="3em"
                flexDir={{ base: "column", lg: "row"}}
            >
                <Flex flexDir="column" gap="1em">
                    <Heading>Get in touch</Heading>
                    <Text w="350px">Want to get in touch? We'd love to hear from you. Here's how you can reach us...</Text>
                    <Flex columnGap="20px" mt="2em">
                        <Link href="https://fb.me/spebuog" target="_blank"><Icon as={Facebook} w="40px" h="40px" /></Link>
                        <Link href="https://www.instagram.com/spebuog" target="_blank"><Icon as={Instagram} w="40px" h="40px" fill="black" /></Link>
                        <Link href="https://www.linkedin.com/company/buog-spe-student-chapter" target="_blank"><Icon as={Linkedin} w="40px" h="40px" fill="black" /></Link>
                        <Link href="https://t.me/SPEBUOG" target="_blank"><Icon as={Telegram} w="40px" h="40px" fill="black" /></Link>
                        
                    </Flex>
                </Flex>
                <form>
                    <Flex flexDir="column" gap="1em" w={{ base: "100%", lg: "500px"}}>
                        <InputGroup as="flex" flexDir="column">
                            <FormLabel>Name</FormLabel>
                            <Input placeholder="Enter your name"  />
                        </InputGroup>
                        <InputGroup as="flex" flexDir="column">
                            <FormLabel>Message</FormLabel>
                            <Textarea placeholder="Enter your message" />
                        </InputGroup>
                        <Button type="submit" w="110px" size="md">
                            Submit
                        </Button>
                    </Flex>
                </form>
            </Flex>
        </ResponsiveWidth>

    )
}

export default Contact