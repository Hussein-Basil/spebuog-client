import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Layout from './templates/Layout'

import Home from './routes/Home'
import Events from './routes/Events'
import Officers from './routes/Officers'
import Contact from './routes/Contact'
import NotFound from './routes/Errors/NotFound'

const ScrollToTop = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return children
}

const App = () => {
  return (
    <Router forceRefresh={true}>
      <Layout>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/officers" element={<Officers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
      </Layout>
    </Router>
  )
}

export default App
