import React from 'react'
import { Flex, Box, Grid, Text, Heading, Image } from '@chakra-ui/react'

import Schlumberger from '../../assets/slb.png'
import Haliburton from '../../assets/haliburton.png'
import Weatherford from '../../assets/weatherford.png'
import BOC from '../../assets/boc.png'
import Aramco from '../../assets/aramco.png'
import METC from '../../assets/metc.png'
import ResponsiveWidth from '../../components/ResponsiveWidth'

const CompaniesProof = () => {
    const logos = [
        Schlumberger,
        Haliburton,
        Weatherford,
        Aramco,
        BOC,
        METC
    ]
    return (
        <Flex w="100vw">
            <ResponsiveWidth align="center" gap="1em" py="3em">
                <Heading fontSize="24px" fontWeight="medium" textAlign="center">We organize courses featuring experts
                    <Text color="#0D4C94" fontWeight="semibold" display="inline"> from 10+ leading companies</Text>
                </Heading>
                <Grid 
                    align="center" 
                    justifyItems="center" 
                    mt="1em" 
                    // gridTemplateColumns={{ sm: "auto auto", md: "repeat(3, auto)", lg: "repeat(6, auto)"}}
                    gridTemplateColumns="repeat(auto-fit, minmax(150px, 1fr))"
                    gap="1em"
                    w="100%"
                >
                    {logos.map((logo, idx) => (
                        <Box p="1em" >
                            <Image key={idx} src={logo} h="81px" maxW="150px"  objectFit="contain" filter="grayscale(1)" opacity="0.65" />
                        </Box>
                    ))}
                </Grid>
            </ResponsiveWidth>
        </Flex>
    )
}

export default CompaniesProof