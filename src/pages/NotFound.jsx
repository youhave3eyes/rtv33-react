import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const NotFound = () => {
  const location = useLocation()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="scanline"
      style={{ position: 'relative', background: '#000', minHeight: '100vh' }}
    >
      <section style={{ padding: '7rem 1.25rem 3rem' }}>
        <div className="container">
          <div className="rtv-card" style={{ maxWidth: 980, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>404</div>
            <h1
              style={{
                fontSize: 'clamp(1.8rem, 4.5vw, 3rem)',
                fontWeight: 900,
                marginBottom: '0.75rem',
                background: 'linear-gradient(135deg,#8B5CF6,#06B6D4,#00FF41)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Page not found
            </h1>
            <p style={{ color: '#E2E8F0', lineHeight: 1.8, marginBottom: '1rem' }}>
              There\'s nothing at <code style={{ color: '#CBD5E1' }}>{location.pathname}</code>.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/" className="awakening-btn" style={{ textDecoration: 'none' }}>
                ← Home
              </Link>
              <Link to="/knowledge" className="awakening-btn" style={{ textDecoration: 'none' }}>
                📚 Knowledge
              </Link>
              <Link to="/rabbit-hole" className="awakening-btn pulse-glow" style={{ textDecoration: 'none' }}>
                🐇 Down the Rabbit Hole
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default NotFound
