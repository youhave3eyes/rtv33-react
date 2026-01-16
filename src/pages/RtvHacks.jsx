import { motion } from 'framer-motion'
// MatrixRain is provided globally in App.jsx

const RtvHacks = () => {
  const hacks = [
    {
      title: 'Copper Grounding',
      icon: '🟠',
      desc:
        'Grounding with copper (bracelets, rods, copper-infused tools) is used by many to support calm focus and energetic balance. Combine with barefoot earthing for best results.',
      tips: ['Barefoot on soil 10–20 min', 'Hydrate', 'Notice sleep + mood changes'],
      color: '#FFBE0B'
    },
    {
      title: 'Crystals & Mineral Allies',
      icon: '💎',
      desc:
        'Crystals are used for intention, meditation focus, and environment clearing. Whether you see them as energetic tech or symbolic anchors—consistency matters.',
      tips: ['Cleanse regularly', 'Set intention', 'Meditate with one stone at a time'],
      color: '#8B5CF6'
    },
    {
      title: 'Tai Chi / Qigong',
      icon: '🧘',
      desc:
        'Slow, intentional movement that builds internal energy, improves circulation, and stabilizes the nervous system. Great for daily “frequency tuning.”',
      tips: ['10 minutes daily', 'Breathe through the nose', 'Relax shoulders + jaw'],
      color: '#06D6A0'
    },
    {
      title: 'Chi Energy Practices',
      icon: '🌬️',
      desc:
        'Energy cultivation: microcosmic orbit, standing meditation, and focused attention in the body. The goal is coherent energy flow and grounded power.',
      tips: ['Start gentle', 'Don\'t force', 'Track sensations + emotions'],
      color: '#06B6D4'
    },
    {
      title: 'Breathwork',
      icon: '🫁',
      desc:
        'Breath is a direct lever on your nervous system. Use breathwork to raise energy, clear stress, and sharpen focus. Start light and build up gradually.',
      tips: ['Box breathing (4-4-4-4)', 'Wim Hof-style rounds', 'Long exhales to calm'],
      color: '#3A86FF'
    },
    {
      title: 'Electro Farming / Frequency Gardening',
      icon: '⚡',
      desc:
        'Experimenters explore electricity, minerals, and frequency patterns in soil to enhance plant vitality. If you try it, prioritize safety and documentation.',
      tips: ['Start small', 'Measure soil moisture', 'Document results with photos'],
      color: '#FB5607'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="scanline"
      style={{ position: 'relative', background: '#000000', minHeight: '100vh' }}
    >
      <section
        style={{
          padding: '6rem 1.25rem 2.5rem',
          background:
            'linear-gradient(135deg, rgba(15, 23, 42, 0.88) 0%, rgba(30, 41, 59, 0.82) 100%)',
          borderBottom: '2px solid rgba(139, 92, 246, 0.3)'
        }}
      >
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '0.75rem' }}>🧬</div>
            <h1
              style={{
                fontSize: 'clamp(2rem, 6vw, 3.2rem)',
                fontWeight: 900,
                marginBottom: '0.75rem',
                background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              RTV HACKS
            </h1>
            <p style={{ color: '#E2E8F0', maxWidth: 820, margin: '0 auto', lineHeight: 1.7 }}>
              Practical ways to shift your state, build energy, and stabilize your field—daily rituals you can stack.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '2.5rem 1.25rem 4rem' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1rem'
            }}
          >
            {hacks.map((h, idx) => (
              <motion.div
                key={h.title}
                className="rtv-card"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -4, boxShadow: `0 0 18px ${h.color}2A` }}
                style={{ borderColor: `${h.color}66` }}
              >
                <div style={{ fontSize: '2.2rem', textAlign: 'center', marginBottom: '0.6rem' }}>{h.icon}</div>
                <h3 style={{ color: h.color, textAlign: 'center', marginBottom: '0.6rem', fontSize: '1.15rem' }}>{h.title}</h3>
                <p style={{ color: '#E2E8F0', lineHeight: 1.75, marginBottom: '0.8rem', fontSize: '0.95rem' }}>{h.desc}</p>
                <div style={{ borderTop: '1px solid rgba(139, 92, 246, 0.18)', paddingTop: '0.75rem' }}>
                  <div style={{ color: '#94A3B8', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Quick stack
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '1.15rem', color: '#CBD5E1', lineHeight: 1.7, fontSize: '0.9rem' }}>
                    {h.tips.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default RtvHacks
