import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import BasicLayout from './layouts/BasicLayout'

import Home from './pages/Home'
import Speakers from './pages/Instructors'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import SpeakerProfile from './pages/InstructorProfile'
import About from './pages/About'

import EventPage from './pages/EventPage'
import Courses from './pages/Courses'
import Membership from './pages/Membership'
import Certificate from './pages/Certificate'

const ScrollToTop = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return children
}

const App = () => {
  return (
    <Router forceRefresh={true}>
      <BasicLayout dir="rtl">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:slug" element={<EventPage />} />
            <Route path="/lecture/:slug" element={<EventPage />}/>
            <Route path="/instructors" element={<Speakers />} />
            <Route path="/instructor/:id" element={<SpeakerProfile />} />
            <Route path="/about" element={<About />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
      </BasicLayout>
    </Router>
  )
}

export default App
