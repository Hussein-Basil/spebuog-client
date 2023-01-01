import React from 'react'
import { Flex, Grid, Text, Image, Avatar, Heading, Link, SkeletonCircle, SkeletonText, useBreakpointValue } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade, Pagination, Autoplay } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css'

const Speakers = ({ speakers }) => {
    const responsiveSlides = useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 4})

    return (
        <Flex flexDir="column" gap="2em" mt="2em" id="instructors" >
        <Heading fontSize="24px" fontWeight="medium">Instructor{'s' && speakers?.length > 1 }</Heading>
        <Flex align="center" gap="1em" >
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
                    width: '110%',
                }}
            >

            {speakers?.length ? speakers.map(speaker => (
                <SwiperSlide >
                    <Flex align="center" gap="1em" maxW="450px">
                        <Image
                            src={`https://spebuog-dev.vercel.app/images/${speaker.image}`}
                            as={Avatar}
                            w="100px"
                            h="100px"
                            borderRadius="50%"
                            objectFit="cover" />
                        <Flex flexDir="column">
                            <Link href={`/instructor/${speaker.uid}`} fontSize="18px" fontWeight="medium">{speaker.name}</Link>
                            <Text fontSize="16px">{speaker.position}</Text>
                            <Text fontSize="16px">{speaker.organization}</Text>
                        </Flex>
                    </Flex>
                </SwiperSlide>
            )) : [...Array(1)].map((_, idx) => (
                <SwiperSlide>
                    <Flex align="center" gap="1em" maxW="450px" key={idx}>
                        <SkeletonCircle
                            w="100px"
                            h="100px"
                            borderRadius="50%"
                        />
                        <Flex flexDir="column">
                            <SkeletonText  noOfLines={1} mt="4" w="200px" />
                            <SkeletonText  noOfLines={1} mt="4" w="100px"/>
                            <SkeletonText  noOfLines={1} mt="4" w="80px"/>
                        </Flex>
                    </Flex>
                </SwiperSlide>
            ))
                
            }
            </Swiper>
        </Flex>
    </Flex>
    )
}

export default Speakers