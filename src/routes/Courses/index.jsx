import React, { useState, useEffect, useRef } from 'react'
import { Flex, Heading, Text, CloseButton } from '@chakra-ui/react'

import TagSelector from './components/TagSelector'
import Search from './components/Search'
import CoursesPreview from './components/CoursesPreview'
import FilterResults from './components/FilterResults'

import './styles.css'
import ResponsiveWidth from '../../components/ResponsiveWidth'

const Courses = () => {
    const stickyRef = useRef(null)
    const [query, setQuery] = useState({
        search: '',
        tag: {}
    })
    document.title = 'Courses - SPE BUOG'

    return (
            <Flex py={{ base: "1em", lg: "3em" }} flexDir="column" gap="0.5em" w="100vw">
                <ResponsiveWidth>
                    <Heading fontSize="42px" letterSpacing={-1} fontWeight="semibold">Courses</Heading>
                    <Text 
                        fontSize="16px"
                        mt="0.25em" 
                        color="#5f6368"
                        maxW="600px"
                        minW="50%"
                    >
                        Grow your skills by studying from our exciting courses. We aim to give our members the most enriching lectures with Oil & Gas top experts.
                    </Text>
                </ResponsiveWidth>
                <Flex h={{ base: "134px", lg: query.tag?.value ? "134px" : "200px" }} >
                    <Flex
                        bg="white"
                        flexDir="column"
                        ref={stickyRef}
                        // stickyRef
                        top="-1px"
                        zIndex={1}
                        pb="1em"
                        w="99vw"
                    >
                        <ResponsiveWidth>
                            <Search query={query} setQuery={setQuery} />
                            {query.tag?.value ? (
                                <Flex
                                    bg="#dadce0"
                                    borderRadius="20px"
                                    width="fit-content"
                                    align='center'
                                    py="0px"
                                    px="12px"
                                    mt="0.5em"
                                    zIndex={10}
                                >
                                    <Text lineHeight='20px' fontSize="14px">{query.tag.name}</Text>
                                    <CloseButton onClick={() => setQuery({...query, tag: {}})} />
                                </Flex>
                            ) : (
                                <TagSelector setQuery={setQuery} />
                            )}
                        </ResponsiveWidth>
                    </Flex>
                </Flex>
                <ResponsiveWidth
                    w={{
                        base: "100vw",
                        md: "768px",
                        lg: "1114px",
                        xl: "1440px",
                        '2xl': "1400px"
                    }}
                >
                    {(query.tag?.value || query.search) ? <FilterResults query={query} /> : <CoursesPreview />}
                </ResponsiveWidth>
            </Flex>
    )
}

export default Courses