import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { AppProvider } from './context/AppContext'

// Layout Components
import Navbar from './components/layout/Navbar'
import MatrixNavbar from './components/layout/MatrixNavbar'
import Footer from './components/layout/Footer'
import CosmicBackground from './components/layout/CosmicBackground'
import MatrixRain from './components/effects/MatrixRain'

// Pages
import Home from './pages/Home'
import Knowledge from './pages/Knowledge'
import KnowledgeTopic from './pages/KnowledgeTopic'
import Community from './pages/Community'
import Music from './pages/Music'
import Shop from './pages/Shop'
import RtvHacks from './pages/RtvHacks'
import Awakening from './pages/Awakening'
import ORMUS from './pages/ORMUS'
import Tesla from './pages/Tesla'
import ETContact from './pages/ETContact'
import PlantMedicine from './pages/PlantMedicine'
import OrganicLiving from './pages/OrganicLiving'
import EarthShape from './pages/EarthShape'
import NotFound from './pages/NotFound'

const GlobalMatrixRain = () => {
  const location = useLocation()
  const isAwakening = location.pathname === '/awakening'
  const isKnowledge = location.pathname.startsWith('/knowledge')

  // Only show Matrix rain in Awakening section
  if (isAwakening) {
    return <MatrixRain color="#00ff41" glowColor="#00ff41" />
  }
  
  // Purple rain for knowledge
  if (isKnowledge) {
    return <MatrixRain color="#9D4EDD" glowColor="#C77DFF" />
  }
  
  // No Matrix rain on professional pages
  return null
}

const DynamicBackground = () => {
  const location = useLocation()
  const isAwakening = location.pathname === '/awakening'
  
  // Only show cosmic background on Awakening
  if (isAwakening) {
    return <CosmicBackground />
  }
  
  return null
}

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          <DynamicBackground />
          <GlobalMatrixRain />
          <MatrixNavbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/knowledge" element={<Knowledge />} />
              <Route path="/knowledge/:topic" element={<KnowledgeTopic />} />
              <Route path="/community" element={<Community />} />
              <Route path="/music" element={<Music />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/hacks" element={<RtvHacks />} />
              <Route path="/awakening" element={<Awakening />} />
              <Route path="/ormus" element={<ORMUS />} />
              <Route path="/tesla" element={<Tesla />} />
              <Route path="/contact" element={<ETContact />} />
              <Route path="/medicine" element={<PlantMedicine />} />
              <Route path="/organic" element={<OrganicLiving />} />
              <Route path="/earth-shape" element={<EarthShape />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  )
}

export default App
