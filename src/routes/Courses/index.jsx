import React, { useState, useEffect, useRef } from 'react'
import { Flex, Heading, Text, CloseButton } from '@chakra-ui/react'
import Layout from '../../components/Layout'

import TagSelector from './components/TagSelector'
import Search from './components/Search'
import CoursesPreview from './components/CoursesPreview'
import FilterResults from './components/FilterResults'

import './styles.css'
import ResponsiveWidth from '../../components/ResponsiveWidth'

const Courses = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [filterTag, setFilterTag] = useState({})
    const sensorRef = useRef(null)
    const stickyRef = useRef(null)
    const [filteredResults, setFilteredResults] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
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
    })

    useEffect(() => {
        setLoading(true)
        let link = 'http://spebuog-dev.vercel.app/api/event'

        if (filterTag?.value && searchQuery) {
            link += `?tag=${filterTag.value}&q=${searchQuery}`
        }
        else if (filterTag?.value) {
            link += `?tag=${filterTag.value}`
        } else if (searchQuery) {
            link += `?q=${searchQuery}`
        }

        fetch(link)
            .then(res => res.json())
            .then(data => {
                setFilteredResults(data)
                setLoading(false)
            })
    }, [searchQuery, filterTag?.value])

    return (
        <Layout pt={{ base: "1em", lg: "5em" }}>
            < Flex flexDir="column" gap="0.5em" w="100vw" >
                <ResponsiveWidth>
                    <Heading>Courses</Heading>
                    <Text fontSize="18px" mt="0.75em">Grow your skills by studying from our exciting courses</Text>
                </ResponsiveWidth>
                <Flex h={{ base: "134px", lg: filterTag?.value ? "134px" : "224px" }} >
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
                            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

                            {filterTag?.value ? (
                                <Flex
                                    bg="#c8c8c8"
                                    borderRadius="20px"
                                    width="fit-content"
                                    align='center'
                                    py="3px"
                                    px="12px"
                                >
                                    {filterTag.name}
                                    <CloseButton onClick={() => setFilterTag({})} />
                                </Flex>
                            ) : (
                                <TagSelector setFilterTag={setFilterTag} setSearchQuery={setSearchQuery} />
                            )}
                        </ResponsiveWidth>
                    </Flex>
                </Flex>
                <ResponsiveWidth>
                    {(filterTag?.value || searchQuery) ? <FilterResults results={filteredResults} /> : <CoursesPreview />}
                </ResponsiveWidth>
            </Flex >
        </Layout >
    )
}

export default Courses