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

import CoursePage from './routes/CoursePage'
import LecturePage from './routes/LecturePage'
import Courses from './routes/Courses'
import Membership from './routes/Membership'
import Upcoming from './routes/Upcoming'

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
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/course/:id" element={<CoursePage />} />
            <Route path="/lecture/:id" element={<LecturePage />}/>
            <Route path="/instructors" element={<Speakers />} />
            <Route path="/instructor/:id" element={<SpeakerProfile />} />
            <Route path="/about" element={<About />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
      </BasicLayout>
    </Router>
  )
}

export default App
