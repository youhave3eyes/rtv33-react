import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ProfessionalHero = () => {
  return (
    <section className="gaia-hero">
      <div className="gaia-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="gaia-hero-title">
              Raise The Vibration
            </h1>
            <div className="gaia-accent-line" />
          </motion.div>

          <motion.p
            className="gaia-hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A conscious community platform for spiritual awakening, holistic wellness, 
            and transformative knowledge. Explore ancient wisdom meets modern science.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '2.5rem'
            }}
          >
            <Link to="/knowledge" className="gaia-btn">
              Explore Knowledge
            </Link>
            <Link to="/awakening" className="gaia-btn-outline">
              ✨ Enter Awakening
            </Link>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '3rem'
            }}
          >
            {[
              { icon: '🧘', label: 'Meditation & Mindfulness' },
              { icon: '🌿', label: 'Holistic Wellness' },
              { icon: '📚', label: 'Ancient Wisdom' },
              { icon: '🎵', label: 'Healing Frequencies' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="gaia-tag"
                style={{ fontSize: '1rem', padding: '0.75rem 1.25rem' }}
              >
                {item.icon} {item.label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '2rem',
            marginTop: '4rem',
            maxWidth: '900px',
            margin: '4rem auto 0'
          }}
        >
          {[
            { number: '528', label: 'Hz Love Frequency', icon: '💚' },
            { number: '1000+', label: 'Community Members', icon: '👥' },
            { number: '50+', label: 'Learning Paths', icon: '📖' },
            { number: '∞', label: 'Potential', icon: '✨' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="gaia-stat"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                {stat.icon}
              </div>
              <div className="gaia-stat-number">{stat.number}</div>
              <div className="gaia-stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProfessionalHero
