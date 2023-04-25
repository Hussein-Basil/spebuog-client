import React from 'react'
import MissionImg from '../../../assets/home/mission-image.png'

import { useUser } from '../../../contexts/UserContext'
import ResponsiveWidth from '../../../layouts/ResponsiveWidth'

const Mission = () => {
    const { language } = useUser()
    return (
        <section id="mission" className="responsive-width">
            <img src={MissionImg} alt="Our Mission" />
            <div className="mission-text">
                <h3>{language.HOMEPAGE.MISSION.HEADING}</h3>
                <p>{language.HOMEPAGE.MISSION.TEXT1}</p>
                <p>{language.HOMEPAGE.MISSION.TEXT2}</p>
            </div>
        </section>
    )
}

export default Mission