import { motion } from 'framer-motion'

const Rtv33Logo = ({ compact = false }) => {
  const height = compact ? 22 : 26

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}
    >
      <svg
        width={height}
        height={height}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.45))' }}
        aria-label="RTV33"
      >
        <defs>
          <linearGradient id="rtv33g" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00D9FF" />
            <stop offset="0.5" stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#00FF41" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="27" stroke="url(#rtv33g)" strokeWidth="3" opacity="0.9" />
        <circle cx="32" cy="32" r="20" stroke="url(#rtv33g)" strokeWidth="2" opacity="0.45" />
        <path
          d="M18 34c6-2 10-8 14-16 4 8 8 14 14 16-6 2-10 8-14 16-4-8-8-14-14-16Z"
          stroke="url(#rtv33g)"
          strokeWidth="2"
          opacity="0.9"
        />
      </svg>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.1rem' }}>
        <span
          style={{
            fontFamily: 'Orbitron, monospace',
            fontWeight: 900,
            letterSpacing: '0.5px',
            fontSize: compact ? '1.15rem' : '1.3rem',
            background: 'linear-gradient(135deg, #00D9FF 0%, #8B5CF6 45%, #00FF41 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          RTV
        </span>
        <span
          style={{
            fontFamily: 'Orbitron, monospace',
            fontWeight: 900,
            letterSpacing: '0.5px',
            fontSize: compact ? '1.15rem' : '1.3rem',
            color: '#E2E8F0',
            textShadow: '0 0 6px rgba(139, 92, 246, 0.25)'
          }}
        >
          33
        </span>
      </div>
    </motion.div>
  )
}

export default Rtv33Logo
