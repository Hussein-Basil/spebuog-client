import React, { useEffect } from 'react'
import { Heading, Text, Flex, Image, Grid, Show, Icon } from '@chakra-ui/react'
import Logo from '../../assets/SPE-logo.png'
import { GiOilPump } from 'react-icons/gi'
import { BsPeopleFill } from 'react-icons/bs'
import { FaHandsHelping } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Team from './Team'
import Achievements from './Achievements'

import vision from '../../assets/vision.svg'
import { ReactComponent as mission } from '../../assets/biometrics.svg'

import ResponsiveWidth from '../../components/ResponsiveWidth'
import AboutBackground from '../../assets/about.png'

// import '../Officers/overlay.css'
import './styles.css'

const About = () => {
    useEffect(() => {
        document.title = 'About Us - SPE BUOG'
    }, [])

    return (
        <Flex w="100%" flexDir="column">
            <Flex bg="#0D4C94" justify="center" position="relative" userSelect="none">
                {/* <Image src={"https://images.slideplayer.com/20/5970310/slides/slide_33.jpg"} minW="100%" maxH="300px" objectFit="contain" /> */}
                <Image src={AboutBackground} minW="100%" objectFit="cover" maxH="420px"  />
                <Heading position="absolute" color="white" top="calc(50%)" fontSize="56px" textAlign="center">We Are SPE</Heading>
            </Flex>
            <ResponsiveWidth mx="auto" gap={{ base: "4em", lg: "8em" }} align="center" my="5em">
                <Flex justify="space-between" gap="3em" w="fit-content" flexDir={{ base: 'column', lg: 'row'}}>
                    <Flex flexDir="column" gap="2.5em" py="2em" w="fit-content" border="1px solid #c8c8c8" borderRadius="10px">
                    <Icon as={mission} w="50px" h="50px" alignSelf="center" color="red" />
                        <Heading fontWeight="semibold" fontSize="28px" textAlign="center">
                            Who We Are
                        </Heading>
                        <Text fontSize="18px" maxW="80%" alignSelf="center">
                        Student Chapter with more than 1000 member, managed by students from Basrah University of Oil and Gas passionate about the oil and gas engineering, we aspire with support from our university to provide help and benefit to our students as well as anyone interested in the oil and gas industry.
                        </Text>
                    </Flex>
                    <Flex flexDir="column" gap="2.5em" py="2em" w="fit-content" border="1px solid #c8c8c8" borderRadius="10px" >
                    <Image src={vision} w="50px" h="50px" alignSelf="center"/>
                        <Heading fontWeight="semibold" fontSize="28px" textAlign="center">
                            Our Mission
                        </Heading>
                        <Text fontSize="18px" maxW="80%" alignSelf="center">
                        To deliver numerous on-campus seminars as well as online workshops, training courses, software trainings, and webinars presented by instructors who are experts in the oil and gas industry from all over the world and Iraq. In addition, we hold student competitions and make field trips to international companies. We aim to help students enhance their personal and technical skills as well as increase their employment capabilities. We support the role of women in the oil industry by inviting professional and accomplished women in the industry to present relevant seminars.
                        </Text>
                    </Flex>

                </Flex>
            {/* Features Section */}
           
            {/* Team Section */}
            <Team />
            <Achievements />
        </ResponsiveWidth>
        </Flex>
    )
}

export default About