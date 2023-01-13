import React, { useState, useEffect } from 'react'
import { Flex, Divider, Text, useBreakpointValue, LinkBox, LinkOverlay } from '@chakra-ui/react'
import Course from '../../../components/Course'
import { useUser } from '../../../auth/UserContext'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination, Autoplay } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css'


const CoursesPreview = () => {
    const { client } = useUser()
    const responsiveSlides = useBreakpointValue({ base: 1, md:2, lg: 3, xl: 4})
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        client.fetch(`
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
        .then(result => {
            setCategories(result)
            setLoading(false)
        })
    }, [])

    const nullSlides = Array(4).fill(
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
            <Course loading={true} />
        </SwiperSlide>
    )

    return (
        categories.map(category => (
            !category.children?.length ? '' : 
            <Flex flexDir="column" gap="1.5em" mt="1.5em">
                <Text fontSize="28px" fontWeight="medium">{category.title}</Text>
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
                        {loading ? nullSlides : category.children?.map((event, idx) => (
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