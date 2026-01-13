import { motion } from 'framer-motion'

const About = () => {
  const cards = [
    {
      icon: '⚡',
      title: 'Everything is Energy',
      description: 'Every atom, every cell, every thought vibrates at a specific frequency. You are a symphony of electromagnetic waves constantly interacting with the universe.'
    },
    {
      icon: '🧠',
      title: 'You Are In Control',
      description: 'Your thoughts, emotions, diet, and environment directly influence your vibrational state. Understanding this gives you the power to consciously elevate your frequency.'
    },
    {
      icon: '🌟',
      title: 'E-Motion = Energy in Motion',
      description: 'Emotions are literally energy in motion. Learn to harness this energy and direct it toward higher states of consciousness and well-being.'
    }
  ]

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Understanding Vibration
        </motion.h2>
        
        <div className="about-grid">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="card about-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ animationDelay: `${index}s` }}
            >
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
