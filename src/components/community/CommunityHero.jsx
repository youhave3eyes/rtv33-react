import { motion } from 'framer-motion'

const CommunityHero = () => {
  return (
    <section className="community-hero">
      <div className="container">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Conscious Community
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Connect with awakened souls, share experiences, and raise the collective vibration together
        </motion.p>
        
        <motion.div 
          className="community-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="stat">
            <span className="stat-number">12,847</span>
            <span className="stat-label">Members</span>
          </div>
          <div className="stat">
            <span className="stat-number">847</span>
            <span className="stat-label">Events This Month</span>
          </div>
          <div className="stat">
            <span className="stat-number">50</span>
            <span className="stat-label">States Active</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CommunityHero
