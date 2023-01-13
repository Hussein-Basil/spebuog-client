import React, { useState, useEffect } from 'react'
import { Heading, useBreakpointValue } from '@chakra-ui/react'
import Course from '../../../components/Course'
import ResponsiveWidth from '../../../components/ResponsiveWidth'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade, Pagination, Autoplay } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css'
import { useUser } from '../../../auth/UserContext'

const RelatedEvents = ({
    type, 
    tags, 
    categoryID,
    eventID
}) => {
    const [related, setRelated] = useState([])
    const responsiveSlides = useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 4})
    const { client } = useUser()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const isLecture = ['course_lecture', 'webinar'].includes(type)
        const query =  isLecture ? (
            `*[_type == 'event' && event_type in ['course_lecture', 'webinar'] && count(tags) > 0] &&
            _id != '${eventID}'
            `
        ) : (
            `*[_type == 'event' && references('${categoryID}') && _id != '${eventID}']`
        )

        if (isLecture && tags?.length === 0) {
            return setLoading(false)
        }

        client.fetch(query).then(result => {
            if (isLecture) {
                setRelated(result.filter(ev => ev.tags.filter(value => tags.includes(value)).length))
            } else {
                setRelated(result)
            }
            setLoading(false)
        })
    }, [])

    const nullSlides = Array(3).fill(
        <SwiperSlide>
            <Course />
        </SwiperSlide>
    )

    if (!loading && !related.length) {
        return ''
    }
    
    return (
        <ResponsiveWidth gap="2em" id="supporting-lectures">
            <Heading fontSize="24px" fontWeight="medium">Related Lectures</Heading>
            <Swiper
                modules={[Autoplay, Navigation, EffectFade, Pagination]}
                effect
                pagination={{
                    clickable: true
                }}
                speed={800}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: true,
                  }}
                slidesPerView={responsiveSlides}
                slidesPerGroup={responsiveSlides}
                style={{
                    width: '100%',
                    paddingBottom: !related?.length || related.length > responsiveSlides ? '5em' : 0
                }}
                spaceBetween={16}
            >
                {loading ? nullSlides : related.slice(0, 4).map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <Course course={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </ResponsiveWidth>
    )
}

export default RelatedEvents