import React from 'react'
import { Flex, Heading, Text, Link } from '@chakra-ui/react'

const CourseLectures = ({ lectures }) => {

    const handleDescription = (lecture) => {
        let instructors = [...new Map(lecture.instructors.map(item => 
            [item['_id'], item])).values()]
        
        if (!instructors.length) {
            return ''
        }

        if (instructors.length === 1) {
            if (instructors.at(0).position && instructors.at(0).organization) {
                return `
                    Instructor: ${instructors.at(0).name} 
                    who is ${instructors.at(0).position} at ${instructors.at(0).organization}
                `
            }
        } else {
            return `
                ${instructors.at(0).name} and ${instructors.at(1).name}
            `
        }
    }

    return (
        <Flex flexDir="column" gap="2em" mt="2em" id="lectures" maxW={{ base: "100%", lg: "1000px"}}>
            <Heading fontSize="24px" fontWeight="medium" >
                There are {lectures?.length} Lectures in this Course
            </Heading>
            <Flex flexDir="column" gap="1em" >
            {lectures?.length ? lectures.map((lec, index) => {
                return (
                    <Flex key={index} gap="2em" bg="#f1f1f1" p="1em" borderRadius="10px">
                        <Text fontSize="24px" alignSelf="center">{index + 1}</Text>
                        <Flex flexDir="column" gap="1em">
                            <Heading fontSize="18px"><Link href={`/lecture/${lec?.slug?.current}`}>{lec.title}</Link></Heading>
                            <Text>{lec.description || handleDescription(lec)}</Text>
                        </Flex> 
                    </Flex>
                )
            }) : 'There are no lectures for this course'}
            </Flex>
        </Flex>
    )
}

export default CourseLectures