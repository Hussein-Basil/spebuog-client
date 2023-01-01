import { BsDropletFill } from 'react-icons/bs'
import { IoIosFlask } from 'react-icons/io'

import React, { useState, useEffect } from 'react'
import { Flex, Icon, Divider, Text, useBreakpointValue, LinkBox, LinkOverlay } from '@chakra-ui/react'
import Course from '../../../components/Course'
import { useUser } from '../../../auth/UserContext'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination, Autoplay } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css'


const CoursesPreview = () => {
    const { events } = useUser()
    const [swipe, setSwipe] = useState()
    const [swipe2, setSwipe2] = useState()
    const responsiveSlides = useBreakpointValue({ base: 1, md:2, lg: 3, xl: 4})
    const [drillingCourses, setDrillingCourses] = useState([])
    const [reserviorCourses, setReserviorCourses] = useState([])

    useEffect(() => {
        fetch('https://spebuog-dev.netlify.app/.netlify/functions/api/event?q=drilling')
        .then(res => res.json())
        .then(data => setDrillingCourses(data.error ? [] : data.events))

        fetch('https://spebuog-dev.netlify.app/.netlify/functions/api/event?q=reservoir')
        .then(res => res.json())
        .then(data => setReserviorCourses(data.error ? [] : data.events))
    }, [])

    return (
        <LinkBox>
        <Flex flexDir="column" gap="1.5em" mt="1.5em">
            <Flex align="center" gap="1em">
                {/* <Icon as={BsDropletFill} w="28px" h="28px" /> */}
                <Text fontSize="28px" fontWeight="medium">Drilling Engineering</Text>
            </Flex>
            <Flex flexDir="row" gap="3em" overflow="auto">
            <Flex w="100%" align="center" >
                    {/* <BsChevronLeft cursor="pointer" onClick={() => swipe2?.slidePrev()} /> */}
                    <Swiper
                        onBeforeInit={(swipper) => setSwipe2(swipper)}
                        modules={[Autoplay, Pagination, EffectFade]}
                        effect
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        speed={800}
                        style={{
                            width: '100%',
                            paddingBottom: "5em",
                            gap: "1em"
                        }}
                        slidesPerView={responsiveSlides}
                        slidesPerGroup={responsiveSlides}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        
                    >
                    {drillingCourses?.length ? drillingCourses.slice(0, 5).map((event, idx) => (
                        <SwiperSlide style={{ display: "flex", justifyContent: responsiveSlides == 1 ? "center": "space-between" }}>
                            <LinkOverlay href={`/${["course_lecture", "webinar"].includes(event.evnet_type) ? "lecture" : "course"}/${event.uid}`}>
                                <Course course={event} key={idx} />
                            </LinkOverlay>
                        </SwiperSlide>
                    )) : (
                        <>
                <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
                    <Course />
                </SwiperSlide>
                <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
                    <Course />
                </SwiperSlide>
                <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
                    <Course />
                </SwiperSlide>
                <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
                    <Course />
                </SwiperSlide>
            </>
                    )}
                    </Swiper>
                    {/* <BsChevronRight cursor="pointer" onClick={() => swipe2?.slideNext()} /> */}
                </Flex>
            </Flex>
        </Flex>
        <Divider my="2em" />
        <Flex flexDir="column" gap="1.5em">
            <Flex align="center" gap="1em">
                {/* <Icon as={IoIosFlask} w="28px" h="28px" /> */}
                <Text fontSize="28px" fontWeight="medium">Reservoir Engineering</Text>
            </Flex>
            <Flex flexDir="row" gap="3em" overflow="auto">
                <Flex w="100%" align="center">
                    {/* <BsChevronLeft cursor="pointer" onClick={() => swipe?.slidePrev()} /> */}
                    <Swiper
                        onBeforeInit={(swipper) => setSwipe2(swipper)}
                        modules={[Autoplay, Pagination, EffectFade]}
                        effect
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: true,
                        }}
                        speed={800}
                        style={{
                            width: '100%',
                            paddingBottom: "5em",
                            gap: "1em"
                        }}
                        slidesPerView={responsiveSlides}
                        slidesPerGroup={responsiveSlides}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        
                    >
                    {reserviorCourses?.length ? reserviorCourses.slice(0, 5).map((event, idx) => (
                        <SwiperSlide style={{ display: "flex", justifyContent: responsiveSlides == 1 ? "center": "space-between" }}>
                            <LinkOverlay href={`/${["course_lecture", "webinar"].includes(event.evnet_type) ? "lecture" : "course"}/${event.uid}`}>
                                <Course course={event} key={idx} />
                            </LinkOverlay>
                        </SwiperSlide>
                    )) : (
                        <>
                <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
                    <Course />
                </SwiperSlide>
                <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
                    <Course />
                </SwiperSlide>
                <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
                    <Course />
                </SwiperSlide>
                <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
                    <Course />
                </SwiperSlide>
            </>
                    )}
                    </Swiper>
                    {/* <BsChevronRight cursor="pointer" onClick={() => swipe?.slideNext()} /> */}
                </Flex>
            </Flex>
        </Flex></LinkBox>
    )
}

export default CoursesPreview