import { motion } from 'framer-motion'
import { useState } from 'react'

const VibeCalculator = () => {
  const [formData, setFormData] = useState({
    emotion: 5,
    diet: 50,
    meditation: 10,
    nature: 30,
    water: 5,
    gratitude: 5
  })
  const [result, setResult] = useState(null)

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const calculateVibe = () => {
    let frequency = 200
    frequency += formData.emotion * 15
    frequency += (formData.diet / 100) * 100
    frequency += formData.meditation
    frequency += (formData.nature / 120) * 60
    frequency += formData.water * 5
    frequency += formData.gratitude * 10
    
    frequency = Math.round(frequency)

    let level, message, color, recommendations

    if (frequency < 300) {
      level = '⚠️ Low Vibration'
      color = '#ff6b6b'
      message = "Your energy is in a lower state. This is a signal that your body and mind need attention. Don't worry - every moment is an opportunity to raise your frequency!"
      recommendations = [
        '🌿 Start with 5 minutes of deep breathing',
        '💧 Drink a large glass of pure water',
        '🥬 Eat some fresh fruit or greens',
        '🚶 Take a short walk outside',
        '🙏 Practice gratitude for 3 things'
      ]
    } else if (frequency < 400) {
      level = '📊 Moderate Vibration'
      color = '#ffff00'
      message = "You're in a neutral energetic state. You have a good foundation, but there's room to elevate your frequency even higher!"
      recommendations = [
        '🧘 Increase meditation to 20+ minutes',
        '🥗 Focus on 70%+ raw plant foods today',
        '🌳 Spend at least 30 minutes in nature',
        '🎵 Listen to 432Hz or 528Hz frequencies',
        '📖 Read something uplifting and inspiring'
      ]
    } else if (frequency < 500) {
      level = '✨ High Vibration'
      color = '#00ff00'
      message = "Excellent! You're vibrating at a high frequency. Your energy is aligned, and you're in a state that attracts positive experiences."
      recommendations = [
        '🌟 Maintain your current practices',
        '💝 Share your positive energy with others',
        '🎨 Engage in creative activities',
        '📝 Journal your insights and gratitude',
        '🧘‍♀️ Deepen your meditation practice'
      ]
    } else {
      level = '🌟 Exceptional Vibration'
      color = '#00ffff'
      message = "Incredible! You're operating at an exceptional frequency. You're aligned with universal energy and in a state of flow. This is mastery level!"
      recommendations = [
        '🙏 You are an inspiration to others',
        '🌍 Consider teaching what you know',
        '💫 Explore advanced consciousness practices',
        '🎯 Set powerful intentions for manifestation',
        '❤️ Send healing energy to the collective'
      ]
    }

    setResult({ frequency, level, color, message, recommendations })
  }

  return (
    <section id="calculator" className="calculator-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Your Daily Vibe Check
        </motion.h2>
        <p className="section-subtitle">Answer these questions to calculate your current vibrational frequency</p>
        
        <motion.div 
          className="vibe-calculator"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="calculator-form">
            <div className="question">
              <label>How would you rate your emotional state today?</label>
              <div className="slider-container">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={formData.emotion}
                  onChange={(e) => handleChange('emotion', parseInt(e.target.value))}
                  className="slider"
                />
                <div className="slider-labels">
                  <span>Low</span>
                  <span>{formData.emotion}</span>
                  <span>High</span>
                </div>
              </div>
            </div>

            <div className="question">
              <label>What percentage of your diet today was raw, plant-based foods?</label>
              <div className="slider-container">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={formData.diet}
                  onChange={(e) => handleChange('diet', parseInt(e.target.value))}
                  className="slider"
                />
                <div className="slider-labels">
                  <span>0%</span>
                  <span>{formData.diet}%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>

            <div className="question">
              <label>How many minutes did you meditate or practice mindfulness?</label>
              <div className="slider-container">
                <input
                  type="range"
                  min="0"
                  max="60"
                  value={formData.meditation}
                  onChange={(e) => handleChange('meditation', parseInt(e.target.value))}
                  className="slider"
                />
                <div className="slider-labels">
                  <span>0 min</span>
                  <span>{formData.meditation} min</span>
                  <span>60+ min</span>
                </div>
              </div>
            </div>

            <div className="question">
              <label>How much time did you spend in nature today?</label>
              <div className="slider-container">
                <input
                  type="range"
                  min="0"
                  max="120"
                  value={formData.nature}
                  onChange={(e) => handleChange('nature', parseInt(e.target.value))}
                  className="slider"
                />
                <div className="slider-labels">
                  <span>0 min</span>
                  <span>{formData.nature} min</span>
                  <span>2+ hrs</span>
                </div>
              </div>
            </div>

            <div className="question">
              <label>How would you rate your water intake today?</label>
              <div className="slider-container">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={formData.water}
                  onChange={(e) => handleChange('water', parseInt(e.target.value))}
                  className="slider"
                />
                <div className="slider-labels">
                  <span>Dehydrated</span>
                  <span>{formData.water}</span>
                  <span>Excellent</span>
                </div>
              </div>
            </div>

            <div className="question">
              <label>Did you practice gratitude or positive affirmations?</label>
              <div className="slider-container">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={formData.gratitude}
                  onChange={(e) => handleChange('gratitude', parseInt(e.target.value))}
                  className="slider"
                />
                <div className="slider-labels">
                  <span>No</span>
                  <span>{formData.gratitude}</span>
                  <span>Extensively</span>
                </div>
              </div>
            </div>

            <motion.button 
              className="btn calculate-btn"
              onClick={calculateVibe}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Calculate My Vibration
            </motion.button>
          </div>

          {result && (
            <motion.div 
              className="vibe-result"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="result-display">
                <h3>Your Current Frequency</h3>
                <div className="frequency-result">
                  <span style={{ color: result.color }}>{result.frequency}</span>
                  <span className="hz-unit">Hz</span>
                </div>
                <div className="vibe-level" style={{ color: result.color }}>{result.level}</div>
                <p>{result.message}</p>
                <div className="recommendations">
                  <h4>💡 Recommendations to Raise Your Vibe:</h4>
                  <ul>
                    {result.recommendations.map((rec, index) => (
                      <li key={index}>{rec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default VibeCalculator
