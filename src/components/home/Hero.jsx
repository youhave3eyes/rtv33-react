import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useApp } from '../../context/AppContext'

const Hero = () => {
  const { frequency } = useApp()
  const [animatedFreq, setAnimatedFreq] = useState(200)

  useEffect(() => {
    let current = 200
    const target = frequency
    const increment = (target - current) / 60
    const interval = setInterval(() => {
      current += increment
      setAnimatedFreq(Math.round(current))
      if (Math.abs(current - target) < 1) {
        clearInterval(interval)
        setAnimatedFreq(target)
      }
    }, 30)
    return () => clearInterval(interval)
  }, [frequency])

  const scrollToMethods = () => {
    document.getElementById('methods')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-layout">
          <motion.div 
            className="hero-content"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="glitch-text"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              RAISE THE VIBRATION
            </motion.h1>
            
            <p className="hero-subtitle">Energy in Motion = E-Motion</p>
            
            <p className="hero-description">
              Discover the power within you. Learn how food, frequencies, meditation, and environment 
              shape your energetic state. Take control of your vibration, take control of your life.
            </p>

            <motion.div 
              className="frequency-display"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  '0 0 30px rgba(139, 92, 246, 0.3)',
                  '0 0 50px rgba(139, 92, 246, 0.6)',
                  '0 0 30px rgba(139, 92, 246, 0.3)'
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="hz-label">Your Current Frequency:</span>
              <span className="hz-value">{animatedFreq}</span>
              <span className="hz-unit">Hz</span>
            </motion.div>

            <motion.button 
              className="cta-button"
              onClick={scrollToMethods}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Begin Your Journey
              <span className="button-glow"></span>
            </motion.button>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="energy-orb"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
