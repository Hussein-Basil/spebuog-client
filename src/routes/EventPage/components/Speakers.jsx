import React from 'react'
import { Flex,  Text, Image, Avatar, Heading, Link, SkeletonText, useBreakpointValue } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade, Pagination, Autoplay } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css'

import '../styles.css'
import { useUser } from '../../../auth/UserContext'

const Speakers = ({ instructors, loading }) => {
    const { urlFor } = useUser()
    const responsiveSlides = useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 4})

    const nullSlides = [...Array(4)].map((_, key) => (
        <SwiperSlide key={key}>
            <Flex align="center" gap="1em" maxW="450px">
                <Image
                    as={Avatar}
                    w="100px"
                    h="100px"
                    borderRadius="50%"
                    objectFit="cover" 
                />
                <Flex flexDir="column">
                     <SkeletonText noOfLines={1} w="150px" />
                     <SkeletonText noOfLines={1} mt="1em" w="50px" />
                     <SkeletonText noOfLines={1} mt="1em" w="70px"/>
                </Flex>
            </Flex>
        </SwiperSlide>
    ))

    return (
        <Flex flexDir="column" gap="2em" mt="2em" id="instructors" >
            <Heading fontSize="24px" fontWeight="medium">Instructors</Heading>
            <Flex align="center" gap="1em" >
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
                        width: '110%',
                        paddingBottom: !instructors?.length || instructors.length > responsiveSlides ? "5em" : 0
                    }}
                >

                {loading ? nullSlides : instructors?.length ? instructors.map(speaker => (
                    <SwiperSlide key={speaker.id}>
                        <Flex align="center" gap="1em" maxW="450px">
                            <Image
                                src={speaker.image ? urlFor(speaker.image) : ""}
                                as={Avatar}
                                w="100px"
                                h="100px"
                                borderRadius="50%"
                                objectFit="cover" 
                            />
                            <Flex flexDir="column">
                                <Link href={`/instructor/${speaker.slug?.current}`} fontSize="18px" fontWeight="medium">{speaker.name}</Link>
                                <Text fontSize="16px">{speaker.position}</Text>
                                <Text fontSize="16px">{speaker.organization}</Text>
                            </Flex>
                        </Flex>
                    </SwiperSlide>
                )) : 'There are no instructors for this course.'}
                </Swiper>
            </Flex>
        </Flex>
    )
}

export default Speakers