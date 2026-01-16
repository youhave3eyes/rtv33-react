import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Tesla = () => {
  const sections = [
    {
      title: 'Core idea: energy, frequency, vibration',
      icon: '⚡',
      body: [
        'Tesla is a symbol for thinking in resonance: how patterns repeat, amplify, and shape experience.',
        'Use this page as a practical lens: what habits increase coherence (sleep, breath, movement) and what habits scatter attention (stress, doomscrolling, poor nutrition).'
      ]
    },
    {
      title: 'Daily resonance protocol (10 minutes)',
      icon: '⏱️',
      body: [
        '1) 2 min: slow nasal breathing (longer exhale).',
        '2) 3 min: humming/toning (vibration + vagus nerve support).',
        '3) 5 min: stillness + intention: “I choose coherence.”'
      ]
    },
    {
      title: 'Experiment mindset (without hype)',
      icon: '🧪',
      body: [
        'If you explore devices/claims online: prioritize safety, measurements, and repeatability.',
        'Record what you changed, what you observed, and whether you can reproduce it.'
      ]
    }
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="scanline" style={{ position: 'relative', background: '#000', minHeight: '100vh' }}>
      <section style={{ padding: '6.5rem 1.25rem 2rem' }}>
        <div className="container">
          <div className="rtv-card" style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ fontSize: '2.6rem', textAlign: 'center', marginBottom: '0.5rem' }}>⚡</div>
            <h1 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, marginBottom: '0.75rem' }}>
              <span style={{ background: 'linear-gradient(135deg,#00D9FF,#8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                TESLA & ENERGY
              </span>
            </h1>
            <p style={{ color: '#E2E8F0', lineHeight: 1.8, textAlign: 'center', maxWidth: 920, margin: '0 auto 1rem' }}>
              A practical resonance hub: coherence practices + experiment mindset.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/rabbit-hole" className="awakening-btn pulse-glow" style={{ textDecoration: 'none' }}>
                🐇 Down the Rabbit Hole
              </Link>
              <Link to="/knowledge/quantum" className="awakening-btn" style={{ textDecoration: 'none' }}>
                🌌 Quantum Consciousness
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 1.25rem 4rem' }}>
        <div className="container">
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gap: '1rem' }}>
            {sections.map((s) => (
              <div key={s.title} className="rtv-card" style={{ borderColor: 'rgba(0,217,255,0.25)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <div style={{ fontSize: '1.6rem' }}>{s.icon}</div>
                  <h2 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 900, color: '#E2E8F0' }}>{s.title}</h2>
                </div>
                {s.body.map((p) => (
                  <p key={p} style={{ color: '#E2E8F0', lineHeight: 1.85, marginTop: '0.6rem' }}>{p}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Tesla
