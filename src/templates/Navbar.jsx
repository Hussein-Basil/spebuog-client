import React, { useEffect, useRef } from 'react'
import { Image, Icon, Flex, HStack, Box, Heading, Link } from '@chakra-ui/react'
import MobileDrawer from '../components/MobileDrawer'
import Logo from '../assets/spe-logo-2020.png'
import './styles.css'
import ResponsiveWidth from '../components/ResponsiveWidth'
import { motion } from 'framer-motion'

const Navbar = () => {
    // const Logo = 'https://www.spe.org/binaries/content/gallery/specms/speevents/organization-logos/spe-logo-2020.png'
    const navRef = useRef(null)

    useEffect(() => {
        let lastScrollY = window.scrollY
        const sticky = navRef.current.offsetTop

        const handleWindowScroll = () => {
            navRef.current.classList.toggle("is-pisnned",
                (window.pageYOffset >= 60) && !(window.scrollY >= lastScrollY)
            )
            lastScrollY = window.scrollY
        }

        window.addEventListener("scroll", handleWindowScroll)
        return () => {
            window.removeEventListener('scroll', handleWindowScroll)
        }
    })
    return (
        <Box 
            h="95px"
        >
            <Flex
                align="center"
                color="black"
                h="95px"
                justify={{ base: "unset", md: "center" }}
                w="100%"
                ref={navRef}
                bg="#fffffff5"
            >
                <ResponsiveWidth>
                    <Flex justify="space-between" align="center"
                        px={{
                            sm: '15px',
                            md: 'unset'
                        }}
                    >
                        <Link href="/" _hover={{ textDecorationStyle: "none" }}><Flex gap="1em">
                            <Image src={Logo} height="40px" width="auto" className="logo-image" />
                            <Flex flexDir="column" display={{ base: "none", md: "flex" }} className="logo-text">
                                <Heading fontSize="sm" fontWeight="medium" className="logo-text-spe">SPE Student Chapter</Heading>
                                <Heading fontSize="sm" fontWeight="bold" className="logo-text-chapter">Basrah University For Oil & Gas</Heading>
                            </Flex>
                        </Flex></Link>
                        <Flex
                            gap="3em"
                            fontWeight="semibold"
                            display={{ base: 'none', md: 'flex' }}
                            pr="2em"
                        >
                            <Link href="/">Home</Link>
                            <Link href="/courses">Courses</Link>
                            <Link href="/speakers" >Instructors</Link>
                            <Link href="/about" >About</Link>
                        </Flex>
                        {/* For Mobiles */}
                        <HStack display={{ base: "flex", md: "none" }}>
                            <MobileDrawer />
                        </HStack>
                    </Flex>
                </ResponsiveWidth>
            </Flex>
        </Box>
    )
}

export default Navbar