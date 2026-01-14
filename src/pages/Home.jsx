import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useApp } from '../context/AppContext'
import Hero from '../components/home/Hero'
import MatrixHero from '../components/home/MatrixHero'
import About from '../components/home/About'
import Methods from '../components/home/Methods'
import FrequencyPlayer from '../components/home/FrequencyPlayer'
import HighVibeFood from '../components/home/HighVibeFood'
import VibeCalculator from '../components/home/VibeCalculator'
import MatrixRain from '../components/effects/MatrixRain'
import TruthSeekerSection from '../components/sections/TruthSeekerSection'
import MeditationSection from '../components/sections/MeditationSection'
import HealthFoodSection from '../components/sections/HealthFoodSection'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="scanline"
      style={{ position: 'relative' }}
    >
      {/* Matrix Rain Background Effect */}
      <MatrixRain />
      
      {/* Matrix Hero Section */}
      <MatrixHero />
      
      {/* Original Sections */}
      <About />
      
      {/* New Truth Seeker Portal */}
      <TruthSeekerSection />
      
      {/* Meditation & Consciousness */}
      <MeditationSection />
      
      {/* Sacred Nutrition */}
      <HealthFoodSection />
      
      {/* Original Sections */}
      <Methods />
      <FrequencyPlayer />
      <HighVibeFood />
      <VibeCalculator />
    </motion.div>
  )
}

export default Home
