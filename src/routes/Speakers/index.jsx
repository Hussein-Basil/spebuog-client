import React, { useEffect, useState } from 'react'
import { useBreakpointValue, Flex, Divider } from '@chakra-ui/react'
import useSWR from 'swr'
import SearchBar from './components/SearchBar'
import ViewControl from './components/ViewControl'
import View from './components/View'

const Speakers = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [gridView, setGridView] = useState(true)
    const [filterPosition, setFilterPosition] = useState("")
    const [filterCompany, setFilterCompany] = useState("")
    const responsiveGridView = useBreakpointValue({ base: false, lg: true })
    const [speakers, setSpeakers] = useState(null)
    const [filteredSpeakers, setFilteredSpeakers] = useState([])
    const [sortOrder, setSortOrder] = useState('desc')
    
    const { data, isLoading } = useSWR(`
        *[_type == 'instructor'] | score(
            name match '*${searchQuery}*' ||
            position match '*${filterPosition}*' ||
            position match '*${searchQuery}*' ||
            organization match '*${filterPosition}*' ||
            organization match '*${searchQuery}*'
        )[_score > 0] | order(latestEvent ${sortOrder || 'desc'})
    `)

    document.title = 'Instructors - SPE BUOG'
    
    useEffect(() => {
        setSpeakers(data?.length ? data : [])
    }, [data])


    return (
        <Flex 
            flexDir="column"
            w={{
                base: '90%',
                md: '768px',
                lg: '1114px',
                xl: '1440px',
                '2xl': '1500px',
            }}
            mt={{ base: "50px", xl: "100px" }}
            mb={{ base: "25px", lg: "50px" }}
            pb="2.5em"
            mx="auto"
        >
            <SearchBar 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                speakers={speakers}
                filterPosition={filterPosition}
                filterCompany={filterCompany}
                setFilteredSpeakers={setFilteredSpeakers}
                setFilterPosition={setFilterPosition}
                setFilterCompany={setFilterCompany}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
            />
            <ViewControl 
                setSearchQuery={setSearchQuery}
                setFilterPosition={setFilterPosition}
                setFilterCompany={setFilterCompany}
                gridView={gridView}
                setGridView={setGridView}
            />
            <Divider mt="1em" mb="2em" borderColor="gray" />
            <View 
                gridView={gridView}
                responsiveGridView={responsiveGridView}
                loading={isLoading}
                filteredSpeakers={filteredSpeakers}
            />
            
        </Flex>
    )
}

export default Speakers