import { motion } from 'framer-motion'

const CosmicBackground = () => {
  return (
    <div className="cosmic-bg">
      <motion.div 
        className="stars"
        animate={{
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="frequency-waves"
        animate={{
          x: [0, 50, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}

export default CosmicBackground
