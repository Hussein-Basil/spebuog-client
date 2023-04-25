import React from 'react'

import Facebook from '../assets/social/facebook.svg'
import Telegram from '../assets/social/telegram-1.svg'
import Linkedin from '../assets/social/linkedin.svg'
import Instagram from '../assets/social/instagram.svg'

import Logo from '../assets/shared/spe-logo-2020.png'

import { useUser } from '../contexts/UserContext'

const Footer = () => {
    const { language } = useUser()
    return (
        <footer>
            <div className="fast-links">
                <h5>{language.FOOTER.FASTLINKS}</h5>
                <a>{language.FOOTER.HOME}</a>
                <a>{language.FOOTER.COURSES}</a>
                <a>{language.FOOTER.INSTRUCTORS}</a>
                <a>{language.FOOTER.MEMBERSHIP}</a>
                <a>{language.FOOTER.ABOUT}</a>
            </div>
            <div className="about-spe">
                <img src={Logo} alt="SPE Logo" width="50" height="50" />
                <p>{language.FOOTER.ABOUT_TEXT}</p>
            </div>
            <div className="social-links">
                <a href="https://www.facebook.com/spebuog" target="_blank"><img src={Facebook} alt="Facebook Page" /></a>
                <a href="https://www.instagram.com/spebuog" target="_blank"><img src={Instagram} alt="Instagram Account" /></a>
                <a href="https://t.me/SPEBUOG" target="_blank"><img src={Telegram} alt="Telegram Channel" /></a>
                <a href="https://www.linkedin.com/company/buog-spe-student-chapter" target="_blank"><img src={Linkedin} alt="Linkedin Page" /></a>
            </div>
        </footer>
    )
}

export default Footer
