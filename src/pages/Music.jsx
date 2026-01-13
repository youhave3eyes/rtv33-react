import { motion } from 'framer-motion'
import { useState } from 'react'
import MusicHero from '../components/music/MusicHero'
import MusicPlayer from '../components/music/MusicPlayer'
import ArtistGrid from '../components/music/ArtistGrid'
import Playlists from '../components/music/Playlists'

const Music = () => {
  const [activeGenre, setActiveGenre] = useState('all')
  const [currentTrack, setCurrentTrack] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MusicHero />
      <MusicPlayer currentTrack={currentTrack} />
      <ArtistGrid 
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        setCurrentTrack={setCurrentTrack}
      />
      <Playlists setCurrentTrack={setCurrentTrack} />
    </motion.div>
  )
}

export default Music
