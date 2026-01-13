import { motion } from 'framer-motion'

const HighVibeFood = () => {
  const foodCategories = [
    {
      title: '⚡ Highest Vibration (10,000+ Hz)',
      className: 'high-vibe',
      foods: [
        { emoji: '🥬', name: 'Fresh Greens', hz: '70,000-90,000 Hz', desc: 'Leafy greens, sprouts, wheatgrass - pure life force energy' },
        { emoji: '🫐', name: 'Wild Berries', hz: '50,000-80,000 Hz', desc: 'Blueberries, acai, goji - antioxidant powerhouses' },
        { emoji: '🥑', name: 'Avocados', hz: '70,000+ Hz', desc: 'Heart-opening healthy fats and high vibration' },
        { emoji: '🌿', name: 'Fresh Herbs', hz: '60,000-100,000 Hz', desc: 'Cilantro, basil, mint - concentrated plant energy' }
      ]
    },
    {
      title: '⚡ High Vibration (5,000-10,000 Hz)',
      className: 'mid-vibe',
      foods: [
        { emoji: '🍎', name: 'Raw Fruits', hz: '5,000-15,000 Hz', desc: 'Apples, oranges, watermelon - hydrating life force' },
        { emoji: '🥕', name: 'Raw Vegetables', hz: '5,000-12,000 Hz', desc: 'Carrots, peppers, tomatoes - living nutrition' },
        { emoji: '🌰', name: 'Raw Nuts/Seeds', hz: '5,000-8,000 Hz', desc: 'Almonds, chia, flax - concentrated life potential' },
        { emoji: '🍯', name: 'Raw Honey', hz: '8,000-12,000 Hz', desc: "Nature's perfect energy source" }
      ]
    },
    {
      title: '⚠️ Low Vibration (0-1,000 Hz)',
      className: 'low-vibe',
      foods: [
        { emoji: '🍔', name: 'Processed Foods', hz: '0-100 Hz', desc: 'Dead energy, chemical additives, depletes vitality' },
        { emoji: '🥤', name: 'Refined Sugar', hz: '0-50 Hz', desc: 'Energy crashes, inflammation, acidic to the body' },
        { emoji: '🍗', name: 'Factory Meat', hz: '0-200 Hz', desc: 'Stress hormones, antibiotics, fear energy' },
        { emoji: '☕', name: 'Caffeine/Alcohol', hz: 'Variable', desc: 'Short boost, long crash, disrupts natural rhythm' }
      ]
    }
  ]

  return (
    <section id="food" className="food-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          High-Vibration Foods
        </motion.h2>
        <p className="section-subtitle">What you eat directly affects your energetic frequency</p>
        
        <div className="food-categories">
          {foodCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="food-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.2 }}
            >
              <h3 className={`category-title ${category.className}`}>{category.title}</h3>
              <div className="food-grid">
                {category.foods.map((food, foodIndex) => (
                  <motion.div
                    key={foodIndex}
                    className={`food-item ${category.className === 'low-vibe' ? 'low' : ''}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (catIndex * 0.2) + (foodIndex * 0.1) }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="food-emoji">{food.emoji}</span>
                    <h4>{food.name}</h4>
                    <p className="food-hz">{food.hz}</p>
                    <p>{food.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="food-tip"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>💡 Pro Tip</h3>
          <p>The fresher and more alive your food, the higher its frequency. Local, organic, raw, and plant-based foods carry the most life force. Cooking reduces frequency by 30-50%. Bless your food with gratitude to raise its vibration!</p>
        </motion.div>
      </div>
    </section>
  )
}

export default HighVibeFood
