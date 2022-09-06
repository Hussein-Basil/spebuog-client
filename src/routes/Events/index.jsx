import React, { useState } from 'react'
import { Flex, Input, InputGroup, Heading, Text, Image, Divider, InputRightElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import Lecture1 from '../../assets/lecturer1.jpg'
import Lecture2 from '../../assets/lecturer2.jpg'
import Lecture3 from '../../assets/lecturer3.jpg'

const Event = ({ event }) => {
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May',
        'Jun', 'Jul', 'Aug', 'Sep', 'Oct',
        'November', 'December'
    ]
    const days = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thurrsday', 'Friday', 'Saturday'
    ]

    return (
        <Flex flexDir="row" gap="2em">
            <Flex flexDir="column" gap="1em" minW="150px">
                <Text fontSize="24px">{days[event.date?.getDay()]}</Text>
                <Flex
                    flexDir="column"
                    bg="primary.500"
                    align="center"
                    px='1em'
                    pt="0.25em"
                    pb="0.5em"
                    color="white"
                    w="85px"
                >
                    <Text fontSize="24px" textTransform="uppercase">{months[event.date?.getMonth()]}</Text>
                    <Text fontWeight="bold" fontSize="36px">{event.date?.getDate()}</Text>
                    <Text fontSize="24px">{event.date?.getYear() + 1900}</Text>
                </Flex>
            </Flex>
            <Flex flexDir="column" gap="0.5em" fontSize="18px">
                <Flex flexDir="row" gap="1em">
                    <Text textTransform="capitalize">{event.platform}</Text>
                    <Text>{`${event.startTime} - ${event.endTime}`}</Text>
                </Flex>
                <Heading fontSize="24px" fontWeight="semibold">{event.name}</Heading>
                <Text fontSize="18px">{event.description}</Text>
            </Flex>
            <Image
                // src='https://raw.githubusercontent.com/billpapadimas/A-picture-of-Bill-Gates/master/bill.jpg'
                src={event.image}
                minW="200px"
                h="200px"
                objectFit="cover"
            />
        </Flex>
    )
}

const Events = () => {
    const events = [
        {
            name: 'Unconventional Reservoir',
            speaker: 'Eng.Mohammed Saad',
            date: new Date(2022, 5, 5),
            startTime: '7:00 pm',
            endTime: '8:00 pm',
            platform: 'Campus',
            description: "A BIG shout out to Dr.Yousif for joining us tomorrow ، He’s gonna give you a passive knowledge in geomechanics & its application in petroleum industry ",
            image: Lecture1
        },
        {
            name: 'Carbon Capture Utilization and Sequestration',
            speaker: 'Eng.Mohammed Saad',
            date: new Date(2022, 5, 5),
            startTime: '7:00 pm',
            endTime: '8:00 pm',
            platform: 'Campus',
            description: "A BIG shout out to Dr.Yousif for joining us tomorrow ، He’s gonna give you a passive knowledge in geomechanics & its application in petroleum industry ",
            image: Lecture1
        },
        {
            name: 'Underground Hydrocarbon Storage',
            speaker: 'Eng.Mustafa Jabbar',
            date: new Date(2022, 5, 8),
            startTime: '7:00 pm',
            endTime: '8:00 pm',
            platform: 'zoom',
            description: "A BIG shout out to Dr.Yousif for joining us tomorrow ، He’s gonna give you a passive knowledge in geomechanics & its application in petroleum industry ",
            image: Lecture2
        },
        {
            name: 'API Cement and Additives',
            speaker: 'Prof.Dr.Hussein Ahmed',
            date: new Date(2022, 6, 9),
            startTime: '7:00 pm',
            endTime: '8:00 pm',
            platform: 'zoom',
            description: "A BIG shout out to Dr.Yousif for joining us tomorrow ، He’s gonna give you a passive knowledge in geomechanics & its application in petroleum industry ",
            image: Lecture3
        },
        {
            name: 'Primary Cementing',
            speaker: 'Eng.Mohammed Saad',
            date: new Date(2022, 6, 10),
            startTime: '7:00 pm',
            endTime: '8:00 pm',
            platform: 'zoom',
            description: "Agenda: Preparations for Primary Cementing and Pre-Job Checklist • Types of Casing Cementing Jobs • Preventing Cementing Failures and Causes of Primary Cementing Failures • Effects of Drilling Fluids and Contaminants on Cements • Flow properties • Conditioning the Drilling fluid • Pipe movement and Pipe Centralization • Eccentric Flow, Density Difference, and High Displacement Rates • Spacers and/or Flushes",
            image: Lecture1
        },
        {
            name: 'Primary Cementing Calculations',
            speaker: 'Eng.Mustafa Jabbar',
            date: new Date(2022, 6, 11),
            startTime: '7:00 pm',
            endTime: '8:00 pm',
            platform: 'zoom',
            description: "Agenda: Single stage volumes calculations\n• Slurry Yield\n• Water requirement calculation\n• Additive requirement calculation\n• Equivalent sacks calculation\n• Estimated job time",
            image: Lecture2
        },
    ]

    const [searchQuery, setSearchQuery] = useState('')
    return (
        <Flex
            flexDir="column"
            gap="2em"
            mt="3em"
            mx="auto"
            px="20px"
            w={{
                sm: "320px",
                md: "768px",
                lg: "1024px",
                xl: "1440px",
                '2xl': "1500px"
            }}
        >
            <Flex flexDir="column" gap="1.5em">
                <Heading>Events</Heading>
                <InputGroup w="600px">
                    <Input placeholder="Search for lecture or author" onChange={e => setSearchQuery(e.target.value)} value={searchQuery} />
                    <InputRightElement><SearchIcon /></InputRightElement>
                </InputGroup>
                <Flex flexDir="column" gap="3em">
                    {events.filter(event => {
                        const query = searchQuery.toLowerCase()
                        const lecture = event.name.toLowerCase()
                        const author = event.speaker.toLowerCase()
                        if (query.length > 2) {
                            return lecture.includes(query) || author.includes(query)
                        }
                        else return true
                    }).reverse().map(event => (
                        <>
                            <Event event={event} />
                            <Divider orientation='horizontal' />
                        </>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Events