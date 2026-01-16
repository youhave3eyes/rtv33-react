import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const EarthShape = () => {
  const tests = [
    {
      title: 'Predictions first',
      icon: '🎯',
      text: 'Write down what each model predicts before testing. If a model can’t predict, it can’t guide you.'
    },
    {
      title: 'Repeatability',
      icon: '🔁',
      text: 'Repeat with different locations/times. The best tests are simple, documented, and reproducible.'
    },
    {
      title: 'Navigation constraints',
      icon: '🧭',
      text: 'Time zones, star movement by latitude, and long-distance navigation constrain geometry strongly.'
    }
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="scanline" style={{ position: 'relative', background: '#000', minHeight: '100vh' }}>
      <section style={{ padding: '6.5rem 1.25rem 2rem' }}>
        <div className="container">
          <div className="rtv-card" style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ fontSize: '2.6rem', textAlign: 'center', marginBottom: '0.5rem' }}>🌍</div>
            <h1 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, marginBottom: '0.75rem' }}>
              <span style={{ background: 'linear-gradient(135deg,#06B6D4,#8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                THE SHAPE OF EARTH
              </span>
            </h1>
            <p style={{ color: '#E2E8F0', lineHeight: 1.8, textAlign: 'center', maxWidth: 920, margin: '0 auto 1rem' }}>
              An experiment-first hub: compare claims by testing predictions.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/rabbit-hole" className="awakening-btn pulse-glow" style={{ textDecoration: 'none' }}>
                🐇 Down the Rabbit Hole
              </Link>
              <Link to="/knowledge/geometry" className="awakening-btn" style={{ textDecoration: 'none' }}>
                🔺 Sacred Geometry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 1.25rem 4rem' }}>
        <div className="container">
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {tests.map((t) => (
              <div key={t.title} className="rtv-card" style={{ borderColor: 'rgba(6,182,212,0.25)' }}>
                <div style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '0.5rem' }}>{t.icon}</div>
                <h2 style={{ margin: 0, textAlign: 'center', fontSize: '1.2rem', fontWeight: 900, color: '#E2E8F0' }}>{t.title}</h2>
                <p style={{ color: '#E2E8F0', lineHeight: 1.85, marginTop: '0.6rem' }}>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default EarthShape
