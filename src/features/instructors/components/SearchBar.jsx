import React, { useEffect } from 'react'
import { Flex, Text, Heading, Icon } from '@chakra-ui/react'
import { InputGroup, Input, InputLeftElement, InputRightElement, useDisclosure } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { MdFilterList } from 'react-icons/md'
import FilterModal from './FilterModal'



const SearchBar = ({ 
    searchQuery, 
    setSearchQuery, 
    speakers, 
    filterPosition, 
    filterCompany,
    setFilteredSpeakers,
    setFilterPosition,
    setFilterCompany,
    sortOrder,
    setSortOrder
}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        let newSpeakers = speakers?.length ? speakers : []
        if (searchQuery) {
            newSpeakers = newSpeakers.filter(s => {
                return (
                    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    s.position?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    s.organization?.toLowerCase().includes(searchQuery.toLowerCase())
                )
            })
        }
        
        if (filterPosition) {
            newSpeakers = newSpeakers.filter(s => s.position?.toLowerCase().includes(filterPosition.toLowerCase()))
        }
        
        if (filterCompany) {
            newSpeakers = newSpeakers.filter(s => s.organization?.toLowerCase().includes(filterCompany.toLowerCase()))
        }

        setFilteredSpeakers(newSpeakers)

    }, [speakers, searchQuery, filterPosition, filterCompany, setFilteredSpeakers])

    return (<>
        <FilterModal 
            isOpen={isOpen} 
            onClose={onClose} 
            setFilterPosition={setFilterPosition}
            setFilterCompany={setFilterCompany}
            filterPosition={filterPosition}
            filterCompany={filterCompany}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
        />
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
                {/*
                filter icon has buggy positioning in arabic so it's commented
                <InputRightElement h="65px" my="auto" ml="0.75em" onClick={onOpen} cursor="pointer">
                    <Text display={{base: "none", lg: "unset"}}>Filters</Text>
                    <Icon mr={{base: 0, lg: "3.5em"}} ml={{base:0, lg: "0.5em"}} as={MdFilterList} w="24px" h="24px" color="black" />
                </InputRightElement>
                */}
            </InputGroup>
            <Flex gap="1em">
                
            </Flex>
        </Flex>
    </>)
}

export default SearchBar