import React from 'react'
import { Flex, Grid, Text, Heading, Avatar, Image } from '@chakra-ui/react'

import Schlumberger from '../../assets/schlumberger.png'
import Haliburton from '../../assets/haliburton.png'
import Weatherford from '../../assets/weatherford.png'
import BOC from '../../assets/boc.png'
import Aramco from '../../assets/aramco.png'
import METC from '../../assets/metc.png'

const CompaniesProof = () => {
    return (
        <Flex bg="#f1f1f1" w="100vw" align="center" justify="center" px="1em" py="3em" flexDir="column" gap="1.5em" mb="2em">
            <Heading fontSize="28px" fontWeight="medium" textAlign="center">We collaborate 
                <Text color="#0D4C94" display="inline"> with 10+ leading companies</Text>
            </Heading>
            <Grid align="center" justifyItems="center" gap="3em" mt="1em" gridTemplateColumns={{ sm: "auto auto", md: "repeat(3, auto)", lg: "repeat(6, auto)"}}>
                <Image src={Schlumberger} h="24px" maxW="150px"  objectFit="contain" />
                <Image src={Haliburton}  h="24px" maxW="150px" objectFit="contain"/>
                <Image src={Weatherford} h="36px" maxW="150px" objectFit="contain" />
                <Image src={Aramco} h="36px" maxW="150px" objectFit="contain" />
                <Image src={BOC} h="54px" maxW="150px" objectFit="contain" />
                <Image src={METC} h="54px" mt="-0.5em" maxW="150px" objectFit="contain" />
            </Grid>
        </Flex>
    )
}

export default CompaniesProof