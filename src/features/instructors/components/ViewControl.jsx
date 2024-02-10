import React from 'react'
import { Flex, Button, Icon, Show } from '@chakra-ui/react'
import { MdGridView, MdList, MdCancel } from 'react-icons/md'

const ViewControl = ({
    setSearchQuery,
    setFilterPosition,
    setFilterCompany,
    gridView,
    setGridView,
}) => (
    <Flex justify="space-between" w="100%" mt="1em" mb="1em">
        {/* the filter icon is commented so the clear filters button is redundant
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
        */}
        <Flex gap="0.5em">
            <Show above="lg">
                <Button bg={gridView ? "#a1a1a1" : "#c8c8c8"} onClick={() => setGridView(true)}><Icon as={MdGridView} /></Button> 
                <Button bg={!gridView ? "#a1a1a1" : "#c8c8c8"} onClick={() => setGridView(false)}><Icon as={MdList} /></Button>
            </Show>
        </Flex>
    </Flex>
)

export default ViewControl