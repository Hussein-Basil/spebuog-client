import React, { useState } from 'react'
import { Flex, Heading, Grid, Image, Text } from '@chakra-ui/react'

import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import Lorem from '../../../components/Lorem'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css'

import './styles.css'

function importAll(r) {
    let images = []
    r.keys().map((item) => { images.push(r(item)) });
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
            description: "تحت رعاية السيد رئيس جامعة البصرة للنفط و الغاز الدكتور محمد هليل الكعبي المحترم انطلقت يوم 24 من الشهر الحالي التصفية النهائية BUOG SPE Presentation Competition 2022 بحضور عدد من الشركات و السادة من جامعة البصرة للنفط و الغاز انطلقت المنافسة بين 6 فرق على المراكز الأربع الاولى و بتقييم من لجنة مختصة في جامعة البصرة للنفط و الغاز ، اللجنة : - د.ليال فاضل - أ.نجاح سعيد - أ.أسماعيل رعد عبد الباقي -أ.علي خضير الجوائز المقدمة : ▪️المركز الاول : 120 الف دينار عراقي مع دورة تدريبية مقدمة من AGRC ▪️المركز الثاني : 90 الف دينا عراقي ▪️المركز الثالث : 60 الف دينار عراقي ▪️المركز الرابع : 50 الف دينار عراقي حصلت الفرق من طلاب قسم هندسة النفط و الغاز و للمراحل الثالثة و الرابعة على المراكز الاربع الاولى بعناوين مختلفة بتقديم دام لمدة 20 دقيقة بعد ان تمت مناقشتها مع اللجنة المختصة من جامعة البصرة للنفط و الغاز"
        }, {
            title: 'BUOG SPE Presentation Competition 2022',
            description: 'انطلقت يوم 22 - 23 من الشهر الحالي مسابقة العروض التقديمة / الجولة الاولى بجامعة البصرة للنفط والغاز بمشاركة 20 فريق من الاقسام التالية: -قسم هندسة النفط والغاز -قسم الهندسة الكيميائية وتكرير النفط -قسم هندسة البوليمرات والبتروكيمياويات تحت عنوان natural gas وبتقييم لجنة  مختصة من كادر جامعة البصرة للنفط والغاز',
            items: importAll(require.context('../../../assets/photos/presentation')),
        }, {
            items: importAll(require.context('../../../assets/photos/spe_presentation')),
        }, {
            title: 'Cleaning the Sindbad Island',
            items: importAll(require.context('../../../assets/photos/volunteering')),
            description: 'صور من الحملة التطوعية التي نظمت من قبل فريق ادم التطوعي بمشاركة الفرع الطلابي لجمعية المهندسيين العالمية في جامعة البصرة للنفط والغاز BUOG لتنظيف جزيرة السندباد',
        }, {
            items: importAll(require.context('../../../assets/photos/bazaar')),
            description: <Lorem count={20} />
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
                        {/* <Lorem count={1} /> */}
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
                                {modalData.description ? <Text alignSelf="start">{modalData.description}</Text> : <Lorem count={4} />}
                            </Flex>
                        </Flex>
                    </ModalBody>

                    {/* <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter> */}
                </ModalContent >
            </Modal >
        </Flex >
    )
}

export default Photos