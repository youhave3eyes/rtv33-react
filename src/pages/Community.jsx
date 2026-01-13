import { motion } from 'framer-motion'
import { useState } from 'react'
import CommunityHero from '../components/community/CommunityHero'
import CommunitySidebar from '../components/community/CommunitySidebar'
import CommunityFeed from '../components/community/CommunityFeed'
import CommunityRightSidebar from '../components/community/CommunityRightSidebar'
import PostModal from '../components/community/PostModal'

const Community = () => {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false)
  const [feedFilter, setFeedFilter] = useState('latest')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CommunityHero />
      
      <section className="community-main">
        <div className="container-wide">
          <div className="community-layout">
            <CommunitySidebar openPostModal={() => setIsPostModalOpen(true)} />
            <CommunityFeed 
              feedFilter={feedFilter}
              setFeedFilter={setFeedFilter}
              openPostModal={() => setIsPostModalOpen(true)}
            />
            <CommunityRightSidebar />
          </div>
        </div>
      </section>

      <PostModal 
        isOpen={isPostModalOpen}
        onClose={() => setIsPostModalOpen(false)}
      />
    </motion.div>
  )
}

export default Community
