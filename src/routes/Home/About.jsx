import React from 'react'
import { Flex, Heading, Box, Icon, Image, Text, Show, Link, Button, LinkOverlay, LinkBox } from '@chakra-ui/react'
import Logo from '../../assets/SPE-logo.png'
import { motion } from 'framer-motion'
import ResponsiveWidth from '../../components/ResponsiveWidth'

const About = () => {
    return (
        <Box bg="#f1f1f1" w="100%">
        <ResponsiveWidth align="center" mb="4em" pt="5em">
                <Flex 
                    justify="end" 
                    gap="5em" 
                    flexDir={{ base: 'column', lg: 'row' }}
                >
                    {/* <iframe width="1000" height="517" src="https://www.youtube-nocookie.com/embed/NXz5wCl8GtU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe> */}
                    
                    <Flex 
                        // as={motion.div}
                        initial={{  x: -300 }}
                        whileInView={{ x: 0}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        flexDir="column" 
                        align="start"
                    >
                        {/* <Text color="#0D4C94" fontWeight="semibold" fontSize="20px"><Link href="/about">About us</Link></Text> */}
                        <Heading fontWeight="medium" fontSize="28px" mb="0.75em">
                            Who We Are
                        </Heading>
                        <Text fontSize="18px" maxW="700px">
                        Student Chapter with more than 1000 member, managed by students from Basrah University of Oil and Gas passionate about the oil and gas engineering, we aspire with support from our university to provide help and benefit to our students as well as anyone interested in the oil and gas industry
                        </Text>
                        <LinkBox><LinkOverlay href="/about"><Button textTransform="none" mt="1em" color="white" fontWeight="semibold">Discover More</Button></LinkOverlay></LinkBox>
                    </Flex>
                    <Show above="lg">
                        {/* <motion.div initial={{ x: 200}} whileInView={{ x: 0}} viewport={{ once: true }}> */}
                        <Image 
                            src={Logo} 
                            h={{ base: "100px", lg: "234px" }} 
                            objectFit="contain" 
                        />
                        {/* </motion.div> */}
                    </Show>
                </Flex>
        </ResponsiveWidth>
        </Box>
    )
}

export default About