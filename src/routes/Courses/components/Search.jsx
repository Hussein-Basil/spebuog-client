import React from 'react'
import { InputGroup, Input, InputLeftElement, InputRightElement, Icon, Show } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { MdFilterList } from 'react-icons/md'

const Search = ({ setSearchQuery, searchQuery }) => {
    return (
        <InputGroup mt="1em" mb="0.5em">
            <Input
                placeholder="Search courses"
                onChange={e => setSearchQuery(e.target.value)}
                value={searchQuery}
                h="65px"
                borderRadius="10px"
                border="1px solid #C8C8C8"
                pl="3.5em"
            />
            <InputLeftElement h="65px" my="auto" ml="0.75em"><SearchIcon w="24px" h="24px" color="gray" /></InputLeftElement>
            <InputRightElement h="65px" mr={{ base: 0, lg: "2em" }} fontWeight="medium" fontSize="20px">
                <Icon as={MdFilterList} w="24px" h="24px" mr="0.5em" /> <Show above="lg">Filters</Show>
            </InputRightElement>
        </InputGroup>
    )
}

export default Search