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

    const handleDocClick = (e) => {
      // Close MORE dropdown when clicking outside
      if (!e.target.closest?.('.more-dropdown-root')) {
        setIsMoreOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('click', handleDocClick)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleDocClick)
    }
  }, [])

  const primaryNavItems = [
    { path: '/', label: 'AWAKENING', icon: '👁️' },
    { path: '/knowledge', label: 'KNOWLEDGE', icon: '📚' },
    { path: '/community', label: 'CONSCIOUSNESS', icon: '🌐' },
    { path: '/music', label: 'FREQUENCIES', icon: '🎵' },
    { path: '/shop', label: 'TEMPLE GOODS', icon: '🛒' },
  ]

  const moreNavItems = [
    { path: '/hacks', label: 'RTV HACKS', icon: '🧬' },
    { path: '/ormus', label: 'ORMUS', icon: '✨' },
    { path: '/tesla', label: 'TESLA', icon: '⚡' },
    { path: '/contact', label: 'ET CONTACT', icon: '👽' },
    { path: '/medicine', label: 'PLANT MEDICINE', icon: '🍄' },
    { path: '/organic', label: 'ORGANIC LIVING', icon: '🌿' },
    { path: '/earth-shape', label: 'EARTH SHAPE', icon: '🌍' },
  ]

  const [isMoreOpen, setIsMoreOpen] = useState(false)

  const mobileNavItems = [...primaryNavItems, ...moreNavItems]

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const prevOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prevOverflow
      }
    }
  }, [isOpen])

  const handleRabbitHoleClick = () => {
    const rabbitHoleSection = document.getElementById('rabbit-hole')
    if (rabbitHoleSection) {
      rabbitHoleSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Close MORE dropdown on route change
  useEffect(() => {
    setIsMoreOpen(false)
    setIsOpen(false)
  }, [location.pathname])

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
        padding: '0.45rem 1rem'
      }}
    >
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <span className="glitch-text" data-text="RTV33" style={{ 
              fontSize: '1.6rem', 
              fontWeight: 'bold',
              fontFamily: 'Orbitron, monospace'
            }}>
              RTV33
            </span>
            <span className="mystical-orb" style={{ 
              width: '24px', 
              height: '24px',
              minWidth: '24px',
              minHeight: '24px'
            }}></span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div style={{ 
          display: 'flex', 
          gap: '0.4rem', 
          alignItems: 'center',
          '@media (max-width: 768px)': {
            display: 'none'
          }
        }} className="desktop-nav">
          {primaryNavItems.map((item) => (
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
                  fontSize: '0.72rem',
                  fontWeight: 'bold',
                  letterSpacing: '0.4px',
                  padding: '0.25rem 0.5rem',
                  border: isActive(item.path) 
                    ? '2px solid var(--matrix-green)' 
                    : '2px solid transparent',
                  borderRadius: '5px',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </motion.div>
            </Link>
          ))}
          
          {/* MORE Dropdown */}
         <div className="more-dropdown-root" style={{ position: 'relative' }}>
           <motion.button
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             onClick={() => setIsMoreOpen((v) => !v)}
             className={isMoreOpen ? 'awakening-btn pulse-glow' : 'awakening-btn'}
             style={{
               padding: '0.35rem 0.65rem',
               fontSize: '0.7rem',
               marginLeft: '0.25rem'
             }}
           >
             ☰ MORE
           </motion.button>

           {isMoreOpen && (
             <div
               style={{
                 position: 'absolute',
                 top: 'calc(100% + 10px)',
                 right: 0,
                 minWidth: '220px',
                 background: 'rgba(0, 0, 0, 0.95)',
                 border: '1px solid rgba(0, 255, 65, 0.35)',
                 borderRadius: '10px',
                 padding: '0.5rem',
                 boxShadow: '0 0 25px rgba(0, 255, 65, 0.25)',
                 backdropFilter: 'blur(10px)',
                 zIndex: 2000
               }}
             >
               {moreNavItems.map((item) => (
                 <Link
                   key={item.path}
                   to={item.path}
                   onClick={() => setIsMoreOpen(false)}
                   style={{ textDecoration: 'none' }}
                 >
                   <div
                     className={isActive(item.path) ? 'neon-text pulse-glow' : 'rabbit-hole'}
                     style={{
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'space-between',
                       gap: '0.6rem',
                       padding: '0.45rem 0.6rem',
                       borderRadius: '8px',
                       border: isActive(item.path)
                         ? '1px solid var(--matrix-green)'
                         : '1px solid transparent'
                     }}
                   >
                     <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                       <span>{item.icon}</span>
                       <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.5px' }}>
                         {item.label}
                       </span>
                     </span>
                     <span style={{ opacity: 0.7 }}>→</span>
                   </div>
                 </Link>
               ))}

               <div style={{ height: '1px', background: 'rgba(0, 255, 65, 0.15)', margin: '0.4rem 0' }} />

               <button
                 onClick={() => {
                   setIsMoreOpen(false)
                   handleRabbitHoleClick()
                 }}
                 className="awakening-btn pulse-glow"
                 style={{ width: '100%', padding: '0.45rem 0.65rem', fontSize: '0.7rem' }}
               >
                 🐇 RABBIT HOLE
               </button>
             </div>
           )}
         </div>

         {/* Special CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRabbitHoleClick}
            className="awakening-btn pulse-glow"
            style={{
              padding: '0.35rem 0.65rem',
              fontSize: '0.7rem',
              marginLeft: '0.25rem'
            }}
          >
            🐇 RABBIT HOLE
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mobile-nav neon-border"
          style={{
            position: 'fixed',
            top: '56px',
            left: 0,
            right: 0,
            bottom: 0,
            padding: '1rem',
            paddingBottom: 'calc(1rem + env(safe-area-inset-bottom))',
            background: 'rgba(0, 0, 0, 0.96)',
            backdropFilter: 'blur(10px)',
            overflowY: 'auto'
          }}
        >
          {mobileNavItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              style={{ textDecoration: 'none', display: 'block', marginBottom: '0.6rem' }}
            >
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={isActive(item.path) ? 'neon-text' : 'rabbit-hole'}
                style={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  padding: '0.85rem',
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
            transition={{ delay: mobileNavItems.length * 0.1 }}
            onClick={handleRabbitHoleClick}
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
            padding: 0.35rem 0.65rem !important;
            font-size: 1.2rem !important;
          }
          .glitch-text {
            font-size: 1.25rem !important;
          }
        }

        @media (max-width: 420px) {
          .glitch-text {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
    </motion.nav>
  )
}

export default MatrixNavbar
