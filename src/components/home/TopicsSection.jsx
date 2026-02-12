import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const TopicsSection = () => {
  const topics = [
    {
      title: 'ORMUS & Monoatomic Gold',
      icon: '✨',
      description: 'Explore the mystical properties of monoatomic elements',
      path: '/ormus',
      color: '#FFD700'
    },
    {
      title: 'Tesla Energy & Frequencies',
      icon: '⚡',
      description: 'Understanding energy, frequency, and vibration',
      path: '/tesla',
      color: '#00D9FF'
    },
    {
      title: 'ET Contact & Cosmic Beings',
      icon: '👽',
      description: 'Explore extraterrestrial consciousness and contact',
      path: '/contact',
      color: '#9D4EDD'
    },
    {
      title: 'Plant Medicine Journeys',
      icon: '🍄',
      description: 'Sacred plants and expanded consciousness',
      path: '/medicine',
      color: '#3A86FF'
    },
    {
      title: 'Organic Living',
      icon: '🌿',
      description: 'Holistic health and frequency-aligned nutrition',
      path: '/organic',
      color: '#06D6A0'
    },
    {
      title: 'Earth & Cosmology',
      icon: '🌍',
      description: 'Alternative perspectives on our world',
      path: '/earth-shape',
      color: '#FFBE0B'
    }
  ]

  return (
    <section className="gaia-section gaia-section-alt">
      <div className="gaia-container">
        <div className="gaia-section-header">
          <motion.h2
            className="gaia-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Expand Your Consciousness
          </motion.h2>
          <div className="gaia-accent-line" />
          <motion.p
            className="gaia-section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Deep dive into transformative topics that challenge conventional thinking
          </motion.p>
        </div>

        <div className="gaia-grid-3">
          {topics.map((topic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link to={topic.path} style={{ textDecoration: 'none' }}>
                <div 
                  className="gaia-card"
                  style={{
                    borderColor: `${topic.color}44`,
                    minHeight: '220px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div 
                      style={{ 
                        fontSize: '3rem', 
                        textAlign: 'center',
                        marginBottom: '1rem',
                        filter: `drop-shadow(0 0 10px ${topic.color}66)`
                      }}
                    >
                      {topic.icon}
                    </div>
                    <h3 
                      className="gaia-card-title"
                      style={{ 
                        textAlign: 'center',
                        color: topic.color,
                        fontSize: '1.25rem'
                      }}
                    >
                      {topic.title}
                    </h3>
                    <p 
                      className="gaia-card-description"
                      style={{ textAlign: 'center', marginTop: '0.75rem' }}
                    >
                      {topic.description}
                    </p>
                  </div>
                  <div 
                    style={{ 
                      marginTop: '1.5rem',
                      textAlign: 'center',
                      color: topic.color,
                      fontWeight: 600,
                      fontSize: '0.95rem'
                    }}
                  >
                    Explore →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA to Rabbit Hole */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            marginTop: '4rem',
            textAlign: 'center',
            padding: '3rem 2rem',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
            borderRadius: '16px',
            border: '1px solid rgba(139, 92, 246, 0.3)'
          }}
        >
          <h3 
            style={{ 
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--gaia-text-primary)',
              marginBottom: '1rem'
            }}
          >
            Ready to Go Deeper? ✨
          </h3>
          <p 
            style={{ 
              fontSize: '1.1rem',
              color: 'var(--gaia-text-secondary)',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}
          >
            Enter the Awakening for an immersive journey into forbidden knowledge and consciousness expansion
          </p>
          <Link to="/awakening" className="gaia-btn" style={{ fontSize: '1.1rem' }}>
            🔓 Enter the Awakening
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default TopicsSection
