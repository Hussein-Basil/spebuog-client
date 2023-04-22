import React from 'react'
import { Button, Heading, Text, LinkOverlay, LinkBox } from '@chakra-ui/react'

import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css'
import ResponsiveWidth from '../../../layouts/ResponsiveWidth'

const Upcoming = () => {
  return (
    <ResponsiveWidth mb="3em" align="center" textAlign="center" >
      <Heading fontSize="28px" fontWeight="medium" mb="0.5">Upcoming Events</Heading>
      <Text mb="1em" textAlign="center">Check out our future lectures and activites!</Text>
      <LinkBox><LinkOverlay href="/upcoming"><Button>View Calendar</Button></LinkOverlay></LinkBox>
    </ResponsiveWidth>
  )
}

export default Upcoming