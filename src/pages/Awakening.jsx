import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SacredGeometry from '../components/effects/SacredGeometry'

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
    desc: 'Frequency, resonance, and the "energy, frequency, vibration" lens.',
    color: '#00D9FF'
  },
  {
    title: 'ET Contact',
    path: '/contact',
    icon: '👽',
    desc: 'Pleiadians, Arcturians, and understanding galactic consciousness.',
    color: '#9D4EDD'
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
    desc: 'Build the body\'s battery: food, water, sleep, movement, EMF hygiene.',
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

const Awakening = () => {
  const [typedText, setTypedText] = useState('')
  const fullText = 'HOW DEEP DOES THE RABBIT HOLE GO?'
  
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 100)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="scanline digital-grid"
      style={{ position: 'relative', minHeight: '100vh', background: '#000', overflow: 'hidden' }}
    >
      {/* Sacred Geometry Background Effects */}
      <div style={{ position: 'absolute', top: '5%', left: '5%', opacity: 0.08, zIndex: 0 }}>
        <SacredGeometry type="flower" size={500} color="#00ff41" />
      </div>
      <div style={{ position: 'absolute', top: '15%', right: '5%', opacity: 0.08, zIndex: 0 }}>
        <SacredGeometry type="metatron" size={450} color="#9d4edd" />
      </div>
      <div style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', opacity: 0.06, zIndex: 0 }}>
        <SacredGeometry type="flower" size={600} color="#06B6D4" />
      </div>

      {/* Enhanced Falling wormhole layers */}
      <div className="wormhole-fall" />
      <div className="wormhole-tunnel" />
      <div className="wormhole-vignette" />
      
      {/* Matrix Digital Rain Overlay */}
      <div className="matrix-overlay" />

      <div style={{ position: 'relative', zIndex: 2, padding: '8rem 1.5rem 4rem' }}>
        <div className="container" style={{ maxWidth: '1400px' }}>
          {/* Hero Section with Glitch Effect */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h1
              className="glitch-text neon-text"
              data-text={typedText}
              style={{
                fontSize: 'clamp(2rem, 7vw, 4.5rem)',
                fontWeight: 900,
                marginBottom: '1.5rem',
                fontFamily: 'Orbitron, monospace',
                textShadow: 'var(--matrix-glow)'
              }}
            >
              {typedText}<span className="pulse-glow" style={{ color: 'var(--matrix-neon-green)' }}>_</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="holographic"
              style={{
                color: '#E2E8F0',
                maxWidth: 900,
                margin: '0 auto 2rem',
                fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                lineHeight: 1.8,
                background: 'rgba(0,0,0,0.7)',
                border: '2px solid rgba(0, 255, 65, 0.3)',
                borderRadius: 16,
                padding: '1.5rem 2rem',
                backdropFilter: 'blur(10px)'
              }}
            >
              💊 You took the blue pill. Now reality reveals itself. Each portal below opens doors to forbidden knowledge,
              ancient wisdom, and technologies that can transform consciousness itself.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
              className="neon-text floating"
              style={{ 
                fontSize: '1.1rem', 
                marginBottom: '3rem',
                textShadow: 'var(--matrix-glow)'
              }}
            >
              ⚠️ WARNING: THERE IS NO TURNING BACK ⚠️
            </motion.div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <Link to="/" className="awakening-btn neon-border" style={{ textDecoration: 'none' }}>
                ← Return Home
              </Link>
              <Link to="/knowledge" className="awakening-btn pulse-glow" style={{ textDecoration: 'none', background: 'rgba(0, 255, 65, 0.2)' }}>
                📚 Knowledge Library
              </Link>
            </div>
          </motion.div>

          {/* Portal Cards - Enhanced with Matrix Theme */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              maxWidth: 1300,
              margin: '0 auto'
            }}
          >
            {PORTALS.map((p, idx) => (
              <motion.div
                key={p.path}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: `0 0 30px ${p.color}44, 0 0 60px ${p.color}22`,
                  scale: 1.02
                }}
                className="consciousness-card"
                style={{ 
                  borderColor: `${p.color}88`,
                  background: `linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 20, 40, 0.8) 100%)`,
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Card glow effect */}
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, transparent, ${p.color}, transparent)`,
                    animation: 'shimmer 2s ease-in-out infinite'
                  }}
                />
                
                <div style={{ 
                  fontSize: '3.5rem', 
                  textAlign: 'center', 
                  marginBottom: '1rem',
                  filter: `drop-shadow(0 0 15px ${p.color})`,
                  animation: 'float 3s ease-in-out infinite'
                }}>
                  {p.icon}
                </div>
                
                <h3 
                  className="glitch-text"
                  data-text={p.title}
                  style={{ 
                    color: p.color, 
                    textAlign: 'center', 
                    marginBottom: '1rem', 
                    fontSize: '1.4rem', 
                    fontWeight: 900,
                    textShadow: `0 0 10px ${p.color}88`
                  }}
                >
                  {p.title}
                </h3>
                
                <p style={{ 
                  color: '#E2E8F0', 
                  lineHeight: 1.8, 
                  fontSize: '1rem', 
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}>
                  {p.desc}
                </p>
                
                <Link
                  to={p.path}
                  className="awakening-btn pulse-glow neon-border"
                  style={{ 
                    display: 'block', 
                    textAlign: 'center', 
                    textDecoration: 'none', 
                    padding: '0.875rem 1.5rem',
                    background: `linear-gradient(135deg, ${p.color}22, ${p.color}11)`,
                    borderColor: p.color,
                    color: p.color,
                    fontWeight: 700,
                    fontSize: '1rem'
                  }}
                >
                  🔓 UNLOCK →
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Consciousness Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginTop: '5rem',
              padding: '3rem 1rem',
              background: 'rgba(0, 255, 65, 0.05)',
              border: '1px solid rgba(0, 255, 65, 0.2)',
              borderRadius: '16px',
              backdropFilter: 'blur(10px)'
            }}
          >
            {[
              { number: '∞', label: 'Dimensions to Explore', icon: '🌌' },
              { number: '528', label: 'Hz Love Frequency', icon: '💚' },
              { number: '963', label: 'Hz Pineal Activation', icon: '👁️' },
              { number: '1111', label: 'Synchronicity Code', icon: '✨' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="pulse-glow"
                style={{
                  textAlign: 'center',
                  padding: '1.5rem'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
                  {stat.icon}
                </div>
                <div className="holographic neon-text" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '0.95rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="neon-text"
            style={{ 
              textAlign: 'center', 
              marginTop: '4rem',
              fontSize: '1.2rem',
              padding: '2rem',
              borderTop: '1px solid rgba(0, 255, 65, 0.3)'
            }}
          >
            "Reality is merely an illusion, albeit a very persistent one." - Albert Einstein
          </motion.div>
        </div>
      </div>

      <style>{`
        .wormhole-fall {
          position: absolute;
          inset: -40vh -30vw;
          background:
            radial-gradient(circle at 50% 15%, rgba(139, 92, 246, 0.35) 0%, rgba(0,0,0,0) 45%),
            radial-gradient(circle at 50% 35%, rgba(6, 182, 212, 0.28) 0%, rgba(0,0,0,0) 55%),
            radial-gradient(circle at 50% 55%, rgba(0, 255, 65, 0.20) 0%, rgba(0,0,0,0) 60%);
          animation: fall-drift 10s linear infinite;
          filter: blur(0.5px);
          opacity: 0.95;
        }

        .wormhole-tunnel {
          position: absolute;
          inset: -35vh -35vw;
          background:
            repeating-radial-gradient(
              circle at 50% 35%,
              rgba(139, 92, 246, 0.22) 0px,
              rgba(139, 92, 246, 0.22) 2px,
              rgba(0, 0, 0, 0) 12px,
              rgba(0, 0, 0, 0) 30px
            );
          mix-blend-mode: screen;
          animation: tunnel-spin 16s linear infinite;
          transform-origin: 50% 35%;
          opacity: 0.9;
        }

        .wormhole-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 35%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.95) 100%);
          pointer-events: none;
        }

        .matrix-overlay {
          position: absolute;
          inset: 0;
          background: 
            repeating-linear-gradient(
              0deg,
              rgba(0, 255, 65, 0.03) 0px,
              rgba(0, 255, 65, 0.03) 1px,
              transparent 1px,
              transparent 2px
            );
          pointer-events: none;
          opacity: 0.4;
        }

        @keyframes tunnel-spin {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.08); }
          100% { transform: rotate(360deg) scale(1); }
        }

        @keyframes fall-drift {
          0% { transform: translateY(-15vh) scale(1); }
          100% { transform: translateY(25vh) scale(1.05); }
        }

        @keyframes shimmer {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </motion.div>
  )
}

export default Awakening
