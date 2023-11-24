import React from 'react'
import { useUser } from '../../../contexts/UserContext'
import competition from '../../../assets/home/spe_competition.jpg'
import trip from '../../../assets/home/spe_field_trip.jpg'
import conference from '../../../assets/home/spe_conference.jpg'

const Services = () => {
    const { language } = useUser()
    
    const serviceItemByLang = language.lang === 'ar' ? "service-item" : "service-item-english-only"

    return (
        <section id="services" className="responsive-width">
            <h2>{language.HOMEPAGE.SERVICES.HEADLINE}</h2>
            <div className="services-container">
                <div className={serviceItemByLang}>
                    <picture>
                        <img src={competition} loading="lazy" alt="Student Competition 2023"/>
                    </picture>
                    <div className="service-content">
                        <h3>{language.HOMEPAGE.SERVICES.S1_HEADLINE}</h3>
                        <p>{language.HOMEPAGE.SERVICES.S1_TEXT}</p>
                    </div>
                </div>
                <div className={serviceItemByLang}>
                    <picture>
                        <img src={trip} loading="lazy" alt="SLB Field Trip 2022" />
                    </picture>
                    <div className="service-content">
                        <h3>{language.HOMEPAGE.SERVICES.S2_HEADLINE}</h3>
                        <p>{language.HOMEPAGE.SERVICES.S2_TEXT}</p>
                    </div>

                </div>
                <div className={serviceItemByLang}>
                    <picture>
                        <img src={conference} loading="lazy" alt="GOTECH Conference 2023" />
                    </picture>
                    <div className="service-content">
                        <h3>{language.HOMEPAGE.SERVICES.S3_HEADLINE}</h3>
                        <p>{language.HOMEPAGE.SERVICES.S3_TEXT}</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Services