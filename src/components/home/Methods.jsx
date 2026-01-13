import { motion } from 'framer-motion'
import { useState } from 'react'

const Methods = () => {
  const [selectedMethod, setSelectedMethod] = useState(null)

  const methods = [
    {
      icon: '🧘',
      title: 'Meditation & Breathwork',
      description: 'Quiet the mind, align your energy, and access higher states of consciousness.',
      details: 'Meditation shifts your brainwave patterns from beta (stress) to alpha and theta (relaxation and insight). This physiological change raises your electromagnetic frequency and coherence.'
    },
    {
      icon: '🍎',
      title: 'High-Vibe Nutrition',
      description: 'Live foods carry high frequencies. Discover what you eat directly affects your energy field.',
      details: 'Fresh, organic, raw foods vibrate at the highest frequencies (70,000+ Hz), while processed foods have virtually no life force (0-100 Hz).'
    },
    {
      icon: '🎵',
      title: 'Healing Frequencies',
      description: '432Hz, 528Hz, Solfeggio scales - sound waves that heal and elevate consciousness.',
      details: 'Specific frequencies can heal, transform, and elevate consciousness. 528 Hz is known as the "Love Frequency" for DNA repair.'
    },
    {
      icon: '⚛️',
      title: 'Tesla Technologies',
      description: 'Scalar waves, energy devices, and electromagnetic innovations for wellness.',
      details: 'Tesla discovered scalar waves can transmit energy and information without loss. These longitudinal waves can enhance cellular function and healing.'
    },
    {
      icon: '🛡️',
      title: 'EMF Protection',
      description: 'Shield yourself from harmful electromagnetic frequencies that lower your vibration.',
      details: 'Modern technology creates artificial EMF that disrupts natural frequency. Protection through distance, grounding, shielding, and crystals is essential.'
    },
    {
      icon: '🌿',
      title: 'Nature Connection',
      description: 'Grounding, forest bathing, and natural frequencies restore your energetic balance.',
      details: "Earth's electromagnetic field resonates at 7.83 Hz (Schumann Resonance), which matches human brain alpha waves. Time in nature synchronizes your frequency."
    },
    {
      icon: '💎',
      title: 'Crystal Energy',
      description: 'Harness the piezoelectric properties of crystals to amplify and balance your energy.',
      details: 'Crystals have stable, measurable frequencies due to their crystalline structure. They can amplify, store, and transmit energy based on your intention.'
    },
    {
      icon: '💃',
      title: 'Movement & Dance',
      description: 'Move energy through your body, release stagnation, elevate your frequency through motion.',
      details: 'Movement literally moves stagnant energy through your body. It releases trapped emotions, increases lymphatic flow, and generates piezoelectric effects in bones.'
    }
  ]

  return (
    <section id="methods" className="methods-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ways to Raise Your Vibration
        </motion.h2>
        
        <div className="methods-grid">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              className="card method-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedMethod(method)}
            >
              <div className="method-icon">{method.icon}</div>
              <h3>{method.title}</h3>
              <p>{method.description}</p>
              <button className="btn">Explore</button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMethod && (
        <motion.div 
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedMethod(null)}
          style={{ display: 'block' }}
        >
          <motion.div 
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={() => setSelectedMethod(null)}>&times;</span>
            <div className="method-icon" style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1rem' }}>
              {selectedMethod.icon}
            </div>
            <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>{selectedMethod.title}</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>{selectedMethod.details}</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Methods
