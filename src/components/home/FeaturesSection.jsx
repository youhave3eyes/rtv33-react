import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const FeaturesSection = () => {
  const features = [
    {
      icon: '📚',
      title: 'Knowledge Library',
      description: 'Access comprehensive guides on meditation, plant medicine, energy work, and consciousness expansion.',
      link: '/knowledge',
      color: '#667eea'
    },
    {
      icon: '👥',
      title: 'Conscious Community',
      description: 'Connect with like-minded seekers, share experiences, and grow together in a supportive environment.',
      link: '/community',
      color: '#1ABC9C'
    },
    {
      icon: '🎵',
      title: 'Healing Music',
      description: 'Explore 528Hz, 432Hz, and other sacred frequencies designed to elevate your consciousness.',
      link: '/music',
      color: '#9B59B6'
    },
    {
      icon: '🛍️',
      title: 'Curated Shop',
      description: 'Discover high-vibe products, crystals, supplements, and tools for your spiritual journey.',
      link: '/shop',
      color: '#F39C12'
    }
  ]

  return (
    <section className="gaia-section">
      <div className="gaia-container">
        <div className="gaia-section-header">
          <motion.h2
            className="gaia-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Your Journey Starts Here
          </motion.h2>
          <div className="gaia-accent-line" />
          <motion.p
            className="gaia-section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to elevate your consciousness and transform your life
          </motion.p>
        </div>

        <div className="gaia-grid-2">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link to={feature.link} style={{ textDecoration: 'none' }}>
                <div className="gaia-card">
                  <div className="gaia-feature">
                    <span 
                      className="gaia-feature-icon"
                      style={{ 
                        display: 'inline-block',
                        filter: `drop-shadow(0 0 10px ${feature.color}66)`
                      }}
                    >
                      {feature.icon}
                    </span>
                    <h3 className="gaia-feature-title">{feature.title}</h3>
                    <p className="gaia-feature-text">{feature.description}</p>
                    <div 
                      style={{ 
                        marginTop: '1.5rem',
                        color: feature.color,
                        fontWeight: 600,
                        fontSize: '1rem'
                      }}
                    >
                      Learn More →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
