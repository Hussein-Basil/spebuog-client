import React from 'react'
import { Flex, Text, Skeleton, SkeletonText, LinkBox, LinkOverlay } from '@chakra-ui/react'
import moment from 'moment'
import { useUser } from '../auth/UserContext'
import background  from '../assets/background.svg'

const Course = ({
    course,
    loading,
    ...props
}) => {
    const { urlFor } = useUser()

    if (loading) {
        return (
            <Flex
            flexDir="column"
            border="1px solid #c8c8c8"
            minW="350px"
            maxW="410px"
            borderRadius="10px"
            overflow="hidden"
            cursor="pointer"
            alignSelf="center"
            justifySelf="center"
            p="0"
            
            {...props}
            // onClick={() => navigate(`/course/${course.uid}`)}
        >
            <Skeleton className="rounded-top" style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                minHeight: "160px",
            }}>
            </Skeleton>
            <Flex px="28px" py="1em" flexDir="column" gap="1em">
                <SkeletonText noOfLines={1} w="90px" />
                <SkeletonText mt='4' noOfLines={1} spacing='4' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' />
                <SkeletonText noOfLines={1} mt='8' w="90px" />
            </Flex>
        </Flex>
        )
    }

    const handleDescription = (course) => {
        let result = ''

        if (course.description) {
            result = course.description
        }
        else if (['course', 'internship'].includes(course.event_type)) {
            let count = course.children?.length ? `in ${course.children.length} ${course.event_type === 'internship' ? 'courses' : 'lectures'}` : ''
            let instructors = course.instructors.length
            instructors = instructors ? instructors === 1 ? course.instructors.at(0) : `${course.instructors.length} instructors` : ''
            result = `Join this ${course.event_type} to learn about ${course.title} ${count} with ${instructors}`
        }

        else if (!course.instructors?.length) {
            result = `Join this ${course.event_type} to learn about ${course.title}`
        }

        else if (course.instructors?.length) {
            let date = course.date ? `On ${moment(course.date).format('MMMM DD, YYYY')}, ` : ''
            let position = course.instructors.at(0).position
            let organization = course.instructors?.at(0).organization 
            
            let name = course.instructors.at(0).name
            let work = position && organization ? ` who is ${position} at ${organization}` : ''
            let others = course.instructors.length > 1 ? ' and others' : ''
            let parent = course.parent ? ` as a part of the ${course.parent.event_type} ${course.parent.title}` : ''
    
            result = `${date + name + work + others} presented a lecture about ${course.title + parent}.`
        }

        let maxLen = result.indexOf(' ', 160)
        return result.slice(0,  maxLen > 0 ? maxLen : undefined) + (maxLen > 0 ? '...' : '')
    }

    if (!course) {
        return ''
    }

    return (
        <LinkBox><LinkOverlay href={['course_lecture', 'webinar'].includes(course?.event_type) ? `/lecture/${course.slug?.current}` : `/course/${course.slug?.current}`}>
        <Flex
            flexDir="column"
            m="1px"
            boxShadow="0 0 0 1px #e1e1e1"
            minH="400px"
            minW="320px"
            maxW="410px"
            borderRadius="10px"
            overflow="hidden"
            cursor="pointer"
            alignSelf="center"
            justifySelf="center"
            userSelect="none"
            {...props}
            // onClick={() => navigate(`/course/${course.uid}`)}
        >
                <Flex className="rounded-top" style={{
                    // backgroundImage: `url(${course.image? urlFor(course.image) : background})`,
                    backgroundImage: course.image ? `url(${ urlFor(course.image)})` : course.video? `url(https://img.youtube.com/vi/${course.video?.split('/').pop()}/sd3.jpg)` : `url(${background})`,
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "center",
                    position: "relative",
                    minHeight: "160px",
                }}></Flex>
                
                <Flex px="28px" py="1em" flexDir="column" gap="0.5em">
                    <Text textTransform="uppercase" fontSize="16px">{course.event_type === "course_lecture" ? "lecture" : course.event_type}</Text>
                    <Text fontWeight="medium" fontSize="18px">{course.title}</Text>
                    <Text fontSize="16px">{handleDescription(course)}</Text>
                </Flex>
        </Flex>
        </LinkOverlay></LinkBox>
    )
}
export default Course