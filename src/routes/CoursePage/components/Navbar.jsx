import React, { useEffect, useRef } from 'react'
import { Flex, Link } from '@chakra-ui/react'
import '../styles.css'

const Navbar = () => {
    const navbarRef = useRef(null)

    useEffect(() => {
        let lastScrollY = window.scrollY

        const sticky = navbarRef.current.offsetTop

        const handleWindowScroll = () => {
            navbarRef.current.classList.toggle("is-pinned",
                (window.pageYOffset >= sticky) && !(window.scrollY >= lastScrollY)
            )
            lastScrollY = window.scrollY
        }

        window.addEventListener("scroll", handleWindowScroll)
        return () => {
            window.removeEventListener('scroll', handleWindowScroll)
        }
    })


    return (
        <Flex h="60px" mb="3em">
            <Flex
                flexDir="column"
                align="center"
                // borderBottom="1px solid lightgray"
                boxShadow="0 4px 2px -2px rgb(60 64 67 / 30%)"
                mb="3em"
                ref={navbarRef}
                // position={{ base: "sticky", lg: "sticky" }}
                height="60px"
                w="100vw"
                bg="#fffffff5"
                fontSize="16px"
                justify="center"
            >
                <Flex
                    w={{
                        base: '100%',
                        md: '768px',
                        lg: '1024px',
                        xl: '1440px',
                        '2xl': '1500px',
                    }}
                    overflowX="auto"
                    gap={{ base: "3em", lg: "5em" }}
                    px="1.5em"
                >
                    <Link href="#about" fontWeight="semibold" color="#0D4C94">About</Link>
                    <Link href="#speakers">Speakers</Link>
                    <Link href="#lectures">Lectures</Link>
                    <Link href="#files">Files</Link>
                    <Link href="#supporting-lectures" whiteSpace="nowrap">Supporting Lectures</Link>
                    <Link href="#faq">FAQ</Link>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Navbar

