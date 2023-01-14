import React, { useState, useEffect, useRef } from 'react'
import { Flex, Heading, Text, CloseButton } from '@chakra-ui/react'

import TagSelector from './components/TagSelector'
import Search from './components/Search'
import CoursesPreview from './components/CoursesPreview'
import FilterResults from './components/FilterResults'

import './styles.css'
import ResponsiveWidth from '../../components/ResponsiveWidth'
import { useUser } from '../../auth/UserContext'
import useSWR from 'swr'

const Courses = () => {
    const { filterEventsByQuery, filterEventsByTag } = useUser()
    const stickyRef = useRef(null)
    const [filteredResults, setFilteredResults] = useState([])
    const [events, setEvents] = useState([])

    const [query, setQuery] = useState({
        search: '',
        tag: {}
    })

    useEffect(() => {
        document.title = 'Courses - SPE BUOG'
        let lastScrollY = window.scrollY
        const sticky = stickyRef.current.offsetTop
        const handleWindowScroll = () => {
            stickyRef.current.classList.toggle("is-pinned",
                (window.pageYOffset >= sticky) && !(window.scrollY >= lastScrollY)
            )
            lastScrollY = window.scrollY
        }
        window.addEventListener("scroll", handleWindowScroll)
        return () => {
            window.removeEventListener('scroll', handleWindowScroll)
        }
    }, [])

    function intersect(a, b) {
        var setB = new Set(b);
        return [...new Set(a)].filter(x => setB.has(x));
    }

    const { data, isLoading } = useSWR(`
        *[_type == 'event']{
            ...,
            instructors[]->,
            parent->,
            event_type == 'course' => {
                'children': *[_type =='event' && references(^._id)],
                'instructors': array::unique(*[_type == 'event' && references(^._id)]{instructors[]->{name}}.instructors[].name)
            },
            event_type == 'internship' => {
                'children': *[_type =='event' && references(^._id)],
                'instructors': array::unique(*[_type == 'event' && references(^._id)] {
                    'children': *[_type == 'event' && references(^._id)]
                }.children[].instructors[]._ref)
            }
        }
    `)

    useEffect(() => {
        setEvents(data?.length ? data : [])
    }, [data])

    useEffect(() => {
        let result
        
        if (query.tag?.value && query.search) {
            let a = filterEventsByTag(events, query.tag.value)
            let b = filterEventsByQuery(events, query.search)
            result  = intersect(a, b)
        }
        else if (query.tag?.value) {
            result = filterEventsByTag(events, query.tag.value)
        } else if (query.search) {
            result = filterEventsByQuery(events, query.search)
        } else {
            result = events
        }

        setFilteredResults(result)
    }, [query, events])

    return (
            <Flex py={{ base: "1em", lg: "3em" }} flexDir="column" gap="0.5em" w="100vw">
                <ResponsiveWidth>
                    <Heading fontSize="28px" fontWeight="medium">Find Courses</Heading>
                    <Text fontSize="16px" mt="0.25em">Grow your skills by studying from our exciting courses</Text>
                </ResponsiveWidth>
                <Flex h={{ base: "134px", lg: query.tag?.value ? "134px" : "224px" }} >
                    <Flex
                        bg="white"
                        flexDir="column"
                        ref={stickyRef}
                        // stickyRef
                        top="-1px"
                        zIndex={10}
                        pb="1em"
                        w="99vw"
                    >
                        <ResponsiveWidth>
                            <Search query={query} setQuery={setQuery} />
                            {query.tag?.value ? (
                                <Flex
                                    bg="#c8c8c8"
                                    borderRadius="20px"
                                    width="fit-content"
                                    align='center'
                                    py="3px"
                                    px="12px"
                                    mt="0.5em"
                                >
                                    {query.tag.name}
                                    <CloseButton onClick={() => setQuery({...query, tag: {}})} />
                                </Flex>
                            ) : (
                                <TagSelector setQuery={setQuery} setFilteredResults={setFilteredResults} />
                            )}
                        </ResponsiveWidth>
                    </Flex>
                </Flex>
                <ResponsiveWidth>
                    {(query.tag?.value || query.search) ? (
                        <FilterResults results={filteredResults} loading={isLoading} /> 
                    ) : (
                        <CoursesPreview />
                    )}
                </ResponsiveWidth>
            </Flex >
    )
}

export default Courses