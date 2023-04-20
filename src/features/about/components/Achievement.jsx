import React, { useState } from 'react'
import { Flex, Heading, Grid, Image, Text } from '@chakra-ui/react'

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css'

import '../styles.css'

function importAll(r) {
    let images = []
    r.keys().forEach((item) => { images.push(r(item)) });
    return images
}

const Photos = () => {
    const photos = [
        {
            title: 'Sustainability practice in oil and gas',
            items: importAll(require.context('../../../assets/photos/classroom')),
            description: 'Part of an offline workshop which is held especially for industrial management and other engineering departments, Monday and Tuesday came across 28 - 29 March and was presented by Dr. Yousif Munadhil Ibrahim.'
        }, {
            title: 'BUOG SPE Presentation Competition 2022',
            items: importAll(require.context('../../../assets/photos/competition')),
            description: "The presentation competition was held by the student chapter in March 20th, 2022. Group of 20 Oil and Gas Student Teams. The presentations marked the topic of natural gas and related inspection, extraction and processing. \
            Objectives of the competition:\n \
            1-Increase students' interaction in terms of developing their skills in public speaking and presentation.\n \
            2-Enhance students' spirit of discussion with regard to the scientific subject.\n \
            3-Students return to participate in various in-person events of what they lost during the COVID-19 period.\
            "
        }, {
            title: 'BUOG SPE Presentation Competition 2022',
            items: importAll(require.context('../../../assets/photos/presentation')),
        }, {
            items: importAll(require.context('../../../assets/photos/spe_presentation')),
            description: "The first-stage students of the Department of Chemical Engineering and Oil Refining are invited to familiarize them with the concepts of the specialization of chemical engineering, oil refining and engineer's workplaces as well as to explain a road map of how the student prepares himself during the university period and enhance it with the necessary skills as well as their introduction to the World Oil Engineers Association and its benefits for the purpose of joining the university's student chapter."
        }, {
            title: 'Cleaning the Sindbad Island',
            items: importAll(require.context('../../../assets/photos/volunteering')),
            description: "The voluntary campaign to clean the island of Sinbad and the banks of the Shatt Al-Arab was organized by the student chapter of SPE, which included a group of university youth. The site was cleaned and the waste was removed successfully."
        }, {
            items: importAll(require.context('../../../assets/photos/bazaar')),
            description: ''
        }
    ]
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalData, setModalData] = useState({})

    return (
        <Flex flexDir="column" align="center" gap="2em"  >
            <Heading fontSize="28px" fontWeight="semibold">Achievements</Heading>
            <Grid gridTemplateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap="1em">
                {photos.map(photo => (
                    <Image src={photo.items?.at(0)} w="300px" h="300px" objectFit="cover" onClick={() => {
                        onOpen()
                        setModalData(photo)
                    }} />
                ))}
            </Grid>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent position="absolute" top="20px" my="0" maxW={{ base: "95%", lg: "428px" }}>
                    <ModalHeader >{modalData.title}</ModalHeader>
                    <ModalCloseButton ml="1em" />
                    <ModalBody >
                        <Flex flexDir="column" gap="2em" mb="1em" >
                            <Swiper
                                modules={[Navigation, EffectFade]}
                                navigation
                                effect
                                speed={800}
                                slidesPreview={1}
                                style={{
                                    width: '100%',
                                }}

                            >
                                {modalData?.items?.map((item, idx) => (
                                    <SwiperSlide  >
                                        <Image key={idx} src={item} w="400px" h="400px" objectFit="cover" userSelect="none" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <Flex>
                                {modalData.description && <Text alignSelf="start">{modalData.description.split('\n').map(_ => <>{_}<br /></>)}</Text>}
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent >
            </Modal >
        </Flex >
    )
}

export default Photos