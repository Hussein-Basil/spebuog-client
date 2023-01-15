import React from 'react'
import { Flex, Icon, Text } from '@chakra-ui/react'
import { MdList } from 'react-icons/md'
import {motion} from 'framer-motion'

const TagSelector = ({ setQuery }) => {
    const tags = [
        {
            name: 'All Courses',
            value: '*',
            icon: MdList,
            description: 'Everything, online webinars and courses'
        },
        {
            name: 'Completion',
            value: 'completion',
            icon: MdList,
            description: 'All about well completion, cementing and intervention'
        },
        {
            name: 'Drilling',
            value: 'drilling',
            icon: MdList,
            description: 'Follow the drilling lectures to start your journey!'
        },
        {
            name: 'Reservoir',
            value: 'reservoir',
            icon: MdList,
            description: 'Reservoir engineering, simulation and other advance topics'
        },
        {
            name: 'Others',
            value: 'others',
            icon: MdList,
            description: 'Other petroleum related lectures like the future of oil & gas'
        },
    ]

    return (
        <Flex 
            flexDir="row" 
            gap="1em" 
            mt="10px" 
            overflow={{ base: "auto", lg: 'hidden' }}
            as={motion.div} 
            initial={{ opacity: 0}} 
            whileInView={{opacity: 1}} 
            transition={{ delay: 1 }}
        >
            {tags.map((tag, idx) => (
                <Flex
                    key={idx}
                    flexDir="column"
                    borderRadius="16px"
                    border="1px solid #dadce0"
                    _hover={{borderColor: 'black'}}
                    cursor="pointer"
                    onClick={() => {
                        setQuery({
                            search: '',
                            tag
                        })
                        window.scrollTo(0, 0)
                    }}
                    className="tag"
                    width="fit-content"
                    w={{ base: "fit-content", lg: "180px"}}
                    minW={{ base: "unset", lg: "220px" }}
                    padding={{ base: "5px 12px", lg: "1em" }}
                    mt={{ base: "5px", lg: "unset" }}
                    whiteSpace={{ base: "nowrap", lg: "unset" }}
                    userSelect="none"
                    mb="1em"
                    
                    
                >
                    <Flex justify="space-between" align="center">
                        <Text 
                            className="tag-text" 
                            fontWeight={{ base: "normal", lg: "bold" }} 
                            fontSize="14px"
                            lineHeight="24px"
                        >
                            {tag.name}
                        </Text>
                        <Icon as={tag.icon} className="tag-icon" w="24px" h="24px" display={{ base: "none", lg: "unset" }} />
                    </Flex>
                    <Text 
                        className="tag-desc" 
                        display={{ base: "none", lg: "unset" }}
                        fontSize="12px"
                        lineHeight="20px"
                        color="#5f6368"
                    >
                        {tag.description}
                    </Text>
                </Flex>
            ))
            }
        </Flex>
    )
}

export default TagSelector