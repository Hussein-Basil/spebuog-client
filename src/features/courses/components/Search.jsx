import React from 'react'
import { InputGroup, Input, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const Search = ({ query, setQuery }) => {
    return (
        <InputGroup mt="1em" mb="0.5em">
            <Input
                placeholder="Search courses"
                onChange={e => setQuery({...query, search: e.target.value})}
                value={query.search}
                h="48px"
                borderRadius="10px"
                border="1px solid #dadce0"
                pl="3.5em"
            />
            <InputLeftElement h="65px" mt="-7.5px" ml="0.75em"><SearchIcon w="24px" h="20px" color="gray" /></InputLeftElement>
            {/* <InputRightElement h="65px" mr={{ base: 0, lg: "2em" }} fontWeight="medium" fontSize="20px">
                <Icon as={MdFilterList} w="24px" h="24px" mr="0.5em" /> <Show above="lg">Filters</Show>
            </InputRightElement> */}
        </InputGroup>
    )
}

export default Search