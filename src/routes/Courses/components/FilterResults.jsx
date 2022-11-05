import React from 'react'
import { Flex, Divider, Link,  Text,   SkeletonText } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const FilterResults = ({
    results,
    loading
}) => {
    if (loading) {
        return (
            <Flex 
                as={motion.div} 
                flexDir="column" 
                initial={{ opacity: 0}} 
                whileInView={{opacity: 1}}
                gap="1em"
            >
                <SkeletonText mt="4" noOfLines={1} w="50%"/>
                <Divider />
                <SkeletonText mt="4" noOfLines={1} w="45%"/>
                <Divider />
                <SkeletonText mt="4" noOfLines={1} w="30%"/>
                <Divider />
                <SkeletonText mt="4" noOfLines={1} w="45%"/>
                <Divider />
                <SkeletonText mt="4" noOfLines={1} w="55%"/>
                <Divider />
                <SkeletonText mt="4" noOfLines={1} w="50%"/>
                <Divider />
                <SkeletonText mt="4" noOfLines={1} w="40%"/>
                <Divider />
                <SkeletonText mt="4" noOfLines={1} w="30%"/>
                <Divider />
                <SkeletonText mt="4" noOfLines={1} w="45%"/>
                <Divider />
                <SkeletonText mt="4" noOfLines={1} w="55%"/>
                <Divider />
            </Flex>
        )
    }

    if (results?.length) {
        return (
            <Flex flexDir="column" as={motion.div} initial={{ opacity: 0}} whileInView={{opacity: 1}}>
                {results.map((course, idx) => (
                    <Flex flexDir="column" key={idx}>
                        <Flex
                            flexDir="row"
                            p="1em"
                            justify="space-between"
                        >
                            <Link href={`/${['course', 'internship'].includes(course.event_type) ? 'course' : 'lecture'}/${course.uid}`} fontSize={{ base: "16px", lg: "18px" }} fontWeight="medium" >{course.title}</Link>
                            <Flex gap="1em" align="center">
                                {/* {course.speakers.map((speaker, idx) => {
                                    if (speaker?.image && speaker.image === '/images/speaker.png') {
                                        return <Avatar key={idx} w="40px" h="40px" />
                                    } else return (
                                        <Image key={idx} w="40px" h="40px" borderRadius="50%" src={`https://spebuog-dev.vercel.app${speaker.image}`} />
                                    )
                                })} */}
                                {/* <Text>
                                    {course.speakers.at(0)?.name}{' '}
                                    {course.speakers.length > 1 && `+${course.speakers.length - 1}`}
                                </Text> */}
                            </Flex>
                        </Flex>
                        <Divider />
                    </Flex>
                ))}
            </Flex>
        )
    } else {
        return <Text as={motion.div} initial={{opacity: 0}} whileInView={{opacity: 1}}>No results</Text>
    }
}

export default FilterResults