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
import { useEffect } from 'react'

const Courses = () => {
    const { client } = useUser()
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        client.fetch(`
            *[_type == 'event' && event_type in ['course', 'internship']][0..3] 
            { 
                event_type, 
                title, 
                description, 
                slug,
                event_type == 'course' => {
                    'instructors': array::unique(*[_type == 'event' && references(^._id)]{instructors[]->{name}}.instructors[].name)
                },
                event_type == 'internship' => {
                    'instructors': array::unique(*[_type == 'event' && references(^._id)] {
                        'children': *[_type == 'event' && references(^._id)]
                    }.children[].instructors[]._ref)
                }
            }
        `)
        .then(result => {
            setEvents(result)
            setLoading(false)
        })
    }, [])

    const nullSlides = Array(4).fill(
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
            <Course loading={true} />
        </SwiperSlide>
    )

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
            {loading ? nullSlides : events?.slice(0, 10).map((event, idx) => (
                <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
                    <LinkBox>
                    <LinkOverlay href={`/${["course_lecture", "webinar"].includes(event.event_type) ? 'lecture' : 'course'}/${event.id}`}>
                        <Course course={event} key={idx} />
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