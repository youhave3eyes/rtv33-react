import { motion } from 'framer-motion'
import { learningPaths } from '../../data/knowledgeData'

const LearningPaths = () => {
  return (
    <section className="learning-paths-section">
      <div className="container">
        <h2 className="section-title">🎓 Learning Paths</h2>
        <p className="section-subtitle">Structured journeys through interconnected knowledge</p>
        
        <div className="paths-grid">
          {learningPaths.map((path, index) => (
            <motion.div
              key={path.id}
              className="path-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="path-icon">{path.icon}</div>
              <h3>{path.title}</h3>
              <p>{path.description}</p>
              <div className="path-progress">
                <span>{path.articles} Articles</span>
                <span>•</span>
                <span>~{path.hours} hours</span>
              </div>
              <motion.button 
                className="path-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Path
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearningPaths
