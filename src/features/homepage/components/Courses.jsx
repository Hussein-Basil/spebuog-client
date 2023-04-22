import React from 'react'
import { Flex,  Heading,  LinkBox, LinkOverlay, Text, useBreakpointValue } from '@chakra-ui/react'
import Course from '../../courses/components/Course'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css'

import '../styles.css'
import useGetHomeCourses from '../../../hooks/useGetHomeCourses'

const Courses = () => {
    const { events, isLoading } = useGetHomeCourses()

    const nullSlides = [...Array(4)].map((_, key) => (
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }} key={key}>
            <Course loading={true} />
        </SwiperSlide>
    ))

    return (
        
        <Flex flexDir="column" align="center" my="3em" w={{
            base: '100vw',
            lg: '1114px',
            xl: '1400px',
            '2xl': '1400px',
        }}>
            <Heading fontSize="28px" fontWeight="medium" mb="0.5" alignSelf="start" ml="0.5em" >Browse Our Courses</Heading>
            <Text mb="1em" textAlign="start" alignSelf="start" ml="1em">Grow your skills by studying from our exciting courses</Text>
            <Flex w="100%" align="center">
            {/* <BsChevronLeft cursor="pointer" onClick={() => swipe?.slidePrev()} /> */}
            <Swiper
                speed={300}
                style={{
                    width: '100%'
                    // minHeight: "480px",
                }}
                slidesPerView={useBreakpointValue({ base: 'auto', lg: 3, xl: 4})}
                slidesPerGroup={1}
                centeredSlides={true}
                centeredSlidesBounds={true}
                initialSlide={1}
            >
            {isLoading ? nullSlides : events?.slice(0, 10).map((event, idx) => (
                <SwiperSlide style={{ display: "flex", justifyContent: "center", width: '80vw', maxWidth: 'calc(320px + 1em)', minWidht: '80vw' }}>
                    <LinkBox >
                    <LinkOverlay  href={`/${["course_lecture", "webinar"].includes(event.event_type) ? 'lecture' : 'course'}/${event.id}`}>
                        <Course course={event} key={idx} maxW="320px" minW="(80vw - 1em)" w="calc(80vw - 1em)" />
                    </LinkOverlay>
                    </LinkBox>
                </SwiperSlide>
            ))}
            </Swiper>
            {/* <BsChevronRight cursor="pointer" onClick={() => swipe?.slideNext()} /> */}
            </Flex>
            
        </Flex>
    )
}

export default Courses