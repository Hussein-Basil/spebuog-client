import React from 'react'
import { Flex, Text, Heading, Link, Icon, Image, HStack, Grid } from '@chakra-ui/react'
import yousif from '../../assets/officers/yousif.jpg'
import yaman from '../../assets/officers/yaman.jpg'
import khalil from '../../assets/officers/khalil.jpg'
import abdullah from '../../assets/officers/abdullah.jpg'
import askar from '../../assets/officers/askar.jpg'
import hisham from '../../assets/officers/hisham.jpg'

import { ReactComponent as Linkedin } from '../../assets/linkedin.svg'

import './overlay.css'

const Officers = () => {
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
            profile: ""
        },
        {
            image: khalil,
            name: 'Khalil Ahmed Khalil',
            position: 'Membership Chairperson',
            profile: ""
        },
        {
            image: abdullah,
            name: 'Abdullah Ali Khalid',
            position: 'Secretary',
            profile: ""
        },
        {
            image: askar,
            name: 'Almurtaza Alaa Askar',
            position: 'Treasurer',
            profile: ""
        },
        {
            image: hisham,
            name: 'Hisham Ibrahim Abdullah',
            position: 'Program Chairperson',
            profile: ""
        },
    ]
    return (
        <Flex flexDir="column" align="center" my="4em" gap="2em" w="100vw">
            <Heading>Meet Our Team</Heading>
            <Text></Text>
            <Grid gridTemplateColumns="repeat(3, 1fr)" gap="3em">
                {team.map(member => (
                    <Flex flexDir="column" align="center" gap="0.5em">
                        <Link href={member.profile} target="_blank">
                            <figure class="hover-img">
                                <img src={member.image} alt="officer" />
                                <figcaption>
                                    <Icon as={Linkedin} w='50px' h='50px' fill="white" />
                                </figcaption>
                            </figure>
                        </Link>
                        <Heading fontSize="16px">{member.name}</Heading>
                        <Text fontSize="16px">{member.position}</Text>
                    </Flex>
                ))}
            </Grid>
        </Flex>
    )
}

export default Officers