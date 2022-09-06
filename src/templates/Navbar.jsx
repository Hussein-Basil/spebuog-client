import React from 'react'
import { Image, Icon, Flex, HStack, Box, Heading, Link } from '@chakra-ui/react'
import MobileDrawer from '../components/MobileDrawer'

const Navbar = () => {
    const Logo = 'https://www.spe.org/binaries/content/gallery/specms/speevents/organization-logos/spe-logo-2020.png'
    return (
        <Box>
            <Flex
                w="100%"
                pt="30px"
                pb="10px"
                color="black"
                justify="center"

            >
                <Flex px="20px" pb="20px" justify="space-between" align="center" w={{
                    sm: "320px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1440px",
                    '2xl': "1500px"
                }}>
                    {/* Logo */}
                    <Link href="/" _hover={{ textDecorationStyle: "none" }}><HStack gap="0.5em">
                        {/* <Icon as={Logo} height="40px" w="60px" fill="success.500" mx="-15px" /> */}
                        <Image src={Logo} height="40px" />
                        <Flex flexDir="column">
                            <Heading fontSize="sm" fontWeight="medium">SPE Student Chapter</Heading>
                            <Heading fontSize="sm">Basrah University For Oil & Gas</Heading>
                        </Flex>
                        <Heading fontSize="3xl"></Heading>
                    </HStack></Link>
                    <HStack gap="3em" mr="300px" fontWeight="semibold">
                        <Link href="/">Home</Link>
                        <Link href="/events">Events</Link>
                        <Link href="/officers">Officers</Link>
                        <Link href="/contact">Contact</Link>
                    </HStack>
                    {/* For Mobiles */}
                    <HStack display={{ base: "flex", md: "none" }}>
                        <MobileDrawer />
                    </HStack>
                </Flex>
            </Flex>
        </Box >
    )
}

export default Navbar