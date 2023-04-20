import React from 'react'
import { Heading, Text, Flex, Grid, Link, Image } from '@chakra-ui/react'

import yousif from '../../../assets/officers/yousif_resize.png'
import yaman from '../../../assets/officers/yaman_resize.png'
import khalil from '../../../assets/officers/khalil_resize.png'
import abdullah from '../../../assets/officers/abdullah_resize.png'
import askar from '../../../assets/officers/askar_resize.png'
import hisham from '../../../assets/officers/hisham_resize.png'
import basil from '../../../assets/officers/basil.png'
import ali from '../../../assets/officers/ali_resize.png'
import nooraldeen from '../../../assets/officers/nooraldeen_resize.png'
import fatima from '../../../assets/officers/fatima_resize.png'

import ResponsiveWidth from '../../../layouts/ResponsiveWidth'

import { motion } from 'framer-motion'

const Team = () => {
    const team = [
        {
            image: yousif,
            name: 'Yousif Taha Yaseen',
            position: 'President',
            profile: "http://linkedin.com/in/yousif-taha-yaseen92598a1b4"
        },
        {
            image: yaman,
            name: 'Yaman Raed Mohammed',
            position: 'Vice President',
            profile: "https://www.linkedin.com/in/yaman-raed-b5168a211"
        },
        {
            image: khalil,
            name: 'Khalil Ahmed Khalil',
            position: 'Membership Chairperson',
            profile: "https://www.linkedin.com/in/khalil-ahmed-6bb04721a"
        },
        {
            image: abdullah,
            name: 'Abdullah Ali Khalid',
            position: 'Secretary',
            profile: "https://www.linkedin.com/in/ACoAADlpMxgBaer0RVGAr7NyJ0E14Xgn9GJaDaw"
        },
        {
            image: askar,
            name: 'Almurtaza Alaa Askar',
            position: 'Treasurer',
            profile: "https://www.linkedin.com/in/al-murtaza-a-askar-6bb704218"
        },
        {
            // image: "https://media-exp1.licdn.com/dms/image/C4E03AQEFRh7Bd1GDJQ/profile-displayphoto-shrink_800_800/0/1654026806432?e=1674086400&v=beta&t=GOYIuZcRMaCyr7Wf1Zsa3KuP1dOVg_qMWQFmmRtPo7g",
            image: fatima,
            name: "Fatima Aziz",
            position: "Award and Recognition Chairperson",
            profile: "https://www.linkedin.com/in/fatima-azeez-b3643922a/"
        },
        {
            // image: "https://media-exp1.licdn.com/dms/image/D5603AQGegoSHa6PL0Q/profile-displayphoto-shrink_800_800/0/1666886956352?e=1674086400&v=beta&t=rNRZyOQPSNBfetcpNNExbhin3MEE1vpfN0HujQ_29c4",
            image: ali,
            name: "Ali Ahmed Namr",
            position: "Officer",
            profile: "https://www.linkedin.com/in/alialnamr/"
        },
        {
            image: hisham,
            name: 'Hisham Ibrahim Abdullah',
            position: 'Program Chairperson',
            profile: "https://www.linkedin.com/in/hisham-ibraheem-00197a1b4"
        },
        {
            // image: "https://media-exp1.licdn.com/dms/image/C5603AQGHlqubjVoYPQ/profile-displayphoto-shrink_200_200/0/1629495037236?e=1674086400&v=beta&t=TNcOnNrGUqUHK2oz_3fnH-BBVQQXSrS2rIwJIEXxteI",
            image: nooraldeen,
            name: "Nooraldeen Shawki Alasady",
            position: "Social Activities Chair",
            profile: "https://www.linkedin.com/in/nooraldeen-alasady-30290921a/"
        },
        {
            image: basil,
            name: "Hussein Basil",
            position: "Webmaster",
            profile: "https://www.linkedin.com/in/hubasil"
        },
    ]

    const linkMotion = {
        rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
        hover: {
          opacity: 0.6,
          transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeIn"
          }
        }
    }


    return (
        <ResponsiveWidth align="center" gap="3em">
            <Heading fontSize="28px" fontWeight="semibold">Meet Our Officers</Heading>
            <Grid 
                gridTemplateColumns={{ base: "1fr", md: "1fr 1fr", lg: "repeat(4, 1fr)", xl: "repeat(5, 1fr)"}}
                gap="3em"
            >
                {team.map((member, idx) => (
                    <Flex flexDir="column" align="center" className="col" alignSelf="start" textAlign="center" key={idx} justifySelf="center" mx="auto"
                    >
                        <motion.div initial="rest" whileHover="hover" animate="rest">
                            <Link href={member.profile} target="_blank" position="relative">
                                <Image
                                    as={motion.img}
                                    variants={linkMotion} 
                                    position="absolute" 
                                    
                                    src={"https://cdn-icons-png.flaticon.com/512/145/145807.png"} 
                                    objectFit="contain" alt="officer" 
                                    w="100px" 
                                    h="100px"
                                    transform="translate(50%, 50%)"
                                    borderRadius="50%"
                                    zIndex={10}
                                    />
                                <Image 
                                    as={motion.img}
                                    src={member.image} 
                                    variants={{ hover: { 
                                        border: '1px solid #007ab9',
                                        transition: {
                                            duration: 0.4,
                                            type: "tween",
                                            ease: "easeIn"
                                          }
                                    } }} 
                                    border="1px solid #00000000"
                                    objectFit="contain" alt="officer" 
                                    w="200px" h="200px" borderRadius="50%" 
                                />
                            </Link>
                        </motion.div>
                        <Heading fontSize="18px" fontWeight="semibold" mt="1.5em">{member.name}</Heading>
                        <Text fontSize="16px">{member.position}</Text>
                    </Flex>
                ))}
            </Grid>
            {/* <Flex gap="3em">
                {team.slice(0, 2).map(member => (
                    <Flex flexDir="column" align="center" className="col">
                        <Link href={member.profile} target="_blank" >
                            <Image src={member.image} alt="officer" w="200px" h="200px" borderRadius="50%" />
                        </Link>
                        <Heading fontSize="18px" fontWeight="semibold" mt="1.5em">{member.name}</Heading>
                        <Text fontSize="16px">{member.position}</Text>
                    </Flex>
                ))}
            </Flex>
            <Flex gap="3em">
                {team.slice(2, 5).map(member => (
                    <Flex flexDir="column" align="center" className="col">
                        <Link href={member.profile} target="_blank" >
                            <Image src={member.image} alt="officer" w="200px" h="200px" borderRadius="50%" />
                        </Link>
                        <Heading fontSize="18px" fontWeight="semibold" mt="1.5em">{member.name}</Heading>
                        <Text fontSize="16px">{member.position}</Text>
                    </Flex>
                ))}
            </Flex>
            <Flex gap="3em">
                {team.slice(5, 7).map(member => (
                    <Flex flexDir="column" align="center" className="col">
                        <Link href={member.profile} target="_blank" >
                            <Image src={member.image} alt="officer" w="200px" h="200px" borderRadius="50%" />
                        </Link>
                        <Heading fontSize="18px" fontWeight="semibold" mt="1.5em">{member.name}</Heading>
                        <Text fontSize="16px">{member.position}</Text>
                    </Flex>
                ))}
            </Flex> */}
        </ResponsiveWidth>
    )
}

export default Team