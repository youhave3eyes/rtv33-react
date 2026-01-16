import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const PlantMedicine = () => {
  const sections = [
    {
      title: 'Respect + legality first',
      icon: '⚖️',
      body: [
        'Different countries and states have different laws. Always prioritize legality, safety, and ethics.',
        'This page focuses on preparation, mental hygiene, and integration practices that apply even without substances.'
      ]
    },
    {
      title: 'Set & Setting',
      icon: '🧭',
      body: [
        'Set = your internal state. Setting = your environment.',
        'Most bad experiences come from poor preparation, unstable environments, or unresolved stress.'
      ]
    },
    {
      title: 'Integration (where growth happens)',
      icon: '📓',
      body: [
        'Integration turns experiences into change:',
        '• Journal the next morning',
        '• Walk in nature',
        '• Talk to a trusted guide',
        '• Convert insights into one small daily habit'
      ]
    }
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="scanline" style={{ position: 'relative', background: '#000', minHeight: '100vh' }}>
      <section style={{ padding: '6.5rem 1.25rem 2rem' }}>
        <div className="container">
          <div className="rtv-card" style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ fontSize: '2.6rem', textAlign: 'center', marginBottom: '0.5rem' }}>🍄</div>
            <h1 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, marginBottom: '0.75rem' }}>
              <span style={{ background: 'linear-gradient(135deg,#3A86FF,#8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                PLANT MEDICINE
              </span>
            </h1>
            <p style={{ color: '#E2E8F0', lineHeight: 1.8, textAlign: 'center', maxWidth: 920, margin: '0 auto 1rem' }}>
              Preparation, set/setting, and integration—so the journey becomes real growth.
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
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gap: '1rem' }}>
            {sections.map((s) => (
              <div key={s.title} className="rtv-card" style={{ borderColor: 'rgba(58,134,255,0.25)' }}>
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

export default PlantMedicine
