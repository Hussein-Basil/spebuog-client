import React, { useState, useEffect } from 'react'
import { Heading, useBreakpointValue } from '@chakra-ui/react'
import Course from '../../courses/components/Course'
import ResponsiveWidth from '../../../layouts/ResponsiveWidth'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade, Pagination, Autoplay } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css'
import useSWR from 'swr'

const RelatedEvents = ({
    type, 
    tags, 
    categoryID,
    eventID
}) => {
    const [related, setRelated] = useState(null)
    const responsiveSlides = useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 4})
    const paddingBottom = useBreakpointValue({ base: '5em', xl: ''})
    
    const { data, isLoading } = useSWR(`
        *[_type == 'event' && _id != '${eventID}'] | score(
            boost(tags match '${tags?.at(0)}', 4),
            title match '${tags?.at(0)}',
            category._ref match '${categoryID}',
            event_type == '${type}'
        )[0..4]{
            ...,
            parent->,
            event_type in ['course_lecture', 'webinar'] => {
                instructors[]->,
            },
            event_type == 'course' => {
                'children': *[_type == 'event' && references(^._id)]{..., instructors[]-> },
                'instructors': *[_type == 'event' && references(^._id)].instructors[]->
            },
            event_type == 'internship' => {
                'children': *[_type == 'event' && references(^._id)]{
                    ..., 
                    'instructors': *[_type == 'event' && references(^._id)].instructors[]-> 
                },
                'instructors': *[_type == 'event' && references(^._id)] {
                    'children': *[_type == 'event' && references(^._id)]{ instructors[]-> }
                }.children[].instructors[]
            }
        }
    `)

    useEffect(() => {
        setRelated(data?.length ? data : [])
    }, [data])

    const nullSlides = [...Array(3)].map((_, key) => (
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }} key={key}>
            <Course loading={true} />
        </SwiperSlide>
    ))

    if (!isLoading && !related?.length) {
        return ''
    }
    
    return (
        <ResponsiveWidth gap="2em" id="supporting-lectures" mt={{ base: "1em", lg: "3em"}} width="100%">
            <Heading fontSize="24px" fontWeight="medium">Related Lectures</Heading>
            <Swiper
                modules={[Autoplay, Navigation, EffectFade, Pagination]}
                effect
                pagination={{
                    clickable: true
                }}
                speed={800}
                slidesPerView={responsiveSlides}
                slidesPerGroup={responsiveSlides}
                style={{
                    width: '100%',
                    paddingBottom: related?.length ? paddingBottom : 0,
                    gap: '1em',
                }}
                spaceBetween={16}
            >
                {isLoading ? nullSlides : related.slice(0, 4).map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <Course course={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </ResponsiveWidth>
    )
}

export default RelatedEvents