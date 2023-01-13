import React from 'react'
import Course from '../../../components/Course'
import { Flex, Heading, Grid } from '@chakra-ui/react'

const InternshipCourses = ({ courses, loading }) => {
    const nullItems = Array(12).fill(<Course loading={true} />)

    return (
        <Flex flexDir="column" gap="2em" mt="2em" id="lectures" maxW={{ base: "100%", lg: "1000px"}}>
            <Heading fontSize="24px" fontWeight="medium" >
                There are {courses?.length} Courses in this Internship
            </Heading>
            <Flex flexDir="column" gap="1em" >
                <Grid gridTemplateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                    xl: "repeat(4, 1fr)"
                }} gap="1.5em" alignItems="stretch">
                    {loading ? nullItems :
                        courses.map((course, idx) => (
                            <Course course={course} key={idx} />
                        ))
                    }
                </Grid>
            </Flex>
        </Flex>
    )
    
}

export default InternshipCourses