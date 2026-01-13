import { motion } from 'framer-motion'

const SearchFilter = ({ searchTerm, setSearchTerm, activeCategory, setActiveCategory }) => {
  const categories = [
    { id: 'all', label: 'All Topics' },
    { id: 'tesla', label: 'Tesla & Free Energy' },
    { id: 'earth', label: 'Earth & Cosmology' },
    { id: 'science', label: 'New Science' },
    { id: 'ancient', label: 'Ancient Wisdom' },
    { id: 'health', label: 'Suppressed Health' },
    { id: 'consciousness', label: 'Consciousness' },
    { id: 'spirituality', label: 'Spirituality' }
  ]

  return (
    <section className="search-filter-section">
      <div className="container">
        <motion.div 
          className="search-bar-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="search-input-group">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="knowledge-search-input"
              placeholder="Search for Tesla, frequency, consciousness, ancient wisdom..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="voice-search" title="Voice Search">🎤</button>
          </div>
        </motion.div>

        <div className="filter-chips">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              className={`chip ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SearchFilter
