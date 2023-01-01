import React, { useState } from 'react'
import { Button, Flex,  Heading,  LinkBox, LinkOverlay, Text, useBreakpointValue } from '@chakra-ui/react'
import Course from '../../components/Course'
import { useUser } from '../../auth/UserContext'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css'

import './styles.css'

const Courses = () => {
    const { events } = useUser()
    const [swipe, setSwipe] = useState()


    return (
        
        <Flex flexDir="column" align="center" my="3em" w={{
            base: '90vw',
            lg: '1114px',
            xl: '1440px',
            '2xl': '1500px',
        }}>
            <Heading fontSize="28px" fontWeight="medium" mb="0.5">Browse Our Courses</Heading>
            <Text mb="1em" textAlign="center">Grow your skills by studying from our exciting courses</Text>
            <LinkBox>
                <LinkOverlay  href="/courses" w="fit-content">
                    <Button mb="2em">View All Courses</Button>
                </LinkOverlay>
            </LinkBox>
            <Flex w="100%" align="center">
            {/* <BsChevronLeft cursor="pointer" onClick={() => swipe?.slidePrev()} /> */}
            <Swiper
                onBeforeInit={(swipper) => setSwipe(swipper)}
                modules={[Pagination, EffectFade]}
                effect
                speed={800}
                style={{
                    width: '100%',
                    paddingBottom: "5em",
                    // minHeight: "480px",
                }}
                slidesPerView={useBreakpointValue({ base: 1, md:2, lg: 3, xl: 4})}
                slidesPerGroup={useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 4})}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
            >
            {events?.length ? events.slice(0, 10).map((event, idx) => (
                <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
                    <LinkBox>
                    <LinkOverlay href={`/${["course_lecture", "webinar"].includes(event.event_type) ? 'lecture' : 'course'}/${event.uid}`}>
                        <Course course={event} key={idx} />
                    </LinkOverlay>
                    </LinkBox>
                </SwiperSlide>
            )) : [...Array(4)].map((_, idx) => (
                <SwiperSlide key={idx} style={{ display: "flex", justifyContent: "center" }}>
                    <Course />
                </SwiperSlide>
            ))}
            </Swiper>
            {/* <BsChevronRight cursor="pointer" onClick={() => swipe?.slideNext()} /> */}
            </Flex>
            
        </Flex>
    )
}

export default Courses