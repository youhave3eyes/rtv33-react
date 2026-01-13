import { motion } from 'framer-motion'

const FeaturedContent = () => {
  return (
    <section className="featured-section">
      <div className="container">
        <h2 className="section-title">🔥 Featured Knowledge</h2>
        <motion.div 
          className="featured-card large"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="featured-image">⚡</div>
          <div className="featured-content">
            <span className="featured-badge">Editor's Pick</span>
            <h3>Tesla's Lost Inventions: Free Energy Suppression</h3>
            <p>
              Deep dive into Nikola Tesla's revolutionary discoveries that were hidden from humanity. 
              Learn about wireless power, radiant energy, and why they don't want you to know.
            </p>
            <div className="featured-meta">
              <span>📖 45 min read</span>
              <span>⚡ Advanced</span>
              <span>🔥 Trending</span>
            </div>
            <motion.button 
              className="featured-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedContent
