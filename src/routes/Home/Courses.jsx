import React, { useState } from 'react'
import { Button, Flex,  Heading,  LinkBox, LinkOverlay, Text, useBreakpointValue } from '@chakra-ui/react'
import Course from '../../components/Course'
import { useUser } from '../../auth/UserContext'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, FreeMode } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css'

import './styles.css'
import { useEffect } from 'react'
import useSWR from 'swr'

const Courses = () => {
    const [events, setEvents] = useState([])
    const { data, isLoading } = useSWR(`
        *[_type == 'event' && event_type in ['course', 'internship']][0..3] 
        { 
            event_type, 
            title, 
            description, 
            slug,
            date,
            event_type == 'course' => {
                'children': *[_type =='event' && references(^._id)],
                'instructors': *[_type == 'event' && references(^._id)]{instructors[]->{name, image, _id}}.instructors[]
            },
            event_type == 'internship' => {
                'children': *[_type =='event' && references(^._id)],
                'instructors': *[_type == 'event' && references(^._id)] {
                    'children': *[_type == 'event' && references(^._id)]{ instructors[]->{name, image, _id}}
                }.children[].instructors[]
            }
        }
    `) 

    useEffect(() => {
        setEvents(data?.map(event => {
            if (['course', 'internship'].includes(event?.event_type)) {
                console.log(event.instructors.filter(ins=>!ins?._id))
                return {
                    ...event,
                    instructors: [...new Map(event.instructors.filter(instructor => instructor).map(item => 
                        [item['_id'], item])).values()]
                }
            } else return event
        }))
    }, [data])

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