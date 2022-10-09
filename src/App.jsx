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

import Course from './routes/CoursePage'
import Courses from './routes/Courses'

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
            <Route path="/course/:id" element={<Course />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/speaker/:id" element={<SpeakerProfile />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </ScrollToTop>
      </BasicLayout>
    </Router>
  )
}

export default App
