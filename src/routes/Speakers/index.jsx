import React, { useEffect, useState } from 'react'
import { useBreakpointValue, Flex, Text, Heading, Link, Image, Grid, Avatar, Button, SelectField, Divider, InputGroup, Input, InputLeftElement, InputRightElement, Icon, Show, LinkOverlay, LinkBox, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { useUser } from '../../auth/UserContext'
import { SearchIcon } from '@chakra-ui/icons'
import { MdFilterList, MdHouse, MdGridView, MdList, MdWork, MdCancel, MdTimeline } from 'react-icons/md'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react'

const Speakers = () => {
    const { speakers } = useUser()
    const [searchQuery, setSearchQuery] = useState("")
    const [gridView, setGridView] = useState(true)
    const [filterPosition, setFilterPosition] = useState("")
    const [filterCompany, setFilterCompany] = useState('')
    const responsiveGridView = useBreakpointValue({ base: false, lg: true })

    const [filteredSpeakers, setFilteredSpeakers] = useState([])

    const [sliceIndex, setSliceIndex] = useState(12)

    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        document.title = 'Instructors - SPE BUOG'
    }, [])

    useEffect(() => { setFilteredSpeakers(speakers) }, [speakers])

    useEffect(() => {
        let newSpeakers = speakers
        if (searchQuery) {
            newSpeakers = speakers.filter(s => {
                return (
                    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    s.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    s.organization?.toLowerCase().includes(searchQuery.toLowerCase())
                )
            })
        }

        if (filterPosition) {
            newSpeakers = newSpeakers.filter(s => s.position.toLowerCase().includes(filterPosition.toLowerCase()))
        }
        
        if (filterCompany) {
            newSpeakers = newSpeakers.filter(s => s.organization.toLowerCase().includes(filterCompany.toLowerCase()))
        }

        setFilteredSpeakers(newSpeakers)

    }, [searchQuery, filterPosition, filterCompany])

    return (
        <Flex 
            flexDir="column"
            w={{
                base: '90%',
                md: '768px',
                lg: '1114px',
                xl: '1440px',
                '2xl': '1500px',
            }}
            mt={{ base: "50px", xl: "100px" }}
            mb={{ base: "25px", lg: "50px" }}
            pb="2.5em"
            mx="auto"
        >
            
             <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent position="absolute" top="20px" my="0" maxW={{ base: "95%", lg: "428px" }}>
                    <ModalHeader>Filter</ModalHeader>
                    <ModalCloseButton ml="1em" />
                    <ModalBody >
                    <InputGroup mt="1em" mb="0.5em" w="100%" >
                        <SelectField
                            w="100%"
                            minW="150px"
                            placeholder="Position"
                            onChange={e => setFilterPosition(e.target.value)}
                            value={filterPosition}
                            h="65px"
                            borderRadius="10px"
                            border="1px solid #C8C8C8"
                            pl="3.5em"
                        >
                            <option>Petroleum Engineer</option>
                            <option>Drilling Engineer</option>
                        </SelectField>
                        <InputLeftElement h="65px" my="auto" ml="0.75em"><Icon as={MdWork} w="24px" h="24px" color="gray" /></InputLeftElement>
                    </InputGroup>
                    <InputGroup mt="1em" mb="0.5em" w="100%">
                        <SelectField
                            w="100%"
                            minW="150px"
                            placeholder="Company"
                            onChange={e => setFilterCompany(e.target.value)}
                            value={filterCompany}
                            h="65px"
                            borderRadius="10px"
                            border="1px solid #C8C8C8"
                            pl="3.5em"
                        >
                            {/* {companies.map((company, index) => (
                                <option key={index} value={company}>{company}</option>
                            ))} */}
                            <option>Schlumberger</option>
                            <option>Haliburton</option>
                            <option>Weatherford</option> 
                            <option>Baker Hughes</option> 
                        </SelectField>
                        <InputLeftElement h="65px" my="auto" ml="0.75em"><Icon as={MdHouse} w="24px" h="24px" color="gray" /></InputLeftElement>
                    </InputGroup>
                    <InputGroup mt="1em" mb="0.5em" w="100%">
                        <SelectField
                            w="100%"
                            minW="150px"
                            placeholder="Sort"
                            // onChange={e => setFilterCompany(e.target.value)}
                            // value={filterCompany}
                            h="65px"
                            borderRadius="10px"
                            border="1px solid #C8C8C8"
                            pl="3.5em"
                        >
                            {/* {companies.map((company, index) => (
                                <option key={index} value={company}>{company}</option>
                            ))} */}
                            <option>Newest</option>
                            <option>Oldest</option>
                        </SelectField>
                        <InputLeftElement h="65px" my="auto" ml="0.75em"><Icon as={MdTimeline} w="24px" h="24px" color="gray" /></InputLeftElement>
                    </InputGroup>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Heading fontSize="28px" fontWeight="medium">Find Instructors</Heading>
            <Text fontSize="16px">Explore instructors who presented lectures at our chapter</Text>
            <Flex columnGap="1em" mt="1em" flexDir={{base: "column", lg: "row"}}>
                <InputGroup mt="1em" mb="0.5em" w="100%">
                    <Input
                        w="100%"
                        placeholder="Instructor name, related keyword"
                        onChange={e => setSearchQuery(e.target.value)}
                        value={searchQuery}
                        h="65px"
                        borderRadius="10px"
                        border="1px solid #C8C8C8"
                        pl="3.5em"
                    />
                    <InputLeftElement h="65px" my="auto" ml="0.75em"><SearchIcon w="24px" h="24px" color="gray" /></InputLeftElement>
                    <InputRightElement h="65px" my="auto" ml="0.75em" onClick={onOpen} cursor="pointer">
                        <Text display={{base: "none", lg: "unset"}}>Filters</Text>
                        <Icon mr={{base: 0, lg: "3.5em"}} ml={{base:0, lg: "0.5em"}} as={MdFilterList} w="24px" h="24px" color="black" />
                    </InputRightElement>
                </InputGroup>
                <Flex gap="1em">
                    
                </Flex>
            </Flex>
            <Flex justify="space-between" w="100%" mt="1em" mb="1em">
                <Button
                    onClick={() => {
                        setSearchQuery('')
                        setFilterPosition('')
                        setFilterCompany('')
                    }}
                    bg="#f1f1f1"
                    color="#000000a1"
                    _hover={{ bg: "#c8c8c8"}}
                    _active={{ bg: "#c8c8c8"}}
                ><Icon as={MdCancel} w="24px" h="24px" mr="0.5em" />Clear Filters</Button>
                <Flex gap="0.5em">
                    {/* <SelectField 
                        border="1px solid #c8c8c8" 
                        borderRadius="10px"
                        px="0.5em"
                    >
                        <option>Oldest</option>
                        <option>Newest</option>
                    </SelectField> */}
                    <Show above="lg">
                        <Button bg={gridView ? "#a1a1a1" : "#c8c8c8"} onClick={() => setGridView(true)}><Icon as={MdGridView} /></Button> 
                        <Button bg={!gridView ? "#a1a1a1" : "#c8c8c8"} onClick={() => setGridView(false)}><Icon as={MdList} /></Button>
                    </Show>
                </Flex>
            </Flex>
            <Divider mt="1em" mb="2em" borderColor="gray" />
            {responsiveGridView && gridView ? (
                <Grid gridTemplateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                    xl: "repeat(4, 1fr)"
                }} gap="1.5em" >
                    {filteredSpeakers?.length ? filteredSpeakers.slice(0, sliceIndex).map((speaker, i) => (
                        <LinkBox><LinkOverlay href={`/speaker/${speaker.uid}`}>
                            <Flex
                                key={i}
                                flexDir="column"
                                align="center"
                                boxShadow="0 0 0 1px #e8e8e8"
                                p="1em"
                                // width="280px"
                                borderRadius="15px"
                                justify="space-between"
                                w="354px"
                                h="100%"
                            >
                                <Flex alignSelf="start">
                                    <Image
                                        src={`https://spebuog-dev.vercel.app/images/${speaker.image}`}
                                        alt="instructor"
                                        width="100px"
                                        height="100px"
                                        borderRadius="50%"
                                        objectFit="cover"
                                        mb="10px"
                                        as={Avatar}
                                    />

                                    <Flex
                                        flexDir="column"
                                        align="start"
                                        pl="1em"
                                    >
                                        <Heading fontSize="16px" w="80%" fontWeight="medium">{speaker.name}</Heading>
                                        <Text fontSize="14px" w="80%" color="gray">{speaker.position}</Text>
                                        <Text fontSize="14px" color="gray">{speaker.organization}</Text>
                                        <Flex
                                            flexWrap="wrap"
                                            width="250px"
                                            gap="5px"
                                            justify="center"
                                        >
                                            {speaker.tags?.map((tag, idx) => (
                                                <Flex
                                                    key={idx}
                                                    px="0.65em"
                                                    color="white"
                                                    justify="center"
                                                    bg="grey"
                                                    borderRadius="15px"
                                                    fontSize="14px"
                                                >
                                                    {tag}
                                                </Flex>
                                            ))}
                                        </Flex>
                                            <Link href={`/speaker/${speaker.uid}`} variant="textButton" _hover={{textDecor: "none"}}>
                                                View Profile
                                            </Link>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </LinkOverlay></LinkBox>
                    )) : [...Array(12)].map((_, idx) => (
                        <Flex
                            key={idx}
                            flexDir="column"
                            align="center"
                            boxShadow="0 0 0 1px #e8e8e8"
                            p="1em"
                            // width="280px"
                            borderRadius="15px"
                            justify="space-between"
                            w="354px"
                            h="100%"
                        >
                            <Flex alignSelf="start">
                                <SkeletonCircle 
                                    width="100px"
                                    height="100px"
                                    borderRadius="50%"
                                    objectFit="cover"
                                    mb="10px"
                                    as={Avatar}
                                />
                                <Flex
                                    flexDir="column"
                                    align="start"
                                    pl="1em"
                                >
                                    <SkeletonText w="200px" mt="4" noOfLines={1} />
                                    <SkeletonText w="150px" mt="4" noOfLines={1}/>
                                    <SkeletonText  w="75px" mt="8"noOfLines={1}/>
                                </Flex>
                            </Flex>
                        </Flex>
                    ))}
                </Grid>
            ) : (
                <Flex flexDir="column" gap="1em" maxW={{ base: "90vw", md: "100%"}}>
                    {filteredSpeakers?.length ? filteredSpeakers.slice(0, sliceIndex).map((speaker, idx) => {
                        return (
                            <LinkBox><LinkOverlay href={`/speaker/${speaker.uid}`}>
                                <Flex
                                    key={idx}
                                    align="center"
                                    boxShadow="0 0 0 1px #e1e1e1"
                                    px="1em"
                                    py="1em"
                                    borderRadius="15px"
                                >
                                    <Image
                                        src={`https://spebuog-dev.vercel.app/images/${speaker.image}`}
                                        alt="instructor"
                                        width="100px"
                                        height="100px"
                                        maxWidth="200px"
                                        maxHeight="200px"
                                        borderRadius="50%"
                                        objectFit="cover"
                                        mb="10px"
                                        mr="1em"
                                        as={Avatar}
                                    />
                                    <Flex flexDir="column" gap="1em" alignSelf="start" mt="0.5em">
                                        <Heading fontSize="16px" fontWeight="medium">{speaker.name}</Heading>
                                        <Flex flexDir="column" gap="0.25em" color="gray">
                                            <Text fontSize="14px" >{speaker.position}</Text>
                                            <Text fontSize="14px">{speaker.organization}</Text>
                                        </Flex>
                                    </Flex>
                                    {speaker.tags?.map((tag, idx) => (
                                    <Flex
                                        flexWrap="wrap"
                                        width="250px"
                                        gap="5px"
                                        justify="center"
                                    >
                                        
                                            <Flex
                                                key={idx}
                                                px="0.65em"
                                                color="white"
                                                justify="center"
                                                bg="grey"
                                                borderRadius="15px"
                                                fontSize="14px"
                                            >
                                                {tag}
                                            </Flex>
                                    </Flex>
                                    ))}
                                    <Show above="lg">
                                        <Link ml="auto" href={`/speaker/${speaker.uid}`} _hover={{textDecor: "none"}}>
                                            <Button>View Profile</Button>
                                        </Link>
                                    </Show>
                                </Flex>
                            </LinkOverlay></LinkBox>
                        )
                    }) : [...Array(12)].map((_, idx) => (
                        <Flex
                            key={idx}
                            align="center"
                            boxShadow="0 0 0 1px #e1e1e1"
                            px="1em"
                            py="1em"
                            borderRadius="15px"
                        >
                            <SkeletonCircle
                                alt="instructor"
                                width="100px"
                                height="100px"
                                maxWidth="200px"
                                maxHeight="200px"
                                borderRadius="50%"
                                mb="10px"
                                mr="1em"
                            />
                            <Flex flexDir="column" gap="1em" alignSelf="start" mt="0.5em">
                                <SkeletonText w="200px" mt="4" noOfLines={1} />
                                <SkeletonText w="150px" mt="4" noOfLines={1}/>
                            </Flex>
                        </Flex>
                    ))}
                </Flex>
            )}
            {/* <Flex alignSelf="center" align="center" gap="1em" mt="2em">
                <IconButton as={MdArrowBack} />
                <Link href="?page=1">1</Link>
                <Link href="?page=2">2</Link>
                <Link href="?page=3">3</Link>
                <IconButton as={MdArrowForward} />
            </Flex> */}
            {sliceIndex < filteredSpeakers.length && (
                <Button mt="2em" variant="outline" onClick={() => setSliceIndex(sliceIndex + 12)}>Load More</Button>
            )}
        </Flex>
    )
}

export default Speakers