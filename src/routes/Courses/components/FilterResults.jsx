import React, { useState } from 'react'
import { Flex, Divider, Grid, Button,  Text,   SkeletonText } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Course from '../../../components/Course'

const FilterResults = ({
    results,
    loading, 
    ...props
}) => {
    const [sliceIndex, setSliceIndex] = useState(12)

    if (loading) {
        return (
        <Flex flexDir="column" gap="1em" mt="0.5em" w="100%" as={motion.div} initial={{ opacity: 0}} whileInView={{opacity: 1}}>
            <Grid gridTemplateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
                xl: "repeat(4, 1fr)"
            }} gap="1.5em" alignItems="stretch">
                {[...Array(12)].map((_, idx) => (
                    <Course key={idx} />
                ))}
            </Grid>
        </Flex>
        )
    }

    if (results?.length) {
        // return (
        //     <Flex flexDir="column" as={motion.div} initial={{ opacity: 0}} whileInView={{opacity: 1}}>
        //         {results.map((course, idx) => (
        //             <Flex flexDir="column" key={idx}>
        //                 <Flex
        //                     flexDir="row"
        //                     p="1em"
        //                     justify="space-between"
        //                 >
        //                     <Link href={`/${['course', 'internship'].includes(course.event_type) ? 'course' : 'lecture'}/${course.uid}`} fontSize={{ base: "16px", lg: "18px" }} fontWeight="medium" >{course.title}</Link>
        //                     <Flex gap="1em" align="center">
        //                         {/* {course.speakers.map((speaker, idx) => {
        //                             if (speaker?.image && speaker.image === '/images/speaker.png') {
        //                                 return <Avatar key={idx} w="40px" h="40px" />
        //                             } else return (
        //                                 <Image key={idx} w="40px" h="40px" borderRadius="50%" src={`https://spebuog-dev.vercel.app${speaker.image}`} />
        //                             )
        //                         })} */}
        //                         {/* <Text>
        //                             {course.speakers.at(0)?.name}{' '}
        //                             {course.speakers.length > 1 && `+${course.speakers.length - 1}`}
        //                         </Text> */}
        //                     </Flex>
        //                 </Flex>
        //                 <Divider />
        //             </Flex>
        //         ))}
        //     </Flex>
        // )
        return (
            <Flex flexDir="column" gap="1em" mt="0.5em" w="100%" as={motion.div} initial={{ opacity: 0}} whileInView={{opacity: 1}}>
                <Grid gridTemplateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                    xl: "repeat(4, 1fr)"
                }} gap="1.5em" alignItems="stretch">
                    {results.slice(0, sliceIndex).map((course, idx) => (
                        <Course course={course} key={idx} />
                    ))}
                </Grid>
                {sliceIndex < results.length &&
                <Button variant="outline" onClick={() => setSliceIndex(sliceIndex + 12)}>Load More</Button>}
            </Flex>
        )
    } else {
        return <Text as={motion.div} initial={{opacity: 0}} whileInView={{opacity: 1}}>No results</Text>
    }
}

export default FilterResults