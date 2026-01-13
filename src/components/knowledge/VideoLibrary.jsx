import { motion } from 'framer-motion'
import { videos } from '../../data/knowledgeData'

const VideoLibrary = () => {
  return (
    <section className="video-library-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">🎥 Video Library</h2>
          <button className="view-all-btn">View All →</button>
        </div>
        
        <div className="video-grid">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="video-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="video-thumbnail">
                <span className="play-icon">{video.thumbnail}</span>
                <span className="video-duration">{video.duration}</span>
                {video.premium && <span className="premium-badge">Premium</span>}
              </div>
              <div className="video-info">
                <h4>{video.title}</h4>
                <p>{video.description}</p>
                <div className="video-meta">
                  <span>👁️ {video.views} views</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoLibrary
