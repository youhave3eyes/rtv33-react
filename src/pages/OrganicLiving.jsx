import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const OrganicLiving = () => {
  const pillars = [
    { title: 'Water', icon: '💧', text: 'Hydration, minerals, and consistency. Start your day with water before stimulation.' },
    { title: 'Food', icon: '🥗', text: 'Whole foods > processed. Track what increases calm energy vs. inflammation.' },
    { title: 'Sleep', icon: '🌙', text: 'The master upgrade. Same bedtime, morning light, less late-night screens.' },
    { title: 'Movement', icon: '🚶', text: 'Daily walk + mobility. Energy rises when circulation and breath improve.' },
    { title: 'Nervous System', icon: '🫁', text: 'Breathwork + long exhales. Coherence beats intensity.' },
    { title: 'Environment', icon: '🏡', text: 'Clean air, reduced clutter, sunlight, and simple routines you can keep.' }
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="scanline" style={{ position: 'relative', background: '#000', minHeight: '100vh' }}>
      <section style={{ padding: '6.5rem 1.25rem 2rem' }}>
        <div className="container">
          <div className="rtv-card" style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ fontSize: '2.6rem', textAlign: 'center', marginBottom: '0.5rem' }}>🌿</div>
            <h1 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, marginBottom: '0.75rem' }}>
              <span style={{ background: 'linear-gradient(135deg,#06D6A0,#00D9FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                ORGANIC LIVING
              </span>
            </h1>
            <p style={{ color: '#E2E8F0', lineHeight: 1.8, textAlign: 'center', maxWidth: 920, margin: '0 auto 1rem' }}>
              Build the body’s battery: clean inputs, consistent sleep, and nervous system regulation.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/hacks" className="awakening-btn" style={{ textDecoration: 'none' }}>
                🧬 RTV Hacks
              </Link>
              <Link to="/rabbit-hole" className="awakening-btn pulse-glow" style={{ textDecoration: 'none' }}>
                🐇 Down the Rabbit Hole
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 1.25rem 4rem' }}>
        <div className="container">
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {pillars.map((p) => (
              <div key={p.title} className="rtv-card" style={{ borderColor: 'rgba(6,214,160,0.25)' }}>
                <div style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '0.5rem' }}>{p.icon}</div>
                <h2 style={{ margin: 0, textAlign: 'center', fontSize: '1.2rem', fontWeight: 900, color: '#E2E8F0' }}>{p.title}</h2>
                <p style={{ color: '#E2E8F0', lineHeight: 1.85, marginTop: '0.6rem' }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default OrganicLiving
