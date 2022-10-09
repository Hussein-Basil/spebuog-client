import React from 'react'
import { Heading, Text, Flex, Grid, Link, Icon, Image, LinkBox } from '@chakra-ui/react'

import yousif from '../../../assets/officers/yousif.jpg'
import yaman from '../../../assets/officers/yaman.jpg'
import khalil from '../../../assets/officers/khalil.jpg'
import abdullah from '../../../assets/officers/abdullah.jpg'
import askar from '../../../assets/officers/askar.jpg'
import hisham from '../../../assets/officers/hisham.jpg'

import { ReactComponent as Linkedin } from '../../../assets/linkedin.svg'

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
            image: hisham,
            name: 'Hisham Ibrahim Abdullah',
            position: 'Program Chairperson',
            profile: "https://www.linkedin.com/in/hisham-ibraheem-00197a1b4"
        },
    ]
    return (
        <Flex flexDir="column" align="center" gap="3em">
            <Heading fontSize="28px" fontWeight="semibold">Meet Our Officers</Heading>
            <Grid gridTemplateColumns={{ base: "1fr", md: "1f 1fr", lg: "repeat(3, 1fr)" }} gap="3em">
                {team.map(member => (
                    <Flex flexDir="column" align="center" >
                        <Link href={member.profile} target="_blank" >
                            <Image src={member.image} alt="officer" w="200px" h="200px" />
                        </Link>
                        <Heading fontSize="18px" fontWeight="semibold" mt="1.5em">{member.name}</Heading>
                        <Text fontSize="16px">{member.position}</Text>
                    </Flex>
                ))}
            </Grid>
        </Flex>
    )
}

export default Team