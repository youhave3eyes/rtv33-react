import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const PORTALS = [
  {
    title: 'RTV Hacks',
    path: '/hacks',
    icon: '🧬',
    desc: 'Stack practical rituals: breathwork, grounding, qigong, crystals, and more.',
    color: '#06B6D4'
  },
  {
    title: 'Meditation',
    path: '/knowledge/meditation',
    icon: '🧘',
    desc: 'Train attention, stabilize the nervous system, and expand awareness.',
    color: '#8B5CF6'
  },
  {
    title: 'ORMUS',
    path: '/ormus',
    icon: '✨',
    desc: 'Monoatomic gold lore, intention work, and disciplined experimentation mindsets.',
    color: '#FFD700'
  },
  {
    title: 'Tesla & Energy',
    path: '/tesla',
    icon: '⚡',
    desc: 'Frequency, resonance, and the “energy, frequency, vibration” lens.',
    color: '#00D9FF'
  },
  {
    title: 'Plant Medicine',
    path: '/medicine',
    icon: '🍄',
    desc: 'Preparation, set/setting, integration, and respectful practice.',
    color: '#3A86FF'
  },
  {
    title: 'Organic Living',
    path: '/organic',
    icon: '🌿',
    desc: 'Build the body’s battery: food, water, sleep, movement, EMF hygiene.',
    color: '#06D6A0'
  },
  {
    title: 'Earth Shape',
    path: '/earth-shape',
    icon: '🌍',
    desc: 'Experiment-first navigation: models, predictions, and testing mindset.',
    color: '#FFBE0B'
  }
]

const RabbitHole = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="scanline"
      style={{ position: 'relative', minHeight: '100vh', background: '#000', overflow: 'hidden' }}
    >
      {/* Falling wormhole layers */}
      <div className="wormhole-fall" />
      <div className="wormhole-tunnel" />
      <div className="wormhole-vignette" />

      <div style={{ position: 'relative', zIndex: 2, padding: '6.75rem 1.25rem 3.5rem' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: 'center' }}>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 6vw, 4rem)',
                fontWeight: 900,
                marginBottom: '0.75rem',
                background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 45%, #00FF41 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              DOWN THE RABBIT HOLE
            </h1>

            <p
              style={{
                color: '#E2E8F0',
                maxWidth: 920,
                margin: '0 auto 1.25rem',
                lineHeight: 1.8,
                background: 'rgba(0,0,0,0.55)',
                border: '1px solid rgba(139, 92, 246, 0.25)',
                borderRadius: 14,
                padding: '1rem 1.1rem'
              }}
            >
              Choose a gateway. Each portal leads to a real page with practices, knowledge, and protocols.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
              <Link to="/" className="awakening-btn" style={{ textDecoration: 'none' }}>
                ← Home
              </Link>
              <Link to="/knowledge" className="awakening-btn" style={{ textDecoration: 'none' }}>
                📚 Knowledge
              </Link>
            </div>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1rem',
              maxWidth: 1100,
              margin: '0 auto'
            }}
          >
            {PORTALS.map((p, idx) => (
              <motion.div
                key={p.path}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -4, boxShadow: `0 0 18px ${p.color}2A` }}
                className="rtv-card"
                style={{ borderColor: `${p.color}66` }}
              >
                <div style={{ fontSize: '2.4rem', textAlign: 'center', marginBottom: '0.5rem' }}>{p.icon}</div>
                <h3 style={{ color: p.color, textAlign: 'center', marginBottom: '0.5rem', fontSize: '1.15rem', fontWeight: 900 }}>
                  {p.title}
                </h3>
                <p style={{ color: '#E2E8F0', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: '0.75rem' }}>{p.desc}</p>
                <Link
                  to={p.path}
                  className="awakening-btn pulse-glow"
                  style={{ display: 'block', textAlign: 'center', textDecoration: 'none', padding: '0.6rem 0.8rem' }}
                >
                  Enter →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .wormhole-fall {
          position: absolute;
          inset: -40vh -30vw;
          background:
            radial-gradient(circle at 50% 15%, rgba(139, 92, 246, 0.30) 0%, rgba(0,0,0,0) 45%),
            radial-gradient(circle at 50% 35%, rgba(6, 182, 212, 0.22) 0%, rgba(0,0,0,0) 55%),
            radial-gradient(circle at 50% 55%, rgba(0, 255, 65, 0.14) 0%, rgba(0,0,0,0) 60%);
          animation: fall-drift 8s linear infinite;
          filter: blur(0.4px);
          opacity: 0.9;
        }

        .wormhole-tunnel {
          position: absolute;
          inset: -35vh -35vw;
          background:
            repeating-radial-gradient(
              circle at 50% 35%,
              rgba(139, 92, 246, 0.18) 0px,
              rgba(139, 92, 246, 0.18) 2px,
              rgba(0, 0, 0, 0) 12px,
              rgba(0, 0, 0, 0) 26px
            );
          mix-blend-mode: screen;
          animation: tunnel-spin 14s linear infinite;
          transform-origin: 50% 35%;
          opacity: 0.85;
        }

        .wormhole-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 35%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.9) 100%);
          pointer-events: none;
        }

        @keyframes tunnel-spin {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.05); }
          100% { transform: rotate(360deg) scale(1); }
        }

        @keyframes fall-drift {
          0% { transform: translateY(-10vh) scale(1); }
          100% { transform: translateY(20vh) scale(1.02); }
        }
      `}</style>
    </motion.div>
  )
}

export default RabbitHole
