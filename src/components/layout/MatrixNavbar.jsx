import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const MatrixNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'AWAKENING', icon: '👁️' },
    { path: '/knowledge', label: 'KNOWLEDGE', icon: '📚' },
    { path: '/community', label: 'CONSCIOUSNESS', icon: '🌐' },
    { path: '/music', label: 'FREQUENCIES', icon: '🎵' },
    { path: '/shop', label: 'TEMPLE GOODS', icon: '🛒' },
  ]

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled 
          ? 'rgba(0, 0, 0, 0.95)' 
          : 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: scrolled 
          ? '2px solid var(--matrix-green)' 
          : '2px solid rgba(0, 255, 65, 0.3)',
        boxShadow: scrolled 
          ? 'var(--matrix-glow)' 
          : 'none',
        transition: 'all 0.3s ease',
        padding: '1rem 2rem'
      }}
    >
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <span className="glitch-text" data-text="RTV33" style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold',
              fontFamily: 'Orbitron, monospace'
            }}>
              RTV33
            </span>
            <span className="mystical-orb" style={{ 
              width: '30px', 
              height: '30px',
              minWidth: '30px',
              minHeight: '30px'
            }}></span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div style={{ 
          display: 'flex', 
          gap: '2rem', 
          alignItems: 'center',
          '@media (max-width: 768px)': {
            display: 'none'
          }
        }} className="desktop-nav">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              style={{ textDecoration: 'none' }}
            >
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={isActive(item.path) ? 'neon-text pulse-glow' : 'rabbit-hole'}
                style={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  padding: '0.5rem 1rem',
                  border: isActive(item.path) 
                    ? '2px solid var(--matrix-green)' 
                    : '2px solid transparent',
                  borderRadius: '5px',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </motion.div>
            </Link>
          ))}
          
          {/* Special CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="awakening-btn pulse-glow"
            style={{
              padding: '0.6rem 1.5rem',
              fontSize: '0.9rem',
              marginLeft: '1rem'
            }}
          >
            🐇 DOWN THE RABBIT HOLE
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'transparent',
            border: '2px solid var(--matrix-green)',
            color: 'var(--matrix-green)',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            fontSize: '1.5rem',
            borderRadius: '5px',
            '@media (max-width: 768px)': {
              display: 'block'
            }
          }}
        >
          {isOpen ? '✕' : '☰'}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mobile-nav neon-border"
          style={{
            marginTop: '1rem',
            padding: '2rem',
            background: 'rgba(0, 0, 0, 0.95)',
            borderRadius: '10px'
          }}
        >
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              style={{ textDecoration: 'none', display: 'block', marginBottom: '1rem' }}
            >
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={isActive(item.path) ? 'neon-text' : 'rabbit-hole'}
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  padding: '1rem',
                  border: isActive(item.path) 
                    ? '2px solid var(--matrix-green)' 
                    : '1px solid rgba(0, 255, 65, 0.3)',
                  borderRadius: '5px',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </motion.div>
            </Link>
          ))}
          <motion.button
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: navItems.length * 0.1 }}
            className="awakening-btn pulse-glow"
            style={{
              width: '100%',
              marginTop: '1rem'
            }}
          >
            🐇 DOWN THE RABBIT HOLE
          </motion.button>
        </motion.div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </motion.nav>
  )
}

export default MatrixNavbar
