import React, { useState, useEffect } from 'react'
import { Flex, Divider, Text, useBreakpointValue, LinkBox, LinkOverlay } from '@chakra-ui/react'
import Course from '../../../components/Course'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css'

import useSWR from 'swr'

const CoursesPreview = () => {
    const responsiveSlides = useBreakpointValue({ base: 'auto', lg: 3, xl: 4})
    const centeredSlides = useBreakpointValue({ base: true, lg: false })
    const initialSlide = useBreakpointValue({ base: 1, md: 0 })
    const [categories, setCategories] = useState([])

    const { data, isLoading } = useSWR(`
        *[_type == 'category']{ 
            title,
            description,
            'children': *[_type == 'event' && references(^._id)]{
                ...,
                instructors[]->, 
                parent->,
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
        (isLoading ? [...Array(3)] : categories).map((category, idx) => (
            !isLoading && !category?.children?.length ? '' :
            <Flex 
                key={idx}
                flexDir="column" 
                gap="1.5em" 
                mt="1.5em"
            >
                <Text 
                    fontSize="20px" 
                    fontWeight="bold"
                    lineHeight="24px"
                    mx="2em"
                >{category?.title}</Text>
                <Flex flexDir="row" gap="3em" overflow="auto">
                    <Flex w="100%" align="center">
                        <Swiper
                            speed={300}
                            slidesPerView={responsiveSlides}
                            slidesPerGroup={1}
                            slidesPerGroupAuto={true}
                            centeredSlides={centeredSlides}
                            initialSlide={initialSlide}
                        >
                        {isLoading ? nullSlides : category.children?.map((event, idx) => (
                            <SwiperSlide 
                                key={idx} 
                                style={{ 
                                    display: "flex", 
                                    justifyContent: responsiveSlides === 1 ? "center": "space-between",
                                    width: '80vw', 
                                    minWidht: '80vw',
                                    maxWidth: 'calc(320px + 1em)', 
                                    marginLeft: idx == 0 ? '2em': '0',
                                    marginRight: idx == category?.children?.length - 1 ? '2em': '0'
                                }}
                            >
                                 <LinkBox><LinkOverlay href={`/${["course_lecture", "webinar"].includes(event.evnet_type) ? "lecture" : "course"}/${event.slug?.current}`}>
                                    <Course 
                                        course={event} 
                                        maxW="320px" 
                                        minW="(80vw - 1em)" 
                                        w="calc(80vw - 1em)"
                                    />
                                </LinkOverlay></LinkBox>
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    </Flex>
                </Flex>
                <Divider mt="1em" display={idx === categories.length-1 ? 'none' : ''} />
            </Flex>
        ))
    )
}

export default CoursesPreview