import { useState , useEffect } from 'react'
import useSWR from 'swr'

export default ({ query}) => {
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

    return { results, isLoading }
}