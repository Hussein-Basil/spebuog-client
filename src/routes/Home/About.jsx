import React from 'react'
import { Flex, Heading, Icon, Image, Text, Show, Link, Button, LinkOverlay, LinkBox } from '@chakra-ui/react'
import Logo from '../../assets/spe-logo-2020.png'
import { GiOilPump } from 'react-icons/gi'
import { BsPeopleFill } from 'react-icons/bs'
import { FaHandsHelping } from 'react-icons/fa'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <Flex flexDir="column" w={{
            base: '90%',
            md: '768px',
            lg: '1024px',
            xl: '1440px',
            '2xl': '1500px',
        }} mx="auto" gap={{ base: "4em", lg: "5em" }} align="center" mb="4em">
            {/* Content Section */}
                <Flex 
                    
                    justify="end" 
                    gap="5em" 
                    flexDir={{ base: 'column', lg: 'row' }}
                >
                    {/* <iframe width="1000" height="517" src="https://www.youtube-nocookie.com/embed/NXz5wCl8GtU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe> */}
                    <Flex 
                        as={motion.div}
                        initial={{  x: -300 }}
                        whileInView={{ x: 0}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        flexDir="column" 
                        align="start"
                    >
                        <Text color="#0D4C94" fontWeight="semibold" fontSize="20px"><Link href="/about">About us</Link></Text>
                        <Heading fontWeight="medium" fontSize="36px" mb="0.75em">
                            Who We Are
                        </Heading>
                        <Text fontSize="18px" maxW="700px">
                        Student Chapter with more than 1000 member, managed by students from Basrah University of Oil and Gas passionate about the oil and gas engineering, we aspire with support from our university to provide help and benefit to our students as well as anyone interested in the oil and gas industry
                        </Text>
                        <LinkBox><LinkOverlay href="/about"><Button textTransform="none" mt="1em" color="white" fontWeight="semibold">Discover More</Button></LinkOverlay></LinkBox>
                    </Flex>
                    <Show above="lg">
                        <motion.div initial={{ x: 200}} whileInView={{ x: 0}} viewport={{ once: true }}>
                        <Image 
                            src={Logo} 
                            h={{ base: "100px", lg: "234px" }} 
                            objectFit="contain" 
                            mt="2em" 
                        />
                        </motion.div>
                    </Show>
                </Flex>
            {/* Features Section */}
            <motion.div
                
                // whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <Flex flexDir="column" align="center">
                    <Heading fontWeight="medium" fontSize="28px">What We Offer</Heading>
                    <Text>Because we are the best</Text>
                    <Flex gap="1.5em" mt="2em" flexDir={{ base: 'column', lg: 'row' }}>
                        <Flex 
                            as={motion.div}
                            whileHover={{scale: 1.1}}
                            initial={{  x: -200 }}
                            whileInView={{ x: 0}}
                            viewport={{ once: true }}
                            flexDir={{ base: "row", lg: "column"}}
                            gap={{ base: "1em", lg: "0.5em"}}
                            textAlign="center" 
                            align="center" 
                            maxW={{ base: "unset", lg: "250px"}}
                            border="1px solid lightgray"
                            borderRadius="10px"
                            px="1em"
                            py="1.5em"
                        >
                            <Icon as={BsPeopleFill} h="90px" w="90px" color="#0D4C94" />
                            <Flex flexDir="column" textAlign={{ base: "left", lg: "center"}}>
                                <Text fontSize="22px" fontWeight="medium">Leadership Environment</Text>
                                <Text fontSize="16px">Volunteering for building experience and self development</Text>
                            </Flex>
                        </Flex>
                        <Flex 
                            as={motion.div}
                            whileHover={{scale: 1.1}}
                            initial={{  x: -200 }}
                            whileInView={{ x: 0}}
                            viewport={{ once: true}}
                            flexDir={{ base: "row", lg: "column"}}
                            gap={{ base: "1em", lg: "0.5em"}}
                            textAlign="center" 
                            align="center" 
                            maxW={{ base: "unset", lg: "250px"}}
                            border="1px solid lightgray"
                            borderRadius="10px"
                            px="1em"
                            py="1.5em"
                        >
                            <Icon as={GiOilPump} h="90px" w="90px" color="#0D4C94" />
                            <Flex flexDir="column" textAlign={{ base: "left", lg: "center"}}>
                            <Text fontSize="22px" fontWeight="medium">Scientific Events</Text>
                            <Text fontSize="16px">Organizing internships, courses and seminars on oil industry topics</Text>
                            </Flex>
                        </Flex>
                        <Flex 
                            as={motion.div}
                            whileHover={{scale: 1.1}}
                            initial={{  x: -200 }}
                            whileInView={{ x: 0}}
                            viewport={{ once: true }}
                            flexDir={{ base: "row", lg: "column"}}
                            gap={{ base: "1em", lg: "0.5em"}}
                            textAlign="center" 
                            align="center" 
                            maxW={{ base: "unset", lg: "250px"}}
                            border="1px solid lightgray"
                            borderRadius="10px"
                            px="1em"
                            py="1.5em"
                        >
                            <Icon as={FaHandsHelping} h="90px" w="90px" color="#0D4C94" />
                            <Flex flexDir="column" textAlign={{ base: "left", lg: "center"}}>
                                <Text fontSize="22px" fontWeight="medium">Community Involvement</Text>
                                <Text fontSize="16px">Helping community, organizaing annual charity bazaars</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </motion.div>
        </Flex>
    )
}

export default About