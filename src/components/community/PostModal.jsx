import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useApp } from '../../context/AppContext'

const PostModal = ({ isOpen, onClose }) => {
  const { createPost } = useApp()
  const [postContent, setPostContent] = useState('')
  const [tags, setTags] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (postContent.trim()) {
      createPost({
        avatar: '🌟',
        username: 'You',
        location: 'Your Location',
        frequency: '528 Hz',
        timeAgo: 'Just now',
        content: postContent,
        tags: tags.split(',').map(t => t.trim()).filter(t => t),
        likes: 0,
        comments: 0
      })
      
      setPostContent('')
      setTags('')
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal"
          style={{ display: 'block' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="modal-content post-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={onClose}>&times;</span>
            <h2>Create Post</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <textarea
                  name="postContent"
                  placeholder="Share your thoughts, experiences, questions..."
                  rows="6"
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(30, 41, 59, 0.8)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    borderRadius: '12px',
                    color: 'var(--light)',
                    fontSize: '1rem',
                    fontFamily: 'Inter, sans-serif',
                    resize: 'vertical'
                  }}
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="tags"
                  placeholder="Add tags (comma separated): #meditation, #fasting"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(30, 41, 59, 0.8)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    borderRadius: '12px',
                    color: 'var(--light)',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div className="form-row" style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <button type="button" className="attach-btn">📎 Attach Image</button>
                <button type="button" className="attach-btn">📍 Add Location</button>
              </div>
              
              <motion.button 
                type="submit" 
                className="submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Post to Community
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PostModal
