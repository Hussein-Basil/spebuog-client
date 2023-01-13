import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import BasicLayout from './templates/BasicLayout'

import Home from './routes/Home'
import Speakers from './routes/Speakers'
import Contact from './routes/Contact'
import NotFound from './routes/Errors/NotFound'
import SpeakerProfile from './routes/SpeakerProfile'
import About from './routes/About'

import EventPage from './routes/EventPage'
import Courses from './routes/Courses'
import Membership from './routes/Membership'
import Certificate from './routes/Certificate'

const ScrollToTop = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return children
}

const App = () => {
  return (
    <Router forceRefresh={true}>
      <BasicLayout>
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
