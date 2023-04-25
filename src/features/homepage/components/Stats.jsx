import React from 'react'

import { useUser } from '../../../contexts/UserContext'
import Arrow from '../../../assets/home/arrow.png'

const Stats = () => {
    const { language } = useUser()
    return (
        <section id="stats" className="responsive-width">
            <span>{language.HOMEPAGE.STATS.SUBHEADING}</span>
            <h2>{language.HOMEPAGE.STATS.HEADING}</h2>
            <div className="stats-container">
                <div className="stats-item">
                    <span>{language.HOMEPAGE.STATS.YEARS_SUBHEADING}</span>
                    <h3>{language.HOMEPAGE.STATS.YEARS_HEADING}</h3>
                </div>
                <img src={Arrow} />
                <div className="stats-item">
                <span>{language.HOMEPAGE.STATS.LECTURES_SUBHEADING}</span>
                    <h3>{language.HOMEPAGE.STATS.LECTURES_HEADING}</h3>
                </div>
                <img src={Arrow} />
                <div className="stats-item">
                <span>{language.HOMEPAGE.STATS.INSTRUCTORS_SUBHEADING}</span>
                    <h3>{language.HOMEPAGE.STATS.INSTRUCTORS_HEADING}</h3>
                </div>
            </div>
        </section>
    )
}

export default Stats