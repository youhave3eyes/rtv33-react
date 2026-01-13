import { motion } from 'framer-motion'
import { mockPosts } from '../../data/communityData'
import { useApp } from '../../context/AppContext'

const CommunityFeed = ({ feedFilter, setFeedFilter, openPostModal }) => {
  const { posts } = useApp()
  const allPosts = [...posts, ...mockPosts]

  return (
    <main className="community-feed">
      <div className="feed-filters">
        {['Latest', 'Following', 'Trending', 'Local'].map((filter) => (
          <button
            key={filter}
            className={`filter-tab ${feedFilter === filter.toLowerCase() ? 'active' : ''}`}
            onClick={() => setFeedFilter(filter.toLowerCase())}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div 
        className="create-post-box"
        onClick={openPostModal}
        whileHover={{ borderColor: 'var(--primary)' }}
      >
        <div className="post-avatar">🌟</div>
        <input type="text" placeholder="Share your frequency with the community..." readOnly />
        <button className="quick-post-btn">Post</button>
      </motion.div>

      {allPosts.map((post, index) => (
        <motion.article
          key={post.id}
          className="feed-post-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="post-header">
            <div className="post-avatar-large">{post.avatar}</div>
            <div className="post-user-info">
              <h4 className="post-username">{post.username}</h4>
              <p className="post-meta">
                📍 {post.location} • {post.timeAgo} • <span className="frequency-badge">{post.frequency}</span>
              </p>
            </div>
            <button className="post-menu">⋮</button>
          </div>

          <div className="post-content">
            {post.content.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            {post.tags && (
              <div className="post-tags">
                {post.tags.map((tag, i) => (
                  <span key={i} className="post-tag">{tag}</span>
                ))}
              </div>
            )}
          </div>

          {post.hasImage && (
            <div className="post-image-grid">
              <div className="post-image">📸</div>
            </div>
          )}

          <div className="post-engagement">
            <motion.button 
              className="engage-btn"
              whileHover={{ scale: 1.05 }}
            >
              💜 {post.likes}
            </motion.button>
            <motion.button 
              className="engage-btn"
              whileHover={{ scale: 1.05 }}
            >
              💬 {post.comments}
            </motion.button>
            <motion.button 
              className="engage-btn"
              whileHover={{ scale: 1.05 }}
            >
              🔄 Share
            </motion.button>
            <motion.button 
              className="engage-btn"
              whileHover={{ scale: 1.05 }}
            >
              🔖 Save
            </motion.button>
          </div>
        </motion.article>
      ))}

      <div className="load-more-posts">
        <motion.button 
          className="load-more-btn-gaia"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Load More Posts
        </motion.button>
      </div>
    </main>
  )
}

export default CommunityFeed
