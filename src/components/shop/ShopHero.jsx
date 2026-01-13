import { motion } from 'framer-motion'

const ShopHero = () => {
  return (
    <section className="knowledge-hero">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">🛍️ Conscious Shop</h1>
          <p className="hero-subtitle">
            High-vibration products to support your journey. Every purchase supports the mission of spreading free knowledge.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ShopHero
