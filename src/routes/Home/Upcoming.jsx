import React from 'react'
import { Flex,  Button, Heading, Text, Image,  useBreakpointValue, LinkOverlay, LinkBox } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react'
import {  Pagination } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css'
import ResponsiveWidth from '../../components/ResponsiveWidth'

const UpcomingEvent = ({ event, size, ...props }) => {
  const largeWidths = {
    base: "90vw",
    lg: "486px"
  }

  const wideWidths = {
    base: "90vw",
    lg: "486px"
  }

  const mediumWidths = {
    base: "45vw",
    lg: "230px"
  }

  return (
    <Flex 
      flexDir="column" 
      bg="white" 
      p="1em" 
      gap="1em" 
      borderRadius="10px" 
      border="1px solid #c8c8c8"
      // width={ size === "medium" ? mediumWidths: size === "wide" ? wideWidths : largeWidths}
      height="fit-content"
      {...props}
    >
      <Flex gap="1em" fontSize="16px" align="center">
        <Text>{event.date}</Text>
        {/* <Divider orientation="vertical" height="12px" borderColor="black" />
        <Text>{event.platform}</Text> */}
      </Flex>
      {/* Event */}
      <Heading fontWeight={size==="large" ? "semibold" : "medium"} fontSize={size === "large" ? "24px" : "18px"}>{event.title}</Heading>
      {/* Speaker */}
      {["large", "wide"].includes(size) && (
        <Flex flexDir="row" align="center" gap="1em" textAlign="left" mb="1.5em">
          <Image src={event.speaker.image} w="62px" h="auto" />
          <Flex flexDir="column">
            <Text fontSize="18px" fontWeight="medium">{event.speaker.name}</Text>
            <Text fontSize="16px">{event.speaker.position}</Text>
          </Flex>
        </Flex>
      )}
      {/* {["large"].includes(size) && (
        <Text fontSize="16px">
          {event.description}
        </Text>
      )} */}
      {size === "large" && (
        <Flex flexDir="row" gap="0.5em">
          {event.tags?.map((tag, idx) => (
            <Flex
              key={idx}
              bg="#0D4C94c9"
              color="white"
              borderRadius="10px"
              // border="1px solid black"
              h="32px"
              fontSize="16px"
              px="18px"
              align="center"
            >
              {tag}
            </Flex>
          ))}
        </Flex>
      )}
    </Flex>
  )
}

const Upcoming = () => {
  const upcoming = [
    {
      title: 'Well Completion Operation and Equipment',
      // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan elementum sapien. Praesent sed varius purus. In hac habitasse platea dictumst.Vivamus vel sodales enim, a vehicula mi.Quisque odio ex, viverra eu metus quis, bibendum molestie risus.",
      tags: ['Completion', 'Well Intervention'],
      speaker: {
        image: 'https://spebuog-dev.vercel.app/images/sayed.png',
        name: 'Eng Elsayed Amer',
        position: 'Senior Petrolem Engineer'
      },
      date: 'Aug 8th, 2022'
    },
    {
      title: 'Well Completion Operation and Equipment',
      // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan elementum sapien. Praesent sed varius purus. In hac habitasse platea dictumst.Vivamus vel sodales enim, a vehicula mi.Quisque odio ex, viverra eu metus quis, bibendum molestie risus.",
      tags: ['Completion'],
      speaker: {
        image: 'https://spebuog-dev.vercel.app/images/sayed.png',
        name: 'Eng Elsayed Amer',
        position: 'Senior Petrolem Engineer'
      },
      date: 'Aug 8th, 2022'
    },
    {
      title: 'Well Completion Operation and Equipment',
      // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan elementum sapien. Praesent sed varius purus. In hac habitasse platea dictumst.Vivamus vel sodales enim, a vehicula mi.Quisque odio ex, viverra eu metus quis, bibendum molestie risus.",
      tags: ['Completion'],
      speaker: {
        image: 'https://spebuog-dev.vercel.app/images/sayed.png',
        name: 'Eng Elsayed Amer',
        position: 'Senior Petrolem Engineer'
      },
      date: 'Aug 8th, 2022'
    },
    {
      title: 'Well Completion Operation and Equipment',
      // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan elementum sapien. Praesent sed varius purus. In hac habitasse platea dictumst.Vivamus vel sodales enim, a vehicula mi.Quisque odio ex, viverra eu metus quis, bibendum molestie risus.",
      tags: ['Completion'],
      speaker: {
        image: 'https://spebuog-dev.vercel.app/images/sayed.png',
        name: 'Eng Elsayed Amer',
        position: 'Senior Petrolem Engineer'
      },
      date: 'Aug 8th, 2022'
    },
  ]
  const responsiveSlides = useBreakpointValue({ base: 1, md: 2, lg: 3 })
  // return (
  //   <Flex
  //     flexDir="column"
  //     align="center"
  //     justify="center"
  //     gap="2em"
  //     mb="5em"
  //     w="100vw"
  //     bg="#f1f1f1"
  //     pb="1em"
  //     pt="3em"
  //   >
  //     <Heading fontWeight="medium" fontSize="28px">Upcoming Events</Heading>
  //     <LinkBox><LinkOverlay href="/upcoming"><Button>View Calendar</Button></LinkOverlay></LinkBox>
  //     <ResponsiveWidth>
  //       <Swiper
  //         modules={[Pagination]}
  //         pagination={{
  //           clickable: true
  //         }}
  //         style={{ width: "100%", paddingBottom: "5em"}}
  //         loop={true}
  //         speed={800}
  //         slidesPerView={responsiveSlides}
  //         slidesPerGroup={responsiveSlides}
  //         spaceBetween={20}
  //       >
  //         {upcoming.map((item, idx) => (
  //           <SwiperSlide style={{ width: "fit-content"}}>
  //             <UpcomingEvent event={item} key={idx} size="large" />
  //           </SwiperSlide>
  //         ))}
  //       </Swiper>
  //     </ResponsiveWidth>
      
  //   </Flex >
  // )
  return (
    <ResponsiveWidth mb="3em" align="center" textAlign="center" >
      <Heading fontSize="28px" fontWeight="medium" mb="0.5">Upcoming Events</Heading>
      <Text mb="1em" textAlign="center">Check out our future lectures and activites!</Text>
      {/* <Flex 
        w="100%" 
        bg="#0D4C94" 
        p="2em" 
        color="white" 
        borderRadius="5px"
        gap="5em"
        align="center"
        justify="space-between"
      >
        <Flex flexDir="column">
          <Text fontWeight="semibold" fontSize="28px">Check our upcoming events</Text>
          <Text>Something interesting</Text>
        </Flex>
        <Button>See Calendar</Button>
      </Flex> */}
      <LinkBox><LinkOverlay href="/upcoming"><Button>View Calendar</Button></LinkOverlay></LinkBox>
    </ResponsiveWidth>
  )
}

export default Upcoming