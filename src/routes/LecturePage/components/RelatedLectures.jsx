import React, { useState, useEffect } from 'react'
import { Flex, Heading, useBreakpointValue } from '@chakra-ui/react'
import Course from '../../../components/Course'
import ResponsiveWidth from '../../../components/ResponsiveWidth'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade, Pagination, Autoplay } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css'


const RelatedLectures = ({ event }) => {
    const [related, setRelated] = useState([])
    const responsiveSlides = useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 4})

    useEffect(() => {
        if (event?.tags?.length > 0) {
            fetch(`https://spebuog-dev.netlify.app/.netlify/functions/api/event?tag=${event.tags.at(0)}`)
            .then(res => res.json())
            .then(data => setRelated(data.error ? [] : data.events))
        }
    })
    
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
                {related?.length ? related.filter(item => item.uid !== event.uid).slice(0, 4).map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <Course course={item} />
                    </SwiperSlide>
                )) : [...Array(3)].map((_, idx) => (
                    <SwiperSlide key={idx}>
                        <Course />
                    </SwiperSlide>
                ))}
            </Swiper>
        </ResponsiveWidth>
    )
}

export default RelatedLectures