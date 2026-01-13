import { motion } from 'framer-motion'
import { useState } from 'react'
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
    >
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
    </motion.div>
  )
}

export default Knowledge
