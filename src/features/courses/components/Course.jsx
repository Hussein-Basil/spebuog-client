import React from 'react'
import { Flex, Text, Skeleton, SkeletonText, LinkBox, LinkOverlay, Divider, Avatar, Image } from '@chakra-ui/react'
import moment from 'moment'
import { useUser } from '../../../contexts/UserContext'
import background  from '../../../assets/home/background.svg'

const Course = ({
    course,
    loading,
    ...props
}) => {
    const { urlFor } = useUser()
    const handleDescription = (course) => {
        let result = ''

        if (course.description) {
            result = course.description
        }
        else if (['course', 'internship'].includes(course.event_type)) {
            let count = course.children?.length ? `in ${course.children.length} ${course.event_type === 'internship' ? 'courses' : 'lectures'}` : ''
            let instructors = course.instructors.length
            instructors = instructors ? instructors === 1 ? ` with ${course.instructors.at(0).name}` : ` ${course.instructors.length} instructors` : ''
            result = `Join this ${course.event_type} to learn about ${course.title} ${count}${instructors}`
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

    else if (!course) {
        return ''
    }

    else return (
        <Flex
            flexDir="column"
            border="1px solid rgb(218, 220, 224)"
            minH="400px"
            minW="320px"
            maxW="280px"
            borderRadius="16px"
            cursor="pointer"
            alignSelf="center"
            justifySelf="center"
            userSelect="none"
            _hover={{ 
                boxShadow: "rgb(60 64 67 / 30%) 0px 1px 3px 0px, rgb(60 64 67 / 15%) 0px 4px 8px 3px"
            }}
            mb="10px"
            
            {...props}
            // onClick={() => navigate(`/course/${course.uid}`)}
        >
            <LinkBox 
            >
                <LinkOverlay href={['course_lecture', 'webinar'].includes(course?.event_type) ? `/lecture/${course.slug?.current}` : `/course/${course.slug?.current}`}>
                <Flex className="rounded-top" style={{
                    // backgroundImage: `url(${course.image? urlFor(course.image) : background})`,
                    backgroundImage: course.image ? `url(${ urlFor(course.image)})` : course.video? `url(https://img.youtube.com/vi/${course.video?.split('/').pop()}/sd3.jpg)` : `url(${background})`,
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "center",
                    position: "relative",
                    height: '100%',
                    padding: '0px',
                    minHeight: "160px",
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px'
                }}></Flex>
                <Flex flexDir="column" justify="space-between" minH="240px">
                    <Flex px="28px" py="1em" flexDir="column" gap="0.5em">
                        <Flex gap="0.35em" align="center">
                            <Text textTransform="uppercase" fontSize="16px" >
                                {course.event_type === "course_lecture" ? "lecture" : course.event_type}
                            </Text>
                            &sdot;
                            <Text fontSize="14px">
                                {moment(course.date).fromNow()}
                            </Text>
                        </Flex>

                        <Text fontWeight="700" fontSize="16px" lineHeight="24x">{course.title}</Text>
                        <Text fontSize="14px" lineHeight="20px">
                            {handleDescription(course)}
                        </Text>
                    </Flex>
                    {course?.children?.length || course?.instructors?.length ?
                    <Flex px="28px" py="0.75em" gap="0.5em" align="center" justify="space-between" borderTop="1px solid rgb(218, 220, 224)">
                            {course.children?.length ? (
                                <Text
                                    fontWeight="600"
                                    fontSize="18px"
                                >
                                {course.children.length} {course.event_type === 'internship' ? 'courses' : 'lectures'}
                                </Text>
                            ) : 
                                <Text
                                    fontSize='16px'
                                    fontWeight="600"
                                >
                                    {course.instructors.length <= 1 ? 
                                        course.instructors?.at(0)?.name?.slice(0, 25)
                                    : 
                                        course.instructors.length + ' instructors'
                                    } 
                                </Text>
                            }
                        <Flex gap="0.5em">
                            {['webinar', 'course_lecture'].includes(course.event_type) || course?.instructors?.length < 3 ? (
                                course.instructors.map((instructor, idx) => (
                                    <Image 
                                        w="32px"
                                        h="32px"
                                        key={idx}
                                        src={instructor?.image ? urlFor(instructor?.image).width(32) : ''} as={Avatar} 
                                    />
                                ))
                            ) : (course.instructors?.length >= 3 ? (
                                <Flex align="center" gap="0.5em">
                                    <Text>+{course.instructors.length - 1} others</Text>
                                    <Image 
                                        w="32px"
                                        h="32px"
                                        src={course.instructors?.at(0)?.image ? urlFor(course.instructors?.at(0)?.image).width(32) : ''} 
                                        as={Avatar} 
                                    />
                                </Flex>
                            ) : '')}
                        </Flex>
                    </Flex>
                    : ''}
                </Flex>
            </LinkOverlay></LinkBox>
        </Flex>
        
    )
}
export default Course