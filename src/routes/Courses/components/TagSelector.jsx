import React from 'react'
import { Flex, Icon, Text } from '@chakra-ui/react'
import { MdList } from 'react-icons/md'
import { BsDropletFill } from 'react-icons/bs'


const TagSelector = ({ setFilterTag, setSearchQuery }) => {

    const tags = [
        {
            name: 'All Courses',
            value: 'all',
            icon: MdList,
            description: 'Everything, past & upcoming courses'
        },
        {
            name: 'Oil & Gas Starter',
            value: 'og-starter',
            icon: BsDropletFill,
            description: 'For beginners, drilling and reservoir'
        },
        {
            name: 'Completion',
            value: 'completion',
            icon: MdList,
            description: 'Everything, past & upcoming courses'
        },
        {
            name: 'Drilling',
            value: 'drilling',
            icon: MdList,
            description: 'Everything, past & upcoming courses'
        },
        {
            name: 'Reservoir',
            value: 'reservoir',
            icon: MdList,
            description: 'Everything, past & upcoming courses'
        },
        {
            name: 'Others',
            value: 'others',
            icon: MdList,
            description: 'Everything, past & upcoming courses'
        },
    ]

    return (
        <Flex flexDir="row" gap="1em" mt="10px" overflow="auto" >
            {tags.map((tag, idx) => (
                <Flex
                    key={idx}
                    flexDir="column"
                    borderRadius="10px"
                    border="1px solid #c8c8c8"
                    w="215px"
                    cursor="pointer"
                    onClick={() => {
                        setFilterTag(tag)
                        setSearchQuery('')
                        window.scrollTo(0, 0)
                    }}
                    className="tag"
                    width="fit-content"
                    minW={{ base: "unset", lg: "220px" }}
                    padding={{ base: "5px 12px", lg: "1em" }}
                    mt={{ base: "5px", lg: "unset" }}
                    whiteSpace={{ base: "nowrap", lg: "unset" }}
                >
                    <Flex justify="space-between" align="center">
                        <Text className="tag-text" fontWeight={{ base: "normal", lg: "medium" }} fontSize={{ base: "14pt", lg: "18px" }}>{tag.name}</Text>
                        <Icon as={tag.icon} className="tag-icon" w="24px" h="24px" display={{ base: "none", lg: "unset" }} />
                    </Flex>
                    <Text className="tag-desc" display={{ base: "none", lg: "unset" }}>{tag.description}</Text>
                </Flex>
            ))
            }
        </Flex>
    )
}

export default TagSelector