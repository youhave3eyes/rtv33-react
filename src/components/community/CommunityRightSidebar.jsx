import { motion } from 'framer-motion'
import { upcomingEvents, suggestedConnections } from '../../data/communityData'

const CommunityRightSidebar = () => {
  return (
    <aside className="community-right-sidebar">
      <div className="sidebar-section">
        <h3>🗺️ Find Your Tribe</h3>
        <select className="state-select-compact">
          <option value="">Select State...</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="NY">New York</option>
          <option value="TX">Texas</option>
          <option value="FL">Florida</option>
        </select>
        <button className="sidebar-btn small">Find Community</button>
        <div className="local-results"></div>
      </div>

      <div className="sidebar-section">
        <h3>📅 Upcoming Events</h3>
        <div className="event-list">
          {upcomingEvents.map((event) => (
            <motion.div 
              key={event.id}
              className="event-item"
              whileHover={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
            >
              <div className="event-date">
                <span className="event-month">{event.month}</span>
                <span className="event-day">{event.day}</span>
              </div>
              <div className="event-info">
                <h5>{event.title}</h5>
                <p>{event.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <button className="sidebar-link">View All Events →</button>
      </div>

      <div className="sidebar-section">
        <h3>✨ Connect With</h3>
        <div className="connection-list">
          {suggestedConnections.map((connection) => (
            <div key={connection.id} className="connection-item">
              <span className="connection-avatar">{connection.avatar}</span>
              <div className="connection-info">
                <p className="connection-name">{connection.name}</p>
                <p className="connection-meta">{connection.frequency} • {connection.role}</p>
              </div>
              <motion.button 
                className="connect-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                +
              </motion.button>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-section guidelines">
        <h3>💜 Guidelines</h3>
        <ul className="guideline-list">
          <li>✓ Be respectful and kind</li>
          <li>✓ Share authentic experiences</li>
          <li>✓ Support fellow seekers</li>
          <li>✓ No fear-mongering</li>
          <li>✓ Raise the vibe</li>
        </ul>
      </div>
    </aside>
  )
}

export default CommunityRightSidebar
