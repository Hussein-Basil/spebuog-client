import React from 'react'
import { Flex, Heading, Text, Show, Hide, Image, Divider } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'

const Events = () => {
  const upcoming = [
    {
      title: 'Well Completion Operation and Equipment',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan elementum sapien. Praesent sed varius purus. In hac habitasse platea dictumst.Vivamus vel sodales enim, a vehicula mi.Quisque odio ex, viverra eu metus quis, bibendum molestie risus.",
      tags: ['Completion'],
      speaker: {
        avatar: 'https://spebuog-dev.vercel.app/images/sayed.png',
        name: 'Eng Elsayed Amer',
        position: 'Senior Petrolem Engineer'
      }
    }
  ]
  return (
    <Flex
      flexDir="column"
      align="center"
      justify="center"
      gap="2em"
      my="3em"
      w="100vw"
      h="585px"
      bg="#f1f1f1"
    >
      <Heading fontWeight="medium" fontSize="28px">Upcoming Events</Heading>
      <Show above="lg">
        <Flex flexDir="row" gap="2em" align="center">
          {/* <ArrowBackIcon w="35px" h="35px" color="#F6BB43" /> */}
          {upcoming.map((event, i) => (
            <Flex key={i} minW="350px" maxW={{ base: "410px", lg: "950px" }} flexDir="row" border="1px solid #c8c8c8" borderRadius="10px" bg="white">
              <Flex flexDir="column" px="2em" py="1.5em" gap="1em" borderRight="1px solid #c8c8c8" w="80%">
                <Flex gap="1em" fontSize="18px">
                  <Text>Aug <b>20</b>, 2022</Text>
                  <Text>Zoom</Text>
                </Flex>
                <Heading fontWeight="semibold" fontSize="28px">{event.title}</Heading>
                <Text fontSize="18px">
                  {event.description}
                </Text>
                <Flex flexDir="row" gap="1em">
                  {event.tags?.map((tag, idx) => (
                    <Flex
                      key={idx}
                      bg="#F6BB43"
                      color="black"
                      borderRadius="10px"
                      border="1px solid black"
                      h="32px"
                      fontSize="16px"
                      px="18px"
                      align="center"
                    >
                      {tag}
                    </Flex>
                  ))}
                </Flex>
              </Flex>
              <Flex flexDir="column" p="2em" align="center" gap="1em" textAlign="center">
                <Image src={event.speaker.avatar} w="162px" h="auto" />
                <Text fontSize="18px" fontWeight="medium">{event.speaker.name}</Text>
                <Text fontSize="16px" mt="-10px">{event.speaker.position}</Text>
              </Flex>
            </Flex>
          ))}
          {/* <ArrowForwardIcon w="35px" h="35px" color="#F6BB43" /> */}
        </Flex>
      </Show>
      <Hide above="lg">
        <Flex flexDir="row" gap="2em" align="center">
          {upcoming.map((event, i) => (
            <Flex flexDir="column" minW="350px" w="90%" mx="auto" gap="0.5em">
              <Flex gap="1em" fontSize="16px" align="center">
                <Text>Aug <b>20</b>, 2022</Text>
                <Divider orientation="vertical" height="12px" borderColor="black" />
                <Text>Zoom</Text>
              </Flex>
              <Flex flexDir="column" bg="white" p="1em" gap="1em" borderRadius="10px" border="1px solid #c8c8c8">
                {/* Speaker */}
                <Flex flexDir="row" align="center" gap="1em" textAlign="left">
                  <Image src={event.speaker.avatar} w="62px" h="auto" />
                  <Flex flexDir="column">
                    <Text fontSize="18px" fontWeight="medium">{event.speaker.name}</Text>
                    <Text fontSize="16px">{event.speaker.position}</Text>
                  </Flex>
                </Flex>
                <Divider />
                {/* Event */}
                <Flex flexDir="column" gap="1em">
                  <Heading fontWeight="semibold" fontSize="24px">{event.title}</Heading>
                  <Text fontSize="16px">
                    {event.description}
                  </Text>
                  <Flex flexDir="row" gap="1em">
                    {event.tags?.map((tag, idx) => (
                      <Flex
                        key={idx}
                        bg="#F6BB43"
                        color="black"
                        borderRadius="10px"
                        border="1px solid black"
                        h="32px"
                        fontSize="16px"
                        px="18px"
                        align="center"
                      >
                        {tag}
                      </Flex>
                    ))}
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Hide >
    </Flex >
  )
}

export default Events
