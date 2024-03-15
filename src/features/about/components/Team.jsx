import React from 'react'
import { Heading, Text, Flex, Grid, Link, Image } from '@chakra-ui/react'

import hussein from '../../../assets/officers/hussein_basil.png'
import ahmed from '../../../assets/officers/ahmed_waleed.png'
import muna from '../../../assets/officers/muna.png'
import muqtada from '../../../assets/officers/muqtada_ameen.png'
import fatima from '../../../assets/officers/fatima.png'
import yousif from '../../../assets/officers/yousif_raad.png'
import mohammed from '../../../assets/officers/mohammed_salah.png'
import abdulwahhab from '../../../assets/officers/abdulwahhab.png'
import ahmedzuhair from '../../../assets/officers/ahmedzuhair.png'
import husseinkaram from '../../../assets/officers/husseinkaram.png'

import ResponsiveWidth from '../../../layouts/ResponsiveWidth'

import { motion } from 'framer-motion'

const Team = () => {
    const team = [
        {
            image: hussein,
            name: 'Hussein Basil Abdulkhaleq',
            position: 'President',
            profile: "http://linkedin.com/in/hubasil"
        },
        {
            image: ahmed,
            name: 'Ahmed Waleed Hameed',
            position: 'Vice President',
            profile: "https://www.linkedin.com/in/ahmed-waleed-25044422a/"
        },
        {
            image: muna,
            name: 'Muna Jazaa Khalaf',
            position: 'Membership Chairperson',
            profile: "https://www.linkedin.com/in/munajazaa/"
        },
        {
            image: muqtada,
            name: 'Muqtada Ameen Nadhim',
            position: 'Treasurer',
            profile: ""
        },
        {
            image: yousif,
            name: 'Yousif Raad Saddam',
            position: 'Program Chairperson',
            profile: ""
        },
        {
            // image: "https://media-exp1.licdn.com/dms/image/C4E03AQEFRh7Bd1GDJQ/profile-displayphoto-shrink_800_800/0/1654026806432?e=1674086400&v=beta&t=GOYIuZcRMaCyr7Wf1Zsa3KuP1dOVg_qMWQFmmRtPo7g",
            image: fatima,
            name: "Fatima Aziz",
            position: "Social Activites Chair",
            profile: "https://www.linkedin.com/in/fatima-hadi-b3643922a/"
        },
        {
            image: mohammed,
            name: "Mohammed Salah",
            position: "Webmaster",
            profile: "https://www.linkedin.com/in/mohamed-salah-270a44271/"
        },
        {
            image: abdulwahhab,
            name: "Abdulwahhab Abdulmunem",
            position:"Communication & Outreach",
            profile: "http://linkedin.com/in/abdulwahab-abdulmonem"
        },
        {
            image: ahmedzuhair,
            name: "Ahmed Zuhair",
            position:"Communication & Outreach",
            profile: "http://www.linkedin.com/in/ahmed-zuhair"
        },
        {
            image: husseinkaram,
            name: "Hussein Karam",
            position:"Secretary",
            profile: "https://www.linkedin.com/in/hussein-karam/"
        }
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
                gridTemplateColumns={{ base: "1fr", md: "1fr 1fr", lg: "repeat(4, 1fr)"}}
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