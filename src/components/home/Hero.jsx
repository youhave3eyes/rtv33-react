import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToMethods = () => {
    document.getElementById('methods')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-modern">
      {/* Animated Background */}
      <div className="hero-bg-gradient"></div>
      <div className="hero-grid-overlay"></div>
      
      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="hero-layout-modern">
          <motion.div 
            className="hero-content-modern"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Main Heading with 3D Effect */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="hero-title-modern">
                <span className="title-line">RAIS3 TH3</span>
                <span className="title-line gradient-text">VIBRATION</span>
              </h1>
            </motion.div>
            
            {/* Subtitle with Glass Effect */}
            <motion.div
              className="hero-badge"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="badge-icon">⚡</span>
              Energy in Motion = E-Motion
              <span className="badge-icon">⚡</span>
            </motion.div>
            
            {/* Description */}
            <motion.p 
              className="hero-description-modern"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{ 
                background: 'rgba(0, 0, 0, 0.5)', 
                padding: '1rem 1.5rem', 
                borderRadius: '8px',
                backdropFilter: 'blur(5px)'
              }}
            >
              Discover the power within you. Transform your life through the science of frequency, nutrition, and mindfulness.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              className="hero-actions"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button 
                className="cta-primary"
                onClick={scrollToMethods}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Start Your Journey</span>
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
              
              <motion.button 
                className="cta-secondary"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats Display */}
            <motion.div 
              className="hero-stats"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="stat-item">
                <div className="stat-number">528</div>
                <div className="stat-label">Hz Healing</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Transformed</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Natural</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element - 3D Orb */}
          <motion.div 
            className="hero-visual-modern"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="orb-container">
              <motion.div 
                className="energy-orb-modern"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="orb-ring ring-1"></div>
                <div className="orb-ring ring-2"></div>
                <div className="orb-ring ring-3"></div>
                <div className="orb-core"></div>
              </motion.div>
              
              {/* Matrix Number Particles replacing floating icons */}
              {Array.from({ length: 20 }).map((_, i) => {
                const chars = ['0','1','2','3','4','5','6','7','8','9','ア','イ','ウ','エ','オ','カ','キ','ク','ケ','コ'];
                return (
                  <motion.div 
                    key={i}
                    className="floating-matrix-number"
                    animate={{ 
                      y: [0, -100 - Math.random() * 60, 0],
                      x: [0, (Math.random() - 0.5) * 40, 0],
                      opacity: [0.2, 1, 0.2],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{ 
                      duration: 4 + Math.random() * 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                    style={{
                      position: 'absolute',
                      left: `${5 + (i * 4.5)}%`,
                      bottom: `${10 + Math.random() * 20}%`,
                      fontSize: '28px',
                      fontWeight: 'bold',
                      color: '#00FF41',
                      textShadow: '0 0 15px #00FF41, 0 0 30px #00FF41',
                      fontFamily: 'Courier New, monospace',
                      pointerEvents: 'none',
                      zIndex: 1
                    }}
                  >
                    {chars[Math.floor(Math.random() * chars.length)]}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-line"></div>
        <div className="scroll-text">Scroll to explore</div>
      </motion.div>
    </section>
  )
}

export default Hero
