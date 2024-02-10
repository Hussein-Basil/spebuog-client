import React, { useState } from 'react'
import {
    Flex, Text, Heading, Input,
    Button, Link, Icon,
    InputGroup, InputRightElement, Box
} from '@chakra-ui/react'

import Facebook from "../assets/social/facebook.svg";
import Telegram from "../assets/social/telegram-1.svg";
import Linkedin from "../assets/social/linkedin.svg";
import Instagram from "../assets/social/instagram.svg";
import ResponsiveWidth from "../layouts/ResponsiveWidth";

const Contact = () => {
    const [buttonText, setButtonText] = useState('Subscribe')
    const [subscriber, setSubscriber] = useState('')
    return (
        <ResponsiveWidth>
            <Flex
                px="20px"
                mt={{ base: "3em", lg: "4em" }}
                mb="3em"
                gap={{ base: "3em", lg: "6em" }}
                flexDir={{ base: "column", lg: "row"}}
            >
                <Flex 
                    flexDir="column"
                    gap="3em"
                >
                    <Flex flexDir="column" gap="1em">
                        <Heading color="primary.500">Get in touch</Heading>
                        <Text w="350px">Want to get in touch? We'd love to hear from you. Here's how you can reach us...</Text>
                        <Link href="mailto:buog.spe.chapter@gmail.com" fontSize="18px" color="primary.500">buog.spe.chapter@gmail.com</Link>
                        <Text >or via Telegram Bot <Link fontSize="18px" href="https://t.me/BUOG_SPE_bot" target="_blank"  color="primary.500">@BUOG_SPE_bot</Link></Text>
                    </Flex>
                    <Flex flexDir="column" gap="1em">
                        <Heading color="primary.500">Social Media Links</Heading>
                        <Text fontSize="16px">Be sure to follow us on other platforms</Text>
                        {/* Section for social media links */}
                        <Flex mt={1} gap={3}>
                            {/* Link to the Facebook page */}
                            <a href="https://www.facebook.com/spebuog">
                            <img src={Facebook} alt="Facebook Page" width={40} />
                            </a>
                            {/* Link to the Instagram account */}
                            <a href="https://www.instagram.com/spebuog" >
                            <img src={Instagram} alt="Instagram Account" width={40} />
                            </a>
                            {/* Link to the Telegram channel */}
                            <a href="https://t.me/SPEBUOG" >
                            <img src={Telegram} alt="Telegram Channel" width={40} />
                            </a>
                            {/* Link to the LinkedIn page */}
                            <a
                            href="https://www.linkedin.com/company/buog-spe-student-chapter"
                            >
                            <img src={Linkedin} alt="Linkedin Page" width={40} />
                            </a>
                        </Flex>
                </Flex>
                </Flex>
                <Flex flexDir="column" gap="1em" fontSize="18px">
                <Heading color="primary.500">Subscribe to News</Heading>
                    <Text maxW="350px">
                        Subscribe to our newsletter and be the first to know about new courses and events.
                    </Text>
                    <InputGroup mt="1em" p="0" display="flex" justify="space-between" position="relative">
                        <Input placeholder="Enter your email" bg="#f1f1f1" border="1px solid white" value={subscriber} onChange={e => setSubscriber(e.target.value)} />
                        <InputRightElement   >
                            <Button minW="100px" h="40px" position="absolute" right="0" px="1em" color="black" borderLeftRadius="0" onClick={() => {
                                if (subscriber && buttonText === 'Subscribe') {
                                    setButtonText('Wait..')
                                    fetch('https://spebuog-dev.netlify.app/.netlify/functions/api/event/newsletter', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({
                                            subscriber
                                        })
                                    })
                                    .then(res => {
                                        if (res.ok) {
                                            setButtonText('Sent!')
                                            setTimeout(() => setButtonText('Subscribe'), 3000)
                                        }
                                    })
                                    .catch(() => {
                                        setButtonText('Error!')
                                        setTimeout(() => setButtonText('Subscribe'), 3000)
                                    })
                                }
                            }}>{buttonText}</Button>
                        </InputRightElement>
                    </InputGroup>
                </Flex>
                {/* <form>
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
                </form> */}
            </Flex>
        </ResponsiveWidth>

    )
}

export default Contact