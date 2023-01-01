import React from 'react'
import { Flex, Icon, Text } from '@chakra-ui/react'
import { MdList } from 'react-icons/md'
import { BsDropletFill } from 'react-icons/bs'


const TagSelector = ({ setQuery, setFilteredResults }) => {

    const tags = [
        {
            name: 'All Courses',
            value: 'all',
            icon: MdList,
            description: 'Everything, online webinars and courses'
        },
        {
            name: 'Completion',
            value: 'completion',
            icon: MdList,
            description: 'Lectures about well completion operations'
        },
        {
            name: 'Drilling',
            value: 'drilling',
            icon: MdList,
            description: 'Lectures on drilling and well control'
        },
        {
            name: 'Reservoir',
            value: 'reservoir',
            icon: MdList,
            description: 'Lectures in reservoir engineering'
        },
        {
            name: 'Others',
            value: 'others',
            icon: MdList,
            description: 'Other categories of lectures'
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
                        setQuery({
                            search: '',
                            tag
                        })
                        setFilteredResults([])
                        window.scrollTo(0, 0)
                    }}
                    className="tag"
                    width="fit-content"
                    minW={{ base: "unset", lg: "220px" }}
                    padding={{ base: "5px 12px", lg: "1em" }}
                    mt={{ base: "5px", lg: "unset" }}
                    whiteSpace={{ base: "nowrap", lg: "unset" }}
                    userSelect="none"
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