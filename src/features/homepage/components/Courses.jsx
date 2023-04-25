import React from 'react'
import { Flex } from '@chakra-ui/react'

import useGetHomeCourses from '../../../hooks/useGetHomeCourses'

import CourseBackground from '../../../assets/home/course_background.png'

import { useUser } from '../../../contexts/UserContext'

const Courses = () => {
    const { events, isLoading } = useGetHomeCourses()
    const { language } = useUser()

    const nullSlides = [...Array(4)].map((_, key) => (
        <div className="course-item">
        <img src={CourseBackground} />
        {/* <h3>{event?.title}</h3> */}
        <p>في هذه الدورة سوف تتعلم بعض الموضوعات المفيدة في النفط</p>
        <div className="course-item__control">
            <button>اشتراك</button>
            <button>معاينة</button>
        </div>
    </div>
    ))

    return (
        <section id="courses" className="responsive-width">
            <h2>{language.HOMEPAGE.COURSES.HEADLINE}</h2>
            <div className="courses-grid">
                {isLoading ? nullSlides : events?.slice(0, 3).map((event, idx) => (
                <div className="course-item">
                    <img src={event.img || CourseBackground} />
                    <h3>{event?.title}</h3>
                    <p>في هذه الدورة سوف تتعلم بعض الموضوعات المفيدة في النفط</p>
                    <div className="course-item__control">
                        <button>{language.HOMEPAGE.COURSES.REGISTER}</button>
                        <button>{language.HOMEPAGE.COURSES.VIEW}</button>
                    </div>
                </div>
                ))}
            </div>
            <button className="courses-load-more">{language.HOMEPAGE.COURSES.BROWSE}</button>
        </section>
    )
}

export default Courses