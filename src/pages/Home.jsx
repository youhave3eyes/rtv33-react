import { motion } from 'framer-motion'
import ProfessionalHero from '../components/home/ProfessionalHero'
import FeaturesSection from '../components/home/FeaturesSection'
import TopicsSection from '../components/home/TopicsSection'
import FrequencyPlayer from '../components/home/FrequencyPlayer'
import '../styles/gaia-professional.css'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'relative', background: 'var(--gaia-deep-blue)' }}
    >
      {/* Professional Hero Section - Gaia Style */}
      <ProfessionalHero />
      
      {/* Features Overview */}
      <FeaturesSection />
      
      {/* Topics Grid */}
      <TopicsSection />
      
      {/* Frequency Player - Keep this useful tool */}
      <div className="gaia-section gaia-section-alt">
        <div className="gaia-container">
          <div className="gaia-section-header">
            <h2 className="gaia-section-title">Healing Frequencies</h2>
            <div className="gaia-accent-line" />
            <p className="gaia-section-subtitle">
              Experience the power of 528Hz Love Frequency and other sacred tones
            </p>
          </div>
          <FrequencyPlayer />
        </div>
      </div>
    </motion.div>
  )
}

export default Home
