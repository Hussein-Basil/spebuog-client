import React, { useEffect, useRef } from 'react'
import { Image, Flex, HStack, Box, Heading, Link } from '@chakra-ui/react'
import MobileDrawer from '../components/MobileDrawer'
import Logo from '../assets/spe-logo-2020.png'
import './styles.css'
import ResponsiveWidth from '../components/ResponsiveWidth'

const Navbar = () => {
    const navRef = useRef(null)

    useEffect(() => {
        let lastScrollY = window.scrollY

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
            h={{ base: "75px" , lg: "95px"}}
        >
            <Flex
                align="center"
                color="black"
                h={{ base: "75px", lg: "95px"}}
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
                            className="nav_ul"
                        >
                            <li><Link href="/">Home</Link></li>
                            <li className="courses_item">
                                <Link href="/courses">Courses</Link>
                                <ul className="dropdown" style={{
                                    display: "flex",
                                    zIndex: 99,
                                    width: 'fit-content', 
                                    whiteSpace: 'nowrap',
                                    position: 'absolute',
                                    gap: "1vh",
                                    background: "rgb(240,240,240)",
                                    borderTopRightRadius: "7%",
                                    borderBottomRightRadius: "7%",
                                    padding: "10px 4px 10px 7px",
                                    borderLeft: "#F6BB43 solid 5px",
                                    flexDirection: 'column'
                                    
                                }}>
                                    <li style={{ display: 'block', borderLeft: "2px solid #2196F3", padding: "5px 0px  0px 4px" }}><Link href="/courses">Browse Courses</Link></li>
                                    <li style={{ display: 'block', borderLeft: "2px solid #2196F3", padding: "5px 0px 0px 4px" }}><Link href="/certificate">Certificates</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/instructors" >Instructors</Link></li>
                            <li><Link href="/about" >About</Link></li>
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