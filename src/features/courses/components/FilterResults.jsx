import React, { useState } from 'react'
import { Flex, Grid, Button,  Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Course from '../../courses/components/Course'
import useSWR from 'swr'
import { useEffect } from 'react'

const FilterResults = ({ query }) => {
    const [sliceIndex, setSliceIndex] = useState(12)
    const [results, setResults] = useState([])

    let queryTerm = query?.search ? (
         query.search.replaceAll('.', ' ') 
    ) : "*"
    let queryTag = (query?.tag?.value) ? (
         query.tag.value.replaceAll('.', ' ')
    ) :  '*'

    const { data, isLoading } = useSWR(`
        *[_type == 'event'] | score(
            (title match '*${queryTerm}*' ||
            description match '${queryTerm}') &&
            tags match '${queryTag}' 
        )[_score > 0]{
            ...,
            instructors[]->,
            parent->,
            event_type == 'course' => {
                'children': *[_type =='event' && references(^._id)],
                'instructors': *[_type == 'event' && references(^._id)]{instructors[]->}.instructors[]
            },
            event_type == 'internship' => {
                'children': *[_type =='event' && references(^._id)],
                'instructors': *[_type == 'event' && references(^._id)] {
                    'children': *[_type == 'event' && references(^._id)] { instructors[]-> }
                }.children[].instructors[]
            }
        }
    `)

    useEffect(() => {
        setResults(data?.map(event => {
            if (['course', 'internship'].includes(event?.event_type)) {
                return {
                    ...event,
                    instructors: [...new Map(event.instructors.filter(instructor => instructor).map(item => 
                        [item['_id'], item])).values()]
                }
            } else return event
        }))
    }, [data])

    const nullItems = Array(12).fill(<Course loading={true}/>)

    return (
        <Flex flexDir="column" gap="1em" mt="0.5em" w="100%" as={motion.div} initial={{ opacity: 0}} whileInView={{opacity: 1}} transition={{ delay: 1 }} >
            <Grid gridTemplateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
                xl: "repeat(4, 1fr)"
            }} gap="1.5em" alignItems="stretch">
                {isLoading ? nullItems :
                    results?.length ? results.slice(0, sliceIndex).map((course, idx) => (
                        <Course course={course} key={idx}  />
                    ))
                : (
                    <Text as={motion.div} initial={{opacity: 0}} whileInView={{opacity: 1}}>
                        No results
                    </Text>
                )}
            </Grid>
            {sliceIndex < results?.length &&
            <Button variant="outline" onClick={() => setSliceIndex(undefined)}>Load More</Button>}
        </Flex>
    )
}

export default FilterResults