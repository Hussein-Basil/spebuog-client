import React, { useState, useEffect, useRef } from 'react'
import { Flex, Heading, Text, CloseButton } from '@chakra-ui/react'
import Layout from '../../components/Layout'

import TagSelector from './components/TagSelector'
import Search from './components/Search'
import CoursesPreview from './components/CoursesPreview'
import FilterResults from './components/FilterResults'

import './styles.css'
import ResponsiveWidth from '../../components/ResponsiveWidth'
import { useUser } from '../../auth/UserContext'

const Courses = () => {
    const { events } = useUser()
    const stickyRef = useRef(null)
    const [filteredResults, setFilteredResults] = useState([])
    const [loading, setLoading] = useState(false)

    const [query, setQuery] = useState({
        search: '',
        tag: {
        }
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

    useEffect(() => {
        setLoading(true)
        setFilteredResults([])
        let link = 'https://spebuog-dev.vercel.app/api/event'

        if (query.tag?.value && query.search) {
            link += `?tag=${query.tag.value}&q=${query.search}`
        }
        else if (query.tag?.value) {
            link += `?tag=${query.tag.value}`
        } else if (query.search) {
            link += `?q=${query.search}`
        } else {
            setFilteredResults(events)
            setLoading(false)
            return 
        }

        fetch(link)
            .then(res => {
                if (res.ok) return res.json()
                else return []
            })
            .then(data => {
                setFilteredResults(data)
                setLoading(false)
            })
    }, [query])

    return (
        <Layout pt={{ base: "1em", lg: "3em" }}>
            <Flex flexDir="column" gap="0.5em" w="100vw" >
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
                    {(query.tag?.value || query.search) ? <FilterResults results={filteredResults} loading={loading} /> : <CoursesPreview />}
                </ResponsiveWidth>
            </Flex >
        </Layout >
    )
}

export default Courses