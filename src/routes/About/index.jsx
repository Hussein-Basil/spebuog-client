import React, { useEffect } from 'react'
import { Heading, Text, Flex, Image, Grid, Show, Icon } from '@chakra-ui/react'
import Logo from '../../assets/spe-logo-2020.png'
import { GiOilPump } from 'react-icons/gi'
import { BsPeopleFill } from 'react-icons/bs'
import { FaHandsHelping } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Team from './Team'
import Achievements from './Achievements'

import ResponsiveWidth from '../../components/ResponsiveWidth'

// import '../Officers/overlay.css'

const About = () => {
    useEffect(() => {
        document.title = 'About Us - SPE BUOG'
    }, [])

    return (
        <ResponsiveWidth mx="auto" gap={{ base: "4em", lg: "8em" }} align="center" my="5em">
            {/* Content Section */}
            <Flex justify="end" gap="5em" flexDir={{ base: 'column', lg: 'row' }} px="2em">
                <Flex flexDir="column" gap="2.5em">
                    <Heading fontWeight="semibold" fontSize="28px">
                        Who We are
                    </Heading>
                    <Text fontSize="18px" maxW="700px">
                    Student Chapter with more than 1000 member, managed by Students from Basrah University of Oil and Gas passionate about the oil and gas engineering, we aspire with support from our university to provide help and benefit to our students as well as anyone interested in the oil and gas industry
                    </Text>
                </Flex>
                <Show above="lg">
                    <Image src={Logo} h={{ base: "100px", lg: "234px" }} objectFit="contain" />
                </Show>
            </Flex>
            <Flex flexDir="column" gap="2.5em" alignSelf="center">
                <Heading fontWeight="semibold" fontSize="28px">
                    Our Mission
                </Heading>
                <Text fontSize="18px" maxW="700px">
                    Presenting several seminars on our campus by experts in the oil and gas Industry , as well as Online workshops, training courses, software, webinars presented by specialists instructors in the oil and gas industry from over Iraq and the world.  Furthermore our goal is to improve the Technical and not technical skills of students. However, We believe that through helping them to enhance their personal skills (as leadership and communication and time management)  And their technical skills (as computer's programs and writing Emails ), We can help them for increasing their employment capabilities.We are also supportive the role of women in the oil industry By inviting professional and accomplished women in the industry presented seminars How they being to support and develop the role of women. Hold many competitions among our chapter's members (Or even by cooperate with other chapters in Iraq)، We didn't stop that far,  we also Making  field trips to the oil and gas international Companies as Schlumberger, Halliburton, weatherford and other companies that work in oil and gas industry
                </Text>
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
                            transition={{ duration: 2, type: "tween" }}
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
                            transition={{ duration: 2, type: "tween" }}
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
                            transition={{ duration: 2, type: "tween" }}
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
            {/* Team Section */}
            <Team />
            <Achievements />
        </ResponsiveWidth>
    )
}

export default About