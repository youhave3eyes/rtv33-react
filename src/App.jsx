import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { AppProvider } from './context/AppContext'

// Layout Components
import Navbar from './components/layout/Navbar'
import MatrixNavbar from './components/layout/MatrixNavbar'
import Footer from './components/layout/Footer'
import CosmicBackground from './components/layout/CosmicBackground'

// Pages
import Home from './pages/Home'
import Knowledge from './pages/Knowledge'
import Community from './pages/Community'
import Music from './pages/Music'
import Shop from './pages/Shop'

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          <CosmicBackground />
          <MatrixNavbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/knowledge" element={<Knowledge />} />
              <Route path="/community" element={<Community />} />
              <Route path="/music" element={<Music />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  )
}

export default App
