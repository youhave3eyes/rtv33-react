import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="rtv">RTV</span>
            <span className="number">33</span>
            <p>Raise The Vibration</p>
          </div>
          <div className="footer-text">
            <p>Free knowledge for conscious evolution</p>
            <p>You are energy. You are in control. Raise your vibration, transform your reality.</p>
            <p className="mantra">E-Motion = Energy in Motion</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 RTV33. All knowledge shared freely for the elevation of humanity. 🌟</p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
