import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ETContact = () => {
  const sections = [
    {
      title: 'Discernment first',
      icon: '🧿',
      body: [
        'Treat contact topics like any other high-claim subject: verify sources, separate story from evidence, and track your own nervous system response.',
        'Fear distorts perception. Calm attention improves discernment.'
      ]
    },
    {
      title: 'Consciousness-based protocol',
      icon: '🛡️',
      body: [
        'If you explore meditation/contact practices:',
        '1) Ground (slow exhale breathing)',
        '2) Set intention (“Only aligned with my highest good.”)',
        '3) Maintain boundaries (you can end any practice)',
        '4) Journal immediately after'
      ]
    },
    {
      title: 'Integration',
      icon: '📓',
      body: [
        'Regardless of belief: focus on tangible upgrades—sleep, behavior, relationships, and mental clarity.',
        'If a practice destabilizes you, stop and return to basics.'
      ]
    }
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="scanline" style={{ position: 'relative', background: '#000', minHeight: '100vh' }}>
      <section style={{ padding: '6.5rem 1.25rem 2rem' }}>
        <div className="container">
          <div className="rtv-card" style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ fontSize: '2.6rem', textAlign: 'center', marginBottom: '0.5rem' }}>👽</div>
            <h1 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, marginBottom: '0.75rem' }}>
              <span style={{ background: 'linear-gradient(135deg,#9D4EDD,#06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                ET CONTACT
              </span>
            </h1>
            <p style={{ color: '#E2E8F0', lineHeight: 1.8, textAlign: 'center', maxWidth: 920, margin: '0 auto 1rem' }}>
              A grounded page: discernment, boundaries, and integration—so curiosity doesn’t become chaos.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/rabbit-hole" className="awakening-btn pulse-glow" style={{ textDecoration: 'none' }}>
                🐇 Down the Rabbit Hole
              </Link>
              <Link to="/knowledge/ancient-wisdom" className="awakening-btn" style={{ textDecoration: 'none' }}>
                📿 Ancient Wisdom
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 1.25rem 4rem' }}>
        <div className="container">
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gap: '1rem' }}>
            {sections.map((s) => (
              <div key={s.title} className="rtv-card" style={{ borderColor: 'rgba(157,78,221,0.25)' }}>
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

export default ETContact
