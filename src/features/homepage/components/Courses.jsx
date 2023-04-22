import React from 'react'
import { Flex } from '@chakra-ui/react'

import useGetHomeCourses from '../../../hooks/useGetHomeCourses'

import CourseBackground from '../../../assets/home/course_background.png'

const CourseItem = ({ course }) => {
    return (
        <div className="course-item">
            <img src={CourseBackground} />
            <h3>{course?.title}</h3>
            <p>في هذه الدورة سوف تتعلم بعض الموضوعات المفيدة في النفط</p>
            <div className="course-item__control">
                <button>اشتراك</button>
                <button>معاينة</button>
            </div>
        </div>
        // <LinkBox>
        // <LinkOverlay  href={`/${["course_lecture", "webinar"].includes(event.event_type) ? 'lecture' : 'course'}/${event.id}`}>
    )
}

const Courses = () => {
    const { events, isLoading } = useGetHomeCourses()

    const nullSlides = [...Array(4)].map((_, key) => (
        <CourseItem loading={true} />
    ))

    return (
        <Flex flexDir="column" align="center" my="3em" w={{
            base: '100vw',
            lg: '1114px',
            xl: '1400px',
            '2xl': '1400px',
        }}>
            <h2>أحدث الدورات</h2>
            <div className="courses-grid">
                {isLoading ? nullSlides : events?.slice(0, 3).map((event, idx) => (
                <CourseItem course={event} key={idx}  />
                ))}
            </div>
            <button className="courses-load-more">تصفح المزيد من الدورات</button>
            
        </Flex>
    )
}

export default Courses