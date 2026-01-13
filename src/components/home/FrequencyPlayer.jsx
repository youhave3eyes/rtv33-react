import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { useApp } from '../../context/AppContext'

const FrequencyPlayer = () => {
  const { setFrequency } = useApp()
  const [activeFreq, setActiveFreq] = useState(432)
  const canvasRef = useRef(null)

  const frequencies = [
    { hz: 174, label: 'Pain Relief', description: 'Reduces physical and energetic pain, provides a sense of security.' },
    { hz: 285, label: 'Tissue Healing', description: 'Influences energy fields, helping tissue return to original form.' },
    { hz: 396, label: 'Release Fear', description: 'Liberates guilt and fear, aids in goal achievement.' },
    { hz: 432, label: 'Natural Harmony', description: 'The natural frequency of the universe. Promotes peace and harmony.' },
    { hz: 528, label: 'DNA Repair', description: 'The "Love Frequency" - repairs DNA, brings transformation.' },
    { hz: 639, label: 'Relationships', description: 'Enhances communication, understanding, and love.' },
    { hz: 741, label: 'Awakening', description: 'Cleans cells from toxins, awakens intuition.' },
    { hz: 852, label: 'Third Eye', description: 'Awakens intuition, raises awareness, returns to spiritual order.' }
  ]

  const currentFreqData = frequencies.find(f => f.hz === activeFreq)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let animationId
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const time = Date.now() * 0.001
      const waveCount = 3
      
      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.4 - w * 0.1})`
        ctx.lineWidth = 2
        
        for (let x = 0; x < canvas.width; x++) {
          const frequency = activeFreq / 100
          const amplitude = 20 + w * 10
          const y = canvas.height / 2 + Math.sin((x * 0.01 + time * frequency + w)) * amplitude
          
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        
        ctx.stroke()
      }
      
      animationId = requestAnimationFrame(draw)
    }
    
    draw()
    return () => cancelAnimationFrame(animationId)
  }, [activeFreq])

  const handleFreqClick = (hz) => {
    setActiveFreq(hz)
    setFrequency(hz)
  }

  return (
    <section id="frequencies" className="frequency-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Healing Frequency Player
        </motion.h2>
        <p className="section-subtitle">Experience the power of sound healing</p>
        
        <motion.div 
          className="frequency-player"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="frequency-visualizer">
            <canvas ref={canvasRef} style={{ width: '100%', height: '200px' }} />
          </div>
          
          <div className="frequency-controls">
            <div className="frequency-options">
              {frequencies.map((freq) => (
                <motion.button
                  key={freq.hz}
                  className={`freq-btn ${activeFreq === freq.hz ? 'active' : ''}`}
                  onClick={() => handleFreqClick(freq.hz)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="freq-hz">{freq.hz} Hz</span>
                  <span className="freq-label">{freq.label}</span>
                </motion.button>
              ))}
            </div>
            
            <div className="player-info">
              <p className="now-playing">
                Now Playing: <span>{activeFreq} Hz - {currentFreqData?.label}</span>
              </p>
              <p className="freq-description">{currentFreqData?.description}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FrequencyPlayer
