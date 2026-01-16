import { motion } from 'framer-motion'
import { useState } from 'react'
import MatrixRain from '../components/effects/MatrixRain'
import KnowledgeHero from '../components/knowledge/KnowledgeHero'
import FeaturedContent from '../components/knowledge/FeaturedContent'
import SearchFilter from '../components/knowledge/SearchFilter'
import LearningPaths from '../components/knowledge/LearningPaths'
import VideoLibrary from '../components/knowledge/VideoLibrary'
import KnowledgeGrid from '../components/knowledge/KnowledgeGrid'

const Knowledge = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="scanline"
      style={{ position: 'relative', background: '#000000', minHeight: '100vh' }}
    >
      <MatrixRain color="#9D4EDD" glowColor="#C77DFF" />
      <KnowledgeHero />
      <FeaturedContent />
      <SearchFilter 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <LearningPaths />
      <VideoLibrary />
      <KnowledgeGrid 
        searchTerm={searchTerm}
        activeCategory={activeCategory}
      />
      
      {/* Consciousness Expansion Topics Section */}
      <ConsciousnessTopics />
    </motion.div>
  )
}

// New Consciousness Expansion Topics Component
const ConsciousnessTopics = () => {
  const topics = [
    {
      title: 'Monatomic Gold & ORMUS',
      icon: '✨',
      description: 'Explore the mystical properties of monoatomic elements and their potential effects on consciousness',
      color: '#FFD700'
    },
    {
      title: 'Scalar Energy & Tachyon Fields',
      icon: '⚡',
      description: 'Understanding non-Hertzian frequencies and their role in energy manipulation',
      color: '#00D9FF'
    },
    {
      title: 'Free Energy Technologies',
      icon: '🔋',
      description: 'Nikola Tesla and zero-point energy principles for sustainable consciousness evolution',
      color: '#FF6B9D'
    },
    {
      title: 'Extraterrestrial Contact',
      icon: '👽',
      description: 'Pleiadians, Arcturians, Draconians & Reptilians: Understanding benevolent & challenging beings',
      color: '#9D4EDD'
    },
    {
      title: 'Plant Medicine & Entheogenic Journeys',
      icon: '🍄',
      description: 'Sacred plants, DMT, ayahuasca, and the geometry of expanded consciousness',
      color: '#3A86FF'
    },
    {
      title: 'Organic Living & Detoxification',
      icon: '🌿',
      description: 'Cleansing the physical temple: raw food, superfoods, and frequency-aligned nutrition',
      color: '#06D6A0'
    },
    {
      title: 'Sacred Geometry & Cosmic Codes',
      icon: '✡️',
      description: 'Flower of Life, Merkaba, and the mathematical blueprints of reality',
      color: '#FB5607'
    },
    {
      title: 'Ancient Wisdom & Cosmic Law',
      icon: '📿',
      description: 'Hermetic principles, karma, dharma, and universal consciousness',
      color: '#FFBE0B'
    }
  ]

  return (
    <section style={{
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%)',
      borderTop: '2px solid rgba(139, 92, 246, 0.3)',
      position: 'relative'
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem'
          }}>
            🔮 Consciousness Expansion Topics
          </h2>
          <p style={{
            color: '#94A3B8',
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Deep dives into the technologies and wisdom that accelerate human and planetary evolution
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {topics.map((topic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5, boxShadow: `0 0 18px ${topic.color}2A` }}
              style={{
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.84) 0%, rgba(10, 10, 18, 0.84) 100%)',
                border: `1px solid ${topic.color}55`,
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                {topic.icon}
              </div>
              <h3 style={{
                color: topic.color,
                fontSize: '1.3rem',
                fontWeight: 'bold',
                marginBottom: '0.8rem',
                textAlign: 'center'
              }}>
                {topic.title}
              </h3>
              <p style={{
                color: '#CBD5E1',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                {topic.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Knowledge
