import React from 'react'
import { Flex, Text, Icon, Grid } from '@chakra-ui/react'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { BsPeopleFill } from 'react-icons/bs'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { MdEmojiPeople } from 'react-icons/md'
import ResponsiveWidth from '../../components/ResponsiveWidth'
import { motion } from 'framer-motion'

const NumbersProof = () => {
    return (
        <ResponsiveWidth align="center">
            <Grid 
                as={motion.div}
                initial={{ opacity: 0, scale: 0.8, x: -200 }}
                whileInView={{opacity: 1, scale: 1, x: 0}}
                transition={{ x: {type: "tween"}}}
                viewport={{ once: true }}
                bg="#0D4C94" 
                p="2em"
                pt="0" 
                justify="center" 
                color="white"
                gap="1em"
                // mt="4em"
                w="100%"
                gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
            >
                <Flex as={motion.div} whileHover={{ y: -5}} gap="1em" align="center" bg="#003C80" p="1em" borderRadius="10px">
                    <Icon as={FaChalkboardTeacher} color="#5890D1" h="72px" w="72px" />
                    <Flex flexDir="column" align="start">
                        <Text fontWeight="semibold" fontSize="36px">100+</Text>
                        <Text fontWeight="light" fontSize="16px" >Organized Lectures</Text>
                    </Flex>
                </Flex>
                <Flex as={motion.div} whileHover={{ y: -5}} gap="1em" align="center" bg="#003C80" p="1em" borderRadius="10px">
                    <Icon as={BsPeopleFill} color="#5890D1" h="72px" w="72px" />
                    <Flex flexDir="column">
                        <Text fontWeight="semibold" fontSize="36px">1000+</Text>
                        <Text fontWeight="light" fontSize="16px" >Active Members</Text>
                    </Flex>
                </Flex>
                <Flex as={motion.div} whileHover={{ y: -5}} gap="1em" align="center" bg="#003C80" p="1em" borderRadius="10px">
                    <Icon as={MdEmojiPeople} color="#5890D1" h="72px" w="72px" />
                    <Flex flexDir="column">
                        <Text fontWeight="semibold" fontSize="36px">50</Text>
                        <Text fontWeight="light" fontSize="16px" >Team Members</Text>
                    </Flex>
                </Flex>
                <Flex as={motion.div} whileHover={{ y: -5}} gap="1em" align="center" bg="#003C80" p="1em" borderRadius="10px">
                    <Icon as={AiOutlineFieldTime} color="#5890D1" h="72px" w="72px" />
                    <Flex flexDir="column">
                        <Text fontWeight="semibold" fontSize="36px">1+</Text>
                        <Text fontWeight="light" fontSize="16px" >Year of Experience</Text>
                    </Flex>
                </Flex>
            </Grid>
        </ResponsiveWidth>
    )
}

export default NumbersProof