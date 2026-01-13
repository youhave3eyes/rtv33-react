import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useApp } from '../context/AppContext'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Methods from '../components/home/Methods'
import FrequencyPlayer from '../components/home/FrequencyPlayer'
import HighVibeFood from '../components/home/HighVibeFood'
import VibeCalculator from '../components/home/VibeCalculator'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Methods />
      <FrequencyPlayer />
      <HighVibeFood />
      <VibeCalculator />
    </motion.div>
  )
}

export default Home
