import { motion } from 'framer-motion'

const ArtistGrid = ({ activeGenre, setActiveGenre, setCurrentTrack }) => {
  const genres = ['all', 'healing', 'meditation', 'conscious', 'psychedelic', 'world']
  
  const artists = [
    { id: 1, icon: '🎼', name: 'Healing Frequencies', genre: 'healing', desc: 'Solfeggio • 432Hz • Binaural' },
    { id: 2, icon: '🧘', name: 'Meditation Masters', genre: 'meditation', desc: 'Ambient • Drone • Sacred' },
    { id: 3, icon: '🎤', name: 'Conscious Hip-Hop', genre: 'conscious', desc: 'Truth • Awakening • Revolution' },
    { id: 4, icon: '🌀', name: 'Psychedelic Journeys', genre: 'psychedelic', desc: 'Psytrance • Psydub • Shamanic' },
    { id: 5, icon: '🌍', name: 'World & Tribal', genre: 'world', desc: 'Medicine Songs • Drumming • Chants' },
    { id: 6, icon: '➕', name: 'Add Your Artist', genre: 'all', desc: 'Submit your favorite high-vibe artist!', isAddCard: true }
  ]

  const filteredArtists = activeGenre === 'all' 
    ? artists 
    : artists.filter(a => a.genre === activeGenre || a.isAddCard)

  const handlePlay = (artist) => {
    if (!artist.isAddCard) {
      setCurrentTrack({
        title: artist.name,
        artist: artist.desc
      })
    }
  }

  return (
    <section style={{ padding: '60px 40px' }}>
      <div className="container">
        <div className="music-categories" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
          {genres.map((genre) => (
            <motion.button
              key={genre}
              className={`music-cat-btn ${activeGenre === genre ? 'active' : ''}`}
              onClick={() => setActiveGenre(genre)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {genre.charAt(0).toUpperCase() + genre.slice(1)}
            </motion.button>
          ))}
        </div>

        <div className="music-grid">
          {filteredArtists.map((artist, index) => (
            <motion.div
              key={artist.id}
              className={`music-card ${artist.isAddCard ? 'add-artist-card' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handlePlay(artist)}
            >
              <div className="music-cover">{artist.icon}</div>
              <div style={{ padding: '1.5rem' }}>
                <h3 className="artist-name">{artist.name}</h3>
                <p className="music-genre">{artist.desc}</p>
                <motion.button 
                  className="music-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {artist.isAddCard ? 'Submit Artist' : 'Explore'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArtistGrid
