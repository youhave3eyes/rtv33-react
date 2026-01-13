import { motion, AnimatePresence } from 'framer-motion'

const MusicPlayer = ({ currentTrack }) => {
  if (!currentTrack) return null

  return (
    <AnimatePresence>
      <motion.div 
        className="music-player-bar"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(20px)',
          padding: '1.5rem',
          borderTop: '1px solid rgba(139, 92, 246, 0.3)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem'
          }}>
            🎵
          </div>
          <div>
            <h4 style={{ margin: 0, color: 'var(--light)' }}>{currentTrack.title}</h4>
            <p style={{ margin: 0, color: 'var(--gray)', fontSize: '0.9rem' }}>{currentTrack.artist}</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button className="btn" style={{ padding: '0.5rem 1rem' }}>⏮️</button>
          <button className="btn" style={{ padding: '0.5rem 1.5rem' }}>▶️</button>
          <button className="btn" style={{ padding: '0.5rem 1rem' }}>⏭️</button>
        </div>

        <div style={{ flex: 1, maxWidth: '300px' }}>
          <input 
            type="range" 
            min="0" 
            max="100" 
            defaultValue="50"
            style={{ width: '100%' }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default MusicPlayer
