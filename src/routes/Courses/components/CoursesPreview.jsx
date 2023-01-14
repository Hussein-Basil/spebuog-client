import React, { useState, useEffect } from 'react'
import { Flex, Divider, Text, useBreakpointValue, LinkBox, LinkOverlay } from '@chakra-ui/react'
import Course from '../../../components/Course'
import { useUser } from '../../../auth/UserContext'
import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination, Autoplay } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css'

import useSWR from 'swr'

const CoursesPreview = () => {
    const responsiveSlides = useBreakpointValue({ base: 1, md:2, lg: 3, xl: 4})
    const [categories, setCategories] = useState([])

    const { data, isLoading } = useSWR(`
        *[_type == 'category']{ 
            title,
            description,
            'children': *[_type == 'event' && references(^._id)]{
                ..., 
                instructors[]->, 
                parent->,
                event_type in ['course', 'internship'] => {
                    'children': *[_type == 'event' && references(^._id)]
                }
            }
        }
    `)

    useEffect(() => {
        setCategories(data?.length ? data : [])
    }, [data])

    const nullSlides = [...Array(4)].map((_, key) => (
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }} key={key}>
            <Course loading={true} />
        </SwiperSlide>
    ))

    return (
        (isLoading ? [...Array(3)] : categories).map(category => (
            !isLoading && !category?.children?.length ? '' :
            <Flex flexDir="column" gap="1.5em" mt="1.5em" as={motion.div} initial={{ opacity: 0}} whileInView={{opacity: 1}} transition={{ delay: 1 }}>
                <Text fontSize="28px" fontWeight="medium">{category?.title}</Text>
                <Flex flexDir="row" gap="3em" overflow="auto">
                    <Flex w="100%" align="center" >
                        <Swiper
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
                        {isLoading ? nullSlides : category.children?.map((event, idx) => (
                            <SwiperSlide style={{ display: "flex", justifyContent: responsiveSlides === 1 ? "center": "space-between" }}>
                                <LinkBox><LinkOverlay href={`/${["course_lecture", "webinar"].includes(event.evnet_type) ? "lecture" : "course"}/${event.slug?.current}`}>
                                    <Course course={event} key={idx} />
                                </LinkOverlay></LinkBox>
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    </Flex>
                </Flex>
                <Divider mt="-2em"/>
            </Flex>
        ))
    )
}

export default CoursesPreview