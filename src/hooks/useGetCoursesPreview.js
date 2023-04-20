import { useState, useEffect } from 'react'
import useSWR from 'swr'

export default () => {
    const [categories, setCategories] = useState([])
    
    const { data, isLoading } = useSWR(`
        *[_type == 'category']{ 
            title,
            description,
            'children': *[_type == 'event' && references(^._id)]{
                ...,
                instructors[]->, 
                parent->,
            }
        }
    `)
    
    useEffect(() => {
        setCategories(data?.length ? data : [])
    }, [data])

    return { categories, isLoading }
}
