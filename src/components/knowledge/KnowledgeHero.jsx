import { motion } from 'framer-motion'

const KnowledgeHero = () => {
  return (
    <section className="knowledge-hero">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">Knowledge Portal</h1>
          <p className="hero-subtitle">
            Explore suppressed truths, ancient wisdom, and new science. Your journey to understanding begins here.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default KnowledgeHero
