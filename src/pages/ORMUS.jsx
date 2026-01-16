import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ORMUS = () => {
  const toc = [
    { id: 'what', label: 'What people mean by ORMUS' },
    { id: 'mindset', label: 'Experiment mindset + discernment' },
    { id: 'practice', label: 'Ritual + meditation protocol' },
    { id: 'quality', label: 'Quality & sourcing checklist' },
    { id: 'journal', label: 'Tracking + journaling' }
  ]

  const sections = [
    {
      id: 'what',
      title: 'What people mean by ORMUS',
      icon: '✨',
      body: [
        'ORMUS is a term used online to describe “monoatomic” or “orbitally rearranged” minerals—often discussed alongside alchemy and consciousness practices.',
        'Some treat it as a spiritual supplement, others treat it as symbolic/ritual technology. The most useful approach is to stay grounded: focus on your direct experience, keep claims testable, and avoid magical thinking replacing healthy basics.'
      ]
    },
    {
      id: 'mindset',
      title: 'Experiment mindset + discernment',
      icon: '🧪',
      body: [
        'If you explore ORMUS, treat it like an experiment:',
        '• Define what you’re measuring (sleep quality, mood stability, meditation depth, focus).',
        '• Change one variable at a time.',
        '• Keep a baseline week with no changes.',
        '• If anything feels off, stop and return to baseline.'
      ]
    },
    {
      id: 'practice',
      title: 'Ritual + meditation protocol',
      icon: '🧘',
      body: [
        'A simple protocol (non-medical, practice-based):',
        '1) Set intention (30 seconds): “I choose clarity, calm power, and truth.”',
        '2) Breath (3 minutes): slow inhale, longer exhale.',
        '3) Stillness (10 minutes): attention on forehead/heart.',
        '4) Journal (2 minutes): sensations, emotions, insights.'
      ]
    },
    {
      id: 'quality',
      title: 'Quality & sourcing checklist',
      icon: '🔎',
      body: [
        'If you buy products, use a safety-first checklist:',
        '• Transparent ingredient list.',
        '• Lab testing/COA when available.',
        '• Clear dosage guidance (avoid mega-dosing culture).',
        '• Avoid vendors making extreme medical promises.'
      ]
    },
    {
      id: 'journal',
      title: 'Tracking + journaling',
      icon: '📓',
      body: [
        'Track daily: sleep, energy, mood, meditation, cravings, and anxiety level.',
        'After 14 days, review patterns. Keep what helps. Drop what doesn’t.'
      ]
    }
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="scanline" style={{ position: 'relative', background: '#000', minHeight: '100vh' }}>
      <section style={{ padding: '6.5rem 1.25rem 1.5rem' }}>
        <div className="container">
          <div className="rtv-card" style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ fontSize: '2.6rem', textAlign: 'center', marginBottom: '0.5rem' }}>✨</div>
            <h1 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, marginBottom: '0.75rem' }}>
              <span style={{ background: 'linear-gradient(135deg,#FFD700,#8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                ORMUS / MONOATOMIC GOLD
              </span>
            </h1>
            <p style={{ color: '#E2E8F0', lineHeight: 1.8, textAlign: 'center', maxWidth: 900, margin: '0 auto 1rem' }}>
              A practical hub: discernment, ritual structure, and how to explore responsibly.
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {toc.map((t) => (
                <a key={t.id} href={`#${t.id}`} className="awakening-btn" style={{ textDecoration: 'none', padding: '0.55rem 0.75rem' }}>
                  {t.label}
                </a>
              ))}
            </div>

            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/rabbit-hole" className="awakening-btn pulse-glow" style={{ textDecoration: 'none' }}>
                🐇 Down the Rabbit Hole
              </Link>
              <Link to="/hacks" className="awakening-btn" style={{ textDecoration: 'none' }}>
                🧬 RTV Hacks
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 1.25rem 4rem' }}>
        <div className="container">
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gap: '1rem' }}>
            {sections.map((s) => (
              <div key={s.id} id={s.id} className="rtv-card" style={{ borderColor: 'rgba(255,215,0,0.25)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <div style={{ fontSize: '1.6rem' }}>{s.icon}</div>
                  <h2 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 900, color: '#E2E8F0' }}>{s.title}</h2>
                </div>
                <div style={{ color: '#E2E8F0', lineHeight: 1.85, fontSize: '0.98rem' }}>
                  {s.body.map((p, idx) => (
                    <p key={idx} style={{ marginTop: idx === 0 ? 0 : '0.65rem' }}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default ORMUS
