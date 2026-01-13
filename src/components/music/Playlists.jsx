import { motion } from 'framer-motion'

const Playlists = ({ setCurrentTrack }) => {
  const playlists = [
    { id: 1, icon: '🌅', name: 'Morning Activation', tracks: 12, duration: '1hr 23min' },
    { id: 2, icon: '🧘', name: 'Deep Meditation', tracks: 8, duration: '2hr 15min' },
    { id: 3, icon: '💫', name: 'Manifestation Mix', tracks: 15, duration: '54min' },
    { id: 4, icon: '🌙', name: 'Sleep Frequencies', tracks: 10, duration: '3hr 30min' }
  ]

  const handlePlaylistClick = (playlist) => {
    setCurrentTrack({
      title: `${playlist.name} - Track 1`,
      artist: 'RTV33 Curated'
    })
  }

  return (
    <section className="playlists-section" style={{ padding: '60px 40px', background: 'rgba(15, 23, 42, 0.3)' }}>
      <div className="container">
        <h3 className="subsection-title">🎧 Curated Frequency Playlists</h3>
        <div className="playlist-grid">
          {playlists.map((playlist, index) => (
            <motion.div
              key={playlist.id}
              className="playlist-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handlePlaylistClick(playlist)}
            >
              <div className="playlist-icon">{playlist.icon}</div>
              <h4>{playlist.name}</h4>
              <p>{playlist.tracks} tracks • {playlist.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Playlists
