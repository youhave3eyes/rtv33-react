import { motion } from 'framer-motion'

const CommunitySidebar = ({ openPostModal }) => {
  const groups = [
    { icon: '🧘', name: 'Meditation Masters', members: '3.2K' },
    { icon: '🌿', name: 'Plant Medicine Circle', members: '1.8K' },
    { icon: '⚡', name: 'Free Energy Seekers', members: '2.5K' }
  ]

  const topics = ['#meditation', '#fasting', '#frequencies', '#tesla', '#consciousness', '#ascension', '#awakening', '#manifestation']

  return (
    <aside className="community-sidebar">
      <div className="sidebar-section">
        <h3>Quick Actions</h3>
        <motion.button 
          className="sidebar-btn primary"
          onClick={openPostModal}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>✍️</span> Create Post
        </motion.button>
        <button className="sidebar-btn">
          <span>📍</span> Find Local Tribe
        </button>
        <button className="sidebar-btn">
          <span>📅</span> Browse Events
        </button>
      </div>

      <div className="sidebar-section">
        <h3>Popular Topics</h3>
        <div className="topic-tags">
          {topics.map((topic, index) => (
            <motion.span 
              key={index}
              className="topic-tag"
              whileHover={{ scale: 1.1 }}
            >
              {topic}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="sidebar-section">
        <h3>Your Groups</h3>
        <div className="group-list">
          {groups.map((group, index) => (
            <motion.div 
              key={index}
              className="group-item"
              whileHover={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
            >
              <span className="group-icon">{group.icon}</span>
              <div>
                <p className="group-name">{group.name}</p>
                <p className="group-members">{group.members} members</p>
              </div>
            </motion.div>
          ))}
        </div>
        <button className="sidebar-link">View All Groups →</button>
      </div>
    </aside>
  )
}

export default CommunitySidebar
