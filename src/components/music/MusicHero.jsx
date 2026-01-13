import { motion } from 'framer-motion'

const MusicHero = () => {
  return (
    <section className="knowledge-hero">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">🎵 High-Vibe Music</h1>
          <p className="hero-subtitle">
            Music that elevates consciousness and raises your frequency
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default MusicHero
