import React, { useState } from 'react'
import { Text, Flex, Heading, Link, Icon, Image, Input, Button, InputGroup, InputRightElement, Show, Hide } from '@chakra-ui/react'
import { ReactComponent as Facebook } from '../assets/facebook.svg'
import { ReactComponent as Telegram } from '../assets/telegram-1.svg'
import { ReactComponent as Instagram } from '../assets/instagram.svg'
import { ReactComponent as Linkedin } from '../assets/linkedin.svg'

import Logo from '../assets/spe-logo-2020.png'

const Footer = () => {
    const [buttonText, setButtonText] = useState('Subscribe')
    const [subscriber, setSubscriber] = useState('')
    return (
        <Flex
            flexDir="column"
            py="4em"
            bg="#002A59"
            color="white"
        >
            {/* Site Map */}
            <Flex w={{
                base: '100%',
                md: '768px',
                lg: '1024px',
                xl: '1440px',
                '2xl': '1500px',
            }} mx="auto" flexDir="column" rowGap="45px">
                <Flex justifyContent="space-evenly" align="start" flexDir="row" gap="1em">
                    {/* Social Links */}
                    <Show above="lg">
                        <Flex flexDir="column" rowGap="20px">
                            <Image src={Logo} h="auto" w="108px" />
                            <Text w="275px">
                                <Text
                                    color="#F6BB43"
                                    display="inline-block"
                                    fontWeight="medium"
                                >
                                    SPE BUOG
                                </Text> - We strive to make our members the most distinguished in oil and gas worldwide.
                            </Text>
                            <Flex columnGap="20px">
                                <Link href="https://fb.com/spebuog"><Icon as={Facebook} w="40px" h="40px" fill="white" /></Link>
                                <Link href="https://www.instagram.com/spebuog"><Icon as={Instagram} w="40px" h="40px" fill="white" /></Link>
                                <Link href="https://t.me/SPEBUOG"><Icon as={Telegram} w="40px" h="40px" fill="white" /></Link>
                                <Link href="https://www.linkedin.com/company/buog-spe-student-chapter"><Icon as={Linkedin} w="40px" h="40px" fill="white" /></Link>
                            </Flex>
                        </Flex>
                    </Show>
                    {/* Contact Info*/}
                    <Flex flexDir="column" gap="0.5em" fontSize={{ base: "16px", lg: "18px" }}>
                        <Heading fontSize={{ base: "18px", lg: "20px" }} size="md" mb="10px" color="#F6BB43" fontWeight="medium">MENU</Heading>
                        <Link href="/about">About</Link>
                        <Link href="/courses">Courses</Link>
                        <Link href="/contact">Contact</Link>
                    </Flex>
                    {/* <Flex flexDir="column" gap="0.5em" fontSize={{ base: "16px", lg: "18px" }}>
                        <Heading fontSize={{ base: "18px", lg: "20px" }} size="md" mb="10px" color="#F6BB43" fontWeight="medium">CONTACTS</Heading>
                        <Link href="mailto:buog.spe.chapter@gmail.com">buog.spe.chapter@gmail.com</Link>
                        <Text><Icon as={MdLocationOn} /> Basrah, Iraq</Text>
                    </Flex> */}
                    <Show above="lg">
                        <Flex flexDir="column" gap="1em" fontSize="18px">
                            <Heading fontSize="20px" size="md" mb="10px" color="#F6BB43" fontWeight="medium">SUBSCRIBE TO NEWS</Heading>
                            <Text maxW="350px">
                                Subscribe to our newsletter and be the first to know about new courses and events.
                            </Text>
                            <InputGroup mt="1em" p="0" display="flex" justify="space-between" position="relative">
                                <Input placeholder="Enter your email" bg="white" border="1px solid white" value={subscriber} onChange={e => setSubscriber(e.target.value)} />
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
                    </Show>
                </Flex>
                <Hide above="lg">
                    <Flex columnGap="20px" alignSelf="center">
                        <Link href="https://fb.com/spebuog"><Icon as={Facebook} w="40px" h="40px" fill="white" /></Link>
                        <Link href="https://www.instagram.com/spebuog"><Icon as={Instagram} w="40px" h="40px" fill="white" /></Link>
                        <Link href="https://t.me/SPEBUOG"><Icon as={Telegram} w="40px" h="40px" fill="white" /></Link>
                        <Link href="https://www.linkedin.com/company/buog-spe-student-chapter"><Icon as={Linkedin} w="40px" h="40px" fill="white" /></Link>
                    </Flex>
                </Hide>
            </Flex>
        </Flex>
    )
}

export default Footer