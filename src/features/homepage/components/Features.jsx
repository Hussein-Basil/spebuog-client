import React, { useState } from 'react'
import { Flex, Heading, Icon, Image, Text, Box} from '@chakra-ui/react'
import { GiOilPump } from 'react-icons/gi'
import { BsPeopleFill } from 'react-icons/bs'
import { FaHandsHelping } from 'react-icons/fa'
import ResponsiveWidth from '../../../layouts/ResponsiveWidth'
import SciImg from '../../../assets/photos/classroom/2.jpg'
import EnvImg from '../../../assets/photos/competition/1.jpg'
import ComImg from '../../../assets/photos/bazaar/2.jpg'

const Features = () => {
    const [selectedImg, setSelectedImg] = useState(SciImg)
    const features = [
        {
            title: "Leadership Environment",
            description: "Volunteering for building experience and self development",
            image: EnvImg,
            icon: BsPeopleFill
        },
        {
            title: "Scientific Events",
            description: "Organizing internships, courses and seminars on oil industry topics",
            image: SciImg,
            icon: GiOilPump
        }, 
        {
            title: "Community Involvement",
            description: "Helping community, organizaing annual charity bazaars",
            image: ComImg,
            icon: FaHandsHelping
        }
    ]

    return (
        <Box bg="#f1f1f1" w="100%" h="fit-content" position="relative" py="3em" mb="8em">
            <ResponsiveWidth 
                mb="4em" 
                // as={motion.div}
                // whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                align="center"
            >
                    <Heading fontWeight="medium" fontSize="28px">What We Offer</Heading>
                    <Text>Get to know what we do</Text>
                    <Image src={selectedImg} h="350px" objectFit="cover" mt="2em" />
                    <Flex 
                        mt="2em" 
                        gap="0.5em"
                        flexDir={{ base: 'column', lg: 'row' }} 
                        mb="-11em"
                    >
                        {features.map((feature, idx) => (
                            <Flex 
                                // as={motion.div}
                                // whileHover={{scale: 1.1}}
                                initial={{  x: -200 }}
                                whileInView={{ x: 0}}
                                viewport={{ once: true }}
                                // flexDir={{ base: "row", lg: "column"}}
                                gap="0.5em"
                                // align="center" 
                                maxW={{ base: "unset", lg: "300px"}}
                                borderWidth={selectedImg === feature.image ? "2px": "0.5px"}
                                borderStyle="solid"
                                borderColor={selectedImg === feature.image ? "gold": "#e1e1e1"}
                                borderRadius="10px"
                                px="1em"
                                py="1.5em"
                                bg="white"
                                onClick={() => setSelectedImg(feature.image)}
                                onHoverStart={() => {
                                    if (selectedImg !== feature.image) {
                                        setSelectedImg(feature.image)
                                    }
                                }}
                                // textAlign={{ base: "left", lg: "center"}}
                                flexDir="column"
                            >
                                <Flex justify="space-between" align="center">
                                    <Text fontSize="18px" fontWeight="semibold">{feature.title}</Text>
                                    <Icon as={feature.icon} h="36px" w="36px" color="#0D4C94" /> 
                                </Flex>
                                <Text fontSize="16px">{feature.description}</Text>
                            </Flex>
                        ))}
                    </Flex>
            </ResponsiveWidth>
        </Box>
    )
}

export default Features