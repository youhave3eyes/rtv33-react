import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'

const TOPICS = {
  meditation: {
    title: 'Meditation & Consciousness',
    icon: '🧘',
    intro:
      'Meditation is the skill of attention. Train awareness, regulate the nervous system, and access deeper states of perception.'
  },
  nutrition: {
    title: 'Sacred Nutrition',
    icon: '🥗',
    intro:
      'Food is information. High-quality ingredients, hydration, and mindful eating support energy, clarity, and mood.'
  },
  geometry: {
    title: 'Sacred Geometry',
    icon: '🔺',
    intro:
      'Geometry is the language of creation. Study the patterns that show up in nature, art, and consciousness.'
  },
  'third-eye': {
    title: 'Third Eye Activation',
    icon: '👁️',
    intro:
      'Practices that support intuition, clarity, and inner vision—breath, focus, sleep hygiene, and reducing noise.'
  },
  quantum: {
    title: 'Quantum Consciousness',
    icon: '🌌',
    intro:
      'Explore where observation, mind, and reality intersect. Hold curiosity and test ideas against experience.'
  },
  'ancient-wisdom': {
    title: 'Ancient Wisdom',
    icon: '📿',
    intro:
      'Core principles from mystery traditions: discipline, ethics, self-knowledge, and transformation.'
  }
}

const KnowledgeTopic = () => {
  const { topic } = useParams()
  const data = TOPICS[topic]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="scanline"
      style={{ position: 'relative', background: '#000', minHeight: '100vh' }}
    >
      <section style={{ padding: '6.5rem 1.25rem 2rem' }}>
        <div className="container">
          <div className="rtv-card" style={{ maxWidth: 980, margin: '0 auto' }}>
            <div style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '0.5rem' }}>
              {data?.icon ?? '📚'}
            </div>
            <h1
              style={{
                textAlign: 'center',
                fontSize: 'clamp(1.8rem, 5vw, 3rem)',
                fontWeight: 900,
                marginBottom: '0.75rem',
                background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 50%, #00FF41 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {data?.title ?? 'Knowledge Topic'}
            </h1>
            <p style={{ color: '#E2E8F0', lineHeight: 1.8, fontSize: '1rem', marginBottom: '1rem' }}>
              {data?.intro ?? 'This topic page is being built. Choose another topic from the Knowledge portal.'}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/knowledge" className="awakening-btn" style={{ textDecoration: 'none' }}>
                ← Back to Knowledge
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

export default KnowledgeTopic
