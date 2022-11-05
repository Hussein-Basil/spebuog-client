import React, { useState, useEffect } from 'react'
import { Flex, Heading, Text, useBreakpointValue, Link, SkeletonText, Spinner, Skeleton } from '@chakra-ui/react'
import Lorem from "../../../components/Lorem"

const Lectures = ({ lectures, speakers }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {

        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleWindowResize)
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    const lectureTitleSlice = useBreakpointValue({
        base: 48,
        md: 96,
    })

    return (
        <Flex flexDir="column" gap="2em" mt="2em" id="lectures" maxW={{ base: "100%", lg: "1000px"}}>
            <Heading fontSize="24px" fontWeight="medium" >
                There are {lectures?.length || <Spinner />} Lectures in this Course
            </Heading>
            <Flex flexDir="column" gap="1em" >
            {lectures?.length ? lectures.map((lec, index) => {
                return (
                    <Flex gap="2em" bg="#f1f1f1" p="1em" borderRadius="10px">
                        <Text fontSize="24px" alignSelf="center">{index + 1}</Text>
                        <Flex flexDir="column" gap="1em">
                            <Heading fontSize="18px"><Link href={`/lecture/${lec?.uid}`}>{lec.title}</Link></Heading>
                            {/* <Text><Link href={`/speaker/${lec.speakers.at(0)?.uid}`}>{lec.speakers.at(0).name}</Link></Text>*/}
                            <Text><Lorem count={3}/></Text>
                            
                        </Flex> 
                    </Flex>
                )
            }) : [...Array(3)].map((_, idx) => (
                <Skeleton as={Flex} h="100px" gap="2em" bg="#f1f1f1" p="1em" borderRadius="10px" />
            ))}
                
            </Flex>
            
        </Flex>

    )
}

export default Lectures