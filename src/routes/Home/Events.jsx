import React from 'react'
import { Flex, Heading, Text, Input, Button } from '@chakra-ui/react'

const Event = ({ event }) => {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May',
    'Jun', 'Jul', 'Aug', 'Sep', 'Oct',
    'November', 'December'
  ]
  console.log(event.date.getDay())

  return (
    <Flex flexDir="row" gap="1em">
      <Flex
        flexDir="column"
        bg="primary.500"
        align="center"
        px='1em'
        color="white"
        w="75px"
        h="100px"
      >
        <Text fontSize="24px" textTransform="uppercase">{months[event.date?.getMonth()]}</Text>
        <Text fontWeight="bold" fontSize="36px">{event.date?.getDate()}</Text>
      </Flex>
      <Flex flexDir="column" justify="space-between" fontSize="24px">
        <Flex flexDir="row" gap="1em">
          <Text textTransform="capitalize">{event.platform}</Text>
          <Text>{`${event.startTime} - ${event.endTime}`}</Text>
        </Flex>
        <Flex flexDir="row">
          <Heading fontSize="24px" fontWeight="semibold">{event.name}</Heading>
        </Flex>
      </Flex>
    </Flex>
  )
}

const Events = () => {

  const past = [
    {
      name: 'Unconventional Reservoir',
      date: new Date(2022, 5, 5),
      startTime: '7:00 pm',
      endTime: '8:00 pm',
      platform: 'Campus',
    },
    {
      name: 'Carbon Capture Utilization and Sequestration',
      date: new Date(2022, 5, 5),
      startTime: '7:00 pm',
      endTime: '8:00 pm',
      platform: 'Campus',
    },
    {
      name: 'Underground Hydrocarbon Storage',
      date: new Date(2022, 5, 8),
      startTime: '7:00 pm',
      endTime: '8:00 pm',
      platform: 'zoom',
    },
  ]

  const upcoming = [
    {
      name: 'API Cement and Additives',
      date: new Date(2022, 6, 9),
      startTime: '7:00 pm',
      endTime: '8:00 pm',
      platform: 'zoom',
    },
    {
      name: 'Primary Cementing',
      date: new Date(2022, 6, 10),
      startTime: '7:00 pm',
      endTime: '8:00 pm',
      platform: 'zoom',
    },
    {
      name: 'Primary Cementing Calculations',
      date: new Date(2022, 6, 11),
      startTime: '7:00 pm',
      endTime: '8:00 pm',
      platform: 'zoom',
    },
  ]
  return (
    <Flex flexDir="column" align="center" gap="2em">
      <Heading>Events</Heading>
      <Flex flexDir="row" gap="5em" w="1200px" justify="space-between">
        <Flex flexDir="column" gap="3em" w="600px">
          <Flex fontWeight="semibold" fontSize="22px">Latest</Flex>
          {past.map(event => (
            <Event event={event} />
          ))}
        </Flex>
        <Flex flexDir="column" gap="3em" w="600px">
          <Flex fontWeight="semibold" fontSize="22px">Upcoming</Flex>
          {upcoming.map(event => (
            <Event event={event} />
          ))}
        </Flex>
      </Flex>
      <Flex flexDir="column" align="center" mx="auto" mt="2em" w="1200px">
        <Flex flexDir="column" align="start" w="50%" gap="1em">
          <Heading fontSize="24px" fontWeight="semibold">
            To get notified about events:
          </Heading>
          <Flex w="100%" gap="0.5em">
            <Input placeholder="Type your email here" />
            <Button>Submit</Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Events