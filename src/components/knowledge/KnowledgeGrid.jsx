import { motion } from 'framer-motion'
import { knowledgeArticles } from '../../data/knowledgeData'

const KnowledgeGrid = ({ searchTerm, activeCategory }) => {
  const filteredArticles = knowledgeArticles.filter(article => {
    const matchesSearch = searchTerm === '' || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory
    
    return matchesSearch && matchesCategory
  })

  const getCategoryClass = (category) => {
    const classes = {
      tesla: 'tesla',
      earth: 'earth',
      science: 'science',
      ancient: 'ancient',
      health: 'health'
    }
    return classes[category] || 'science'
  }

  const getCategoryLabel = (category) => {
    const labels = {
      tesla: 'Tesla & Free Energy',
      earth: 'Cosmology',
      science: 'New Science',
      ancient: 'Ancient Wisdom',
      health: 'Suppressed Health'
    }
    return labels[category] || 'Knowledge'
  }

  return (
    <section className="main-knowledge-section">
      <div className="container">
        <h2 className="section-title">📚 Knowledge Library</h2>
        
        {filteredArticles.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--gray)' }}>
            <p style={{ fontSize: '1.2rem' }}>No articles found. Try different search terms or categories.</p>
          </div>
        ) : (
          <>
            <div className="knowledge-grid-gaia">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  className="knowledge-card-gaia"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="card-image">{article.icon}</div>
                  <div className="card-body">
                    <span className={`category-tag ${getCategoryClass(article.category)}`}>
                      {getCategoryLabel(article.category)}
                    </span>
                    <h3>{article.title}</h3>
                    <p className="card-excerpt">{article.excerpt}</p>
                    <div className="card-footer">
                      <span className="read-time">📖 {article.readTime} min</span>
                      <motion.button 
                        className="read-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Read More
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="load-more-section">
              <motion.button 
                className="load-more-btn-gaia"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Load More Knowledge
              </motion.button>
            </div>
          </>
        )}

        <motion.div 
          className="knowledge-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h2>Ready to Go Deeper?</h2>
            <p>Join our premium community for exclusive content, courses, and direct access to teachers.</p>
            <motion.button 
              className="cta-btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Membership
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default KnowledgeGrid
