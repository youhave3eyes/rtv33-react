import { motion } from 'framer-motion';
import { useState } from 'react';

const MeditationSection = () => {
  const [selectedFrequency, setSelectedFrequency] = useState(null);

  const frequencies = [
    {
      name: '432 Hz',
      title: 'Universal Harmony',
      description: 'The frequency of nature. Aligns with the heartbeat of Earth.',
      benefits: ['Deep relaxation', 'Cellular healing', 'Cosmic connection'],
      color: '#00ff41'
    },
    {
      name: '528 Hz',
      title: 'Love & Miracle',
      description: 'The frequency of transformation and DNA repair.',
      benefits: ['DNA healing', 'Heart chakra opening', 'Spiritual awakening'],
      color: '#9d4edd'
    },
    {
      name: '639 Hz',
      title: 'Connection',
      description: 'Enhances communication and understanding.',
      benefits: ['Relationship harmony', 'Empathy expansion', 'Social healing'],
      color: '#00ffff'
    },
    {
      name: '741 Hz',
      title: 'Awakening',
      description: 'Detoxification and consciousness expansion.',
      benefits: ['Toxin release', 'Intuition boost', 'Problem solving'],
      color: '#ffd700'
    },
    {
      name: '963 Hz',
      title: 'Pineal Activation',
      description: 'Third eye awakening and divine connection.',
      benefits: ['Third eye opening', 'Higher consciousness', 'Oneness experience'],
      color: '#4cc9f0'
    }
  ];

  const meditationTypes = [
    {
      icon: '🧘‍♀️',
      name: 'Transcendental',
      duration: '20 min',
      level: 'Beginner',
      description: 'Silent mantra repetition for deep inner peace'
    },
    {
      icon: '🌊',
      name: 'Vipassana',
      duration: '45 min',
      level: 'Advanced',
      description: 'Body scanning and mindfulness of sensations'
    },
    {
      icon: '💚',
      name: 'Loving-Kindness',
      duration: '15 min',
      level: 'All Levels',
      description: 'Cultivate compassion and universal love'
    },
    {
      icon: '🌀',
      name: 'Kundalini',
      duration: '30 min',
      level: 'Intermediate',
      description: 'Energy awakening through breath and movement'
    },
    {
      icon: '👁️',
      name: 'Third Eye',
      duration: '25 min',
      level: 'Advanced',
      description: 'Pineal gland activation and intuition enhancement'
    },
    {
      icon: '🎵',
      name: 'Sound Bath',
      duration: '40 min',
      level: 'All Levels',
      description: 'Healing frequencies and binaural beats'
    }
  ];

  return (
    <section className="meditation-section scanline" style={{ padding: '6rem 2rem', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="glitch-text" data-text="EXPAND YOUR CONSCIOUSNESS" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            EXPAND YOUR CONSCIOUSNESS
          </h2>
          <p className="neon-text" style={{ fontSize: '1.2rem', opacity: 0.9 }}>
            🧘 Meditation • Frequencies • Inner Journey 🧘
          </p>
        </motion.div>

        {/* Healing Frequencies */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginBottom: '5rem' }}
        >
          <h3 className="holographic" style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
            🎵 Solfeggio Frequencies 🎵
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {frequencies.map((freq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="consciousness-card"
                onClick={() => setSelectedFrequency(freq)}
                style={{
                  cursor: 'pointer',
                  borderColor: selectedFrequency === freq ? freq.color : 'var(--matrix-green)',
                  boxShadow: selectedFrequency === freq ? `0 0 20px ${freq.color}` : 'none'
                }}
              >
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 'bold', 
                  color: freq.color,
                  textShadow: `0 0 10px ${freq.color}`,
                  marginBottom: '0.5rem'
                }}>
                  {freq.name}
                </div>
                <h4 className="neon-text" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                  {freq.title}
                </h4>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem', opacity: 0.8 }}>
                  {freq.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {freq.benefits.map((benefit, i) => (
                    <li key={i} style={{ 
                      fontSize: '0.85rem', 
                      marginBottom: '0.3rem',
                      color: 'rgba(0, 255, 65, 0.7)'
                    }}>
                      ✓ {benefit}
                    </li>
                  ))}
                </ul>
                <button className="awakening-btn" style={{ marginTop: '1rem', width: '100%', padding: '0.7rem' }}>
                  PLAY FREQUENCY
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Meditation Practices */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="holographic" style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
            🌟 Guided Meditations 🌟
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {meditationTypes.map((meditation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="consciousness-card"
                style={{ textAlign: 'center' }}
              >
                <div className="floating" style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                  {meditation.icon}
                </div>
                <h4 className="neon-text" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  {meditation.name}
                </h4>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span className="truth-seeker-badge" style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem' }}>
                    {meditation.duration}
                  </span>
                  <span className="truth-seeker-badge" style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem' }}>
                    {meditation.level}
                  </span>
                </div>
                <p style={{ fontSize: '1rem', marginBottom: '1.5rem', opacity: 0.9 }}>
                  {meditation.description}
                </p>
                <button className="awakening-btn pulse-glow" style={{ width: '100%' }}>
                  START MEDITATION
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Meditation Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ 
            marginTop: '4rem', 
            padding: '3rem', 
            background: 'rgba(157, 78, 221, 0.1)',
            border: '2px solid var(--consciousness-purple)',
            borderRadius: '15px',
            textAlign: 'center'
          }}
        >
          <h3 className="neon-text" style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>
            💎 Pro Tips for Deep Meditation 💎
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'left' }}>
            <div>
              <h4 className="holographic" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🌅 Best Times</h4>
              <p style={{ opacity: 0.9 }}>Dawn (Brahma Muhurta) or dusk for maximum cosmic energy alignment</p>
            </div>
            <div>
              <h4 className="holographic" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🧘 Posture</h4>
              <p style={{ opacity: 0.9 }}>Spine straight, creating an energy channel from Earth to Universe</p>
            </div>
            <div>
              <h4 className="holographic" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🌬️ Breathwork</h4>
              <p style={{ opacity: 0.9 }}>Pranayama before meditation to activate energy centers</p>
            </div>
            <div>
              <h4 className="holographic" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🔮 Sacred Space</h4>
              <p style={{ opacity: 0.9 }}>Create a dedicated space with crystals, incense, and sacred geometry</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MeditationSection;
