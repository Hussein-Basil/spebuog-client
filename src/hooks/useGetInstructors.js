import { useState, useEffect } from 'react'
import useSWR from 'swr'

export default ({
    searchQuery,
    filterPosition,
    sortOrder
}) => {
    const [speakers, setSpeakers] = useState(null)
    
    const { data, isLoading } = useSWR(`
        *[_type == 'instructor'] | score(
            name match '*${searchQuery}*' ||
            position match '*${filterPosition}*' ||
            position match '*${searchQuery}*' ||
            organization match '*${filterPosition}*' ||
            organization match '*${searchQuery}*'
        )[_score > 0] | order(latestEvent ${sortOrder || 'desc'})
    `)

    useEffect(() => {
        setSpeakers(data?.length ? data : [])
    }, [data])

    return { speakers, isLoading }
}