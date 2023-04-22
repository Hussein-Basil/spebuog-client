import React from 'react'
import { Flex, Text, Icon, Grid, Show, Hide } from '@chakra-ui/react'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { BsPeopleFill } from 'react-icons/bs'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { MdEmojiPeople } from 'react-icons/md'

const NumbersProof = () => {
    const numbers = [
        {
            value: "100+",
            text: "Organized Lectures",
            icon: FaChalkboardTeacher
        },
        {
            value: "1000+",
            text: "Active Members",
            icon: BsPeopleFill
        },
        {
            value: "50",
            text: "Team Members",
            icon: MdEmojiPeople
        },
        {
            value: "1+",
            text: "Year of Existance",
            icon: AiOutlineFieldTime
        },
    ]
    return (
        <Flex flexDir="column" align={{ base: "center", lg: "center"}}>
            <Grid 
                // as={motion.div}
                initial={{ opacity: 0, scale: 0.8, x: -200 }}
                whileInView={{opacity: 1, scale: 1, x: 0}}
                transition={{ x: {type: "tween"}}}
                viewport={{ once: true }}
                // bg="#0D4C94" 
                pb="2em"
                justify="center" 
                color="white"
                gap="1em"
                userSelect="none"
                // mt="4em"
                // gridTemplateColumns="repeat(auto-fill, minmax(225px, 1fr))"
                gridTemplateColumns={{
                    // base: "1fr",
                    base: "1fr 1fr",
                    md: "repeat(4, 1fr)",
                    lg: "1fr 1fr"
                    // md: "repeat(4, 1fr)"
                }}
                mt={{ base: "2em", lg: "6em" }}
                // gridTemplateColumns="1fr 1fr"
            >
                {numbers.map((number, idx) => (
                    <>
                    <Show above="lg">
                        <Flex 
                            whileHover={{ y: -5 }} 
                            gap="1em" 
                            align="center" 
                            bg="#003C8099" 
                            p="1em" 
                            borderRadius="10px"
                        >
                            <Icon as={number.icon} color="#5890D1" h="52px" w="52px" />
                            <Flex flexDir="column">
                                <Text fontWeight="semibold" fontSize="24px">{number.value}</Text>
                                <Text fontWeight="light" fontSize="16px" >{number.text}</Text>
                            </Flex>
                        </Flex>    
                    </Show>
                    <Hide above="lg">
                        <Flex 
                            key={idx}
                            whileHover={{ y: -5}} 
                            align="start" 
                            bg="#003C80" 
                            p="1em" 
                            borderRadius="10px" 
                            flexDir="column"
                            textAlign="left"
                            >
                            <Flex justify="space-between" w="100%">
                                <Text fontWeight="semibold" fontSize="24px">{number.value}</Text>
                                <Icon as={number.icon} color="#5890D1" h={{ base: "36px", lg: "52px"}} w={{ base: "36px", lg: "52px"}} />
                            </Flex>
                            <Text fontWeight="light" fontSize={{ base: "14px", lg: "16px"}} >{number.text}</Text>
                        </Flex>
                    </Hide>
                    </>
                ))}
            </Grid>
        </Flex>
    )
}

export default NumbersProof