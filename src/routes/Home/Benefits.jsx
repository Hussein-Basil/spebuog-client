import React from 'react'
import { Flex, Heading, Icon, Image, Text, Show } from '@chakra-ui/react'
import Logo from '../../assets/spe-logo-2020.png'
import { GiOilPump } from 'react-icons/gi'
import { BsPeopleFill } from 'react-icons/bs'
import { FaHandsHelping } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Benefits = () => {
    return (
        <Flex flexDir="column" w={{
            base: '90%',
            md: '768px',
            lg: '1024px',
            xl: '1440px',
            '2xl': '1500px',
        }} mx="auto" gap={{ base: "4em", lg: "8em" }} align="center">
            {/* Content Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.325 }}
                viewport={{ once: true }}
            >
                <Flex justify="end" gap="5em" flexDir={{ base: 'column', lg: 'row' }}>
                    {/* <iframe width="1000" height="517" src="https://www.youtube-nocookie.com/embed/NXz5wCl8GtU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe> */}

                    <Flex flexDir="column" gap="2.5em" align="start">
                        <Heading fontWeight="normal" fontSize="28px">
                            Who We are
                        </Heading>
                        <Text fontSize="18px" maxW="700px">
                            The Society of Petroleum Engineers (SPE) is a not-for-profit professional association whose more than 124,800 members in 134 countries are engaged in oil and gas exploration and production. SPE is a key resource for technical knowledge providing opportunities to exchange information at in-person and online events and training courses, publications, and other resources. SPE maintains offices in Dallas, London, Dubai, Kuala Lumpur, Calgary, Moscow and Houston.
                        </Text>
                    </Flex>
                    <Show above="lg">
                        <Image src={Logo} h={{ base: "100px", lg: "234px" }} objectFit="contain" />
                    </Show>
                </Flex>
            </motion.div>
            {/* Features Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                viewport={{ once: true }}
            >
                <Flex gap="3em" flexDir={{ base: 'column', lg: 'row' }}>
                    <Flex flexDir="column" gap="0.5em" textAlign="center" align="center" maxW="250px">
                        <Icon as={BsPeopleFill} h="110px" w="110px" color="#0D4C94" />
                        <Text fontSize="22px" fontWeight="medium">Students Leadership</Text>
                        <Text fontSize="16px">Volunteering for building experience and self development</Text>
                    </Flex>
                    <Flex flexDir="column" gap="0.5em" textAlign="center" align="center" maxW="250px">
                        <Icon as={GiOilPump} h="110px" w="110px" color="#0D4C94" />
                        <Text fontSize="22px" fontWeight="medium">Scientific Events</Text>
                        <Text fontSize="16px">Organizing internships, courses and seminars on oil industry topics</Text>
                    </Flex>
                    <Flex flexDir="column" gap="0.5em" textAlign="center" align="center" maxW="250px">
                        <Icon as={FaHandsHelping} h="110px" w="110px" color="#0D4C94" />
                        <Text fontSize="22px" fontWeight="medium">Social Activities</Text>
                        <Text fontSize="16px">Helping community, organizaing annual charity bazaars</Text>
                    </Flex>
                </Flex>
            </motion.div>
        </Flex>
    )
}

export default Benefits