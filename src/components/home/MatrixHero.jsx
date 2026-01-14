import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import SacredGeometry from '../effects/SacredGeometry'

const MatrixHero = () => {
  const [typedText, setTypedText] = useState('')
  const fullText = 'WAKE UP, NEO...'
  
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 150)
    
    return () => clearInterval(interval)
  }, [])

  const pills = [
    {
      color: 'red',
      title: 'Stay Comfortable',
      description: 'Continue in the simulation. Everything you know feels safe.',
      gradient: 'linear-gradient(135deg, #ff0000 0%, #8b0000 100%)'
    },
    {
      color: 'blue',
      title: 'SEE THE TRUTH',
      description: 'Awaken to reality. The rabbit hole goes deep.',
      gradient: 'linear-gradient(135deg, #00ffff 0%, #0000ff 100%)'
    }
  ]

  return (
    <section 
      className="matrix-hero sacred-geometry-bg digital-grid"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '2rem'
      }}
    >
      {/* Sacred Geometry Background */}
      <div style={{ position: 'absolute', top: '10%', left: '10%', opacity: 0.1, zIndex: 0 }}>
        <SacredGeometry type="flower" size={400} color="#00ff41" />
      </div>
      <div style={{ position: 'absolute', bottom: '10%', right: '10%', opacity: 0.1, zIndex: 0 }}>
        <SacredGeometry type="metatron" size={350} color="#9d4edd" />
      </div>

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        paddingTop: '80px'
      }}>
        
        {/* Main Title with Glitch Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ marginBottom: '2rem' }}
        >
          <h1 
            className="glitch-text" 
            data-text={typedText}
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              marginBottom: '1rem',
              fontFamily: 'Orbitron, monospace'
            }}
          >
            {typedText}<span className="pulse-glow" style={{ color: 'var(--matrix-neon-green)' }}>_</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="holographic"
            style={{ 
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              marginBottom: '1rem'
            }}
          >
            The Matrix has you...
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="neon-text"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}
          >
            Follow the white rabbit 🐇
          </motion.p>
        </motion.div>

        {/* Red Pill / Blue Pill Choice */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 4, duration: 0.8 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginTop: '3rem',
            marginBottom: '3rem'
          }}
        >
          {pills.map((pill, index) => (
            <motion.div
              key={pill.color}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4.5 + index * 0.3, duration: 0.6 }}
              className="consciousness-card"
              style={{
                cursor: 'pointer',
                background: `linear-gradient(135deg, ${pill.gradient})`,
                border: pill.color === 'blue' ? '3px solid var(--matrix-neon-green)' : '2px solid rgba(255, 0, 0, 0.5)',
                padding: '2.5rem',
                minHeight: '250px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Pill Icon */}
              <div style={{
                fontSize: '4rem',
                marginBottom: '1rem',
                filter: pill.color === 'blue' ? 'drop-shadow(0 0 20px #00ffff)' : 'drop-shadow(0 0 20px #ff0000)'
              }}>
                💊
              </div>

              <h3 
                className={pill.color === 'blue' ? 'glitch-text neon-text' : ''}
                data-text={pill.title}
                style={{ 
                  fontSize: '1.8rem',
                  marginBottom: '1rem',
                  color: pill.color === 'blue' ? 'var(--matrix-neon-green)' : '#fff',
                  textShadow: pill.color === 'blue' ? 'var(--matrix-glow)' : '0 0 10px rgba(255, 0, 0, 0.8)'
                }}
              >
                {pill.title}
              </h3>

              <p style={{ 
                fontSize: '1rem',
                color: '#fff',
                opacity: 0.9,
                lineHeight: '1.6'
              }}>
                {pill.description}
              </p>

              {pill.color === 'blue' && (
                <div className="truth-seeker-badge pulse-glow" style={{ marginTop: '1rem' }}>
                  RECOMMENDED
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.5, duration: 1 }}
          className="floating"
          style={{ marginTop: '3rem' }}
        >
          <div className="neon-text" style={{ fontSize: '1rem', marginBottom: '1rem' }}>
            DISCOVER THE TRUTH BELOW
          </div>
          <div className="neon-text" style={{ fontSize: '2rem' }}>
            ↓
          </div>
        </motion.div>

        {/* Featured Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 6, duration: 0.8 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginTop: '4rem'
          }}
        >
          {[
            { number: '432', label: 'Hz Healing Frequency', icon: '🎵' },
            { number: '∞', label: 'Consciousness Levels', icon: '👁️' },
            { number: '528', label: 'Love Frequency', icon: '💚' },
            { number: '963', label: 'Pineal Activation', icon: '🧘' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="neon-border pulse-glow"
              style={{
                padding: '1.5rem',
                background: 'rgba(0, 255, 65, 0.05)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                {stat.icon}
              </div>
              <div className="holographic" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                {stat.number}
              </div>
              <div className="neon-text" style={{ fontSize: '0.9rem' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default MatrixHero
