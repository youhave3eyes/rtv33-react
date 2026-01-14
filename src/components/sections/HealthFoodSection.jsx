import { motion } from 'framer-motion';

const HealthFoodSection = () => {
  const superfoods = [
    {
      name: 'Blue-Green Algae',
      icon: '🌊',
      frequency: '528 Hz',
      benefits: ['Detoxification', 'Brain function', 'Energy boost'],
      description: 'Spirulina & Chlorella - Ancient superfood from pristine waters',
      color: '#00ffff'
    },
    {
      name: 'Raw Cacao',
      icon: '🍫',
      frequency: '432 Hz',
      benefits: ['Mood elevation', 'Heart opening', 'Antioxidants'],
      description: 'The food of the gods. Pure bliss molecule activation.',
      color: '#c9a15a'
    },
    {
      name: 'Medicinal Mushrooms',
      icon: '🍄',
      frequency: '741 Hz',
      benefits: ['Immunity', 'Consciousness', 'Longevity'],
      description: 'Reishi, Lion\'s Mane, Chaga - Nature\'s pharmacy',
      color: '#9d4edd'
    },
    {
      name: 'Ashwagandha',
      icon: '🌿',
      frequency: '639 Hz',
      benefits: ['Stress relief', 'Vitality', 'Balance'],
      description: 'Adaptogenic herb for modern stress warriors',
      color: '#00ff41'
    },
    {
      name: 'Bee Products',
      icon: '🐝',
      frequency: '963 Hz',
      benefits: ['Immunity', 'Energy', 'Longevity'],
      description: 'Raw honey, royal jelly, bee pollen - Sacred nectar',
      color: '#ffd700'
    },
    {
      name: 'Hemp Seeds',
      icon: '🌱',
      frequency: '528 Hz',
      benefits: ['Complete protein', 'Omega 3-6-9', 'Brain food'],
      description: 'Perfect fatty acid ratio for optimal health',
      color: '#39ff14'
    }
  ];

  const nutritionPrinciples = [
    {
      icon: '🌈',
      title: 'Eat the Rainbow',
      description: 'Each color contains unique phytonutrients and frequencies that resonate with different chakras',
      tips: ['Red: Root chakra, grounding', 'Orange: Sacral, creativity', 'Yellow: Solar plexus, power', 'Green: Heart, love', 'Blue: Throat, expression', 'Purple: Crown, spirituality']
    },
    {
      icon: '🔥',
      title: 'Living Foods',
      description: 'Raw, sprouted, fermented foods carry life force energy (prana/chi) that cooked foods lack',
      tips: ['Sprouts: Enzyme rich', 'Fermented: Probiotic power', 'Raw nuts/seeds: Activated', 'Fresh juices: Instant nutrition']
    },
    {
      icon: '💧',
      title: 'Structured Water',
      description: 'Hexagonal water carries information and hydrates cells 6x better than regular water',
      tips: ['Spring water preferred', 'Vortex/spin your water', 'Add crystals for charging', 'Bless your water with intention']
    },
    {
      icon: '⏰',
      title: 'Circadian Eating',
      description: 'Align eating with natural cycles for optimal digestion and energy',
      tips: ['Heavy meal at noon', 'Light dinner before sunset', 'Morning: Cleansing foods', 'Evening: Easy digestion']
    }
  ];

  const consciousEatingTips = [
    '🙏 Bless your food before eating',
    '🧘 Eat in a peaceful environment',
    '🌟 Choose organic when possible',
    '🌍 Support local farmers',
    '💚 Eat with gratitude',
    '🔇 Avoid distractions while eating',
    '⚖️ Practice portion awareness',
    '🌱 Grow your own food'
  ];

  return (
    <section className="health-food-section digital-grid" style={{ padding: '6rem 2rem', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(201, 161, 90, 0.1) 50%, rgba(0, 0, 0, 0.9) 100%)' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="truth-seeker-badge" style={{ marginBottom: '1.5rem', borderColor: 'var(--sacred-gold)', color: 'var(--sacred-gold)' }}>
            🌿 SACRED NUTRITION 🌿
          </div>
          <h2 className="glitch-text" data-text="FUEL YOUR TEMPLE" style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--sacred-gold)', textShadow: 'var(--sacred-glow)' }}>
            FUEL YOUR TEMPLE
          </h2>
          <p className="holographic" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            "Let food be thy medicine and medicine be thy food"
            <br />
            <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>— Hippocrates</span>
          </p>
        </motion.div>

        {/* Superfoods Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginBottom: '5rem' }}
        >
          <h3 className="neon-text" style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
            ⚡ High-Vibration Superfoods ⚡
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {superfoods.map((food, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="health-food-card"
                style={{ 
                  padding: '2rem',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div className="floating" style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                  {food.icon}
                </div>
                <h4 className="neon-text" style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: food.color, textShadow: `0 0 10px ${food.color}` }}>
                  {food.name}
                </h4>
                <div className="truth-seeker-badge" style={{ 
                  fontSize: '0.8rem', 
                  padding: '0.3rem 0.8rem', 
                  marginBottom: '1rem',
                  borderColor: food.color,
                  color: food.color
                }}>
                  {food.frequency}
                </div>
                <p style={{ fontSize: '0.95rem', marginBottom: '1rem', opacity: 0.9 }}>
                  {food.description}
                </p>
                <div style={{ marginBottom: '1rem' }}>
                  {food.benefits.map((benefit, i) => (
                    <div key={i} style={{ 
                      fontSize: '0.85rem', 
                      marginBottom: '0.3rem',
                      color: 'rgba(255, 215, 0, 0.8)'
                    }}>
                      ✓ {benefit}
                    </div>
                  ))}
                </div>
                <button className="awakening-btn" style={{ 
                  width: '100%',
                  borderColor: food.color,
                  color: food.color
                }}>
                  LEARN MORE
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nutrition Principles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ marginBottom: '5rem' }}
        >
          <h3 className="holographic" style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
            🌟 Principles of Conscious Eating 🌟
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {nutritionPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="consciousness-card"
                style={{ padding: '2rem' }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                  {principle.icon}
                </div>
                <h4 className="neon-text" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                  {principle.title}
                </h4>
                <p style={{ fontSize: '1rem', marginBottom: '1.5rem', opacity: 0.9 }}>
                  {principle.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {principle.tips.map((tip, i) => (
                    <li key={i} style={{ 
                      fontSize: '0.9rem', 
                      marginBottom: '0.5rem',
                      color: 'rgba(0, 255, 65, 0.8)',
                      paddingLeft: '1.5rem',
                      position: 'relative'
                    }}>
                      <span style={{ position: 'absolute', left: 0 }}>→</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Conscious Eating Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ 
            padding: '3rem',
            background: 'rgba(255, 215, 0, 0.05)',
            border: '2px solid var(--sacred-gold)',
            borderRadius: '15px',
            boxShadow: 'var(--sacred-glow)'
          }}
        >
          <h3 className="neon-text" style={{ fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center', color: 'var(--sacred-gold)', textShadow: 'var(--sacred-glow)' }}>
            🙏 Mindful Eating Practices 🙏
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem',
            textAlign: 'center'
          }}>
            {consciousEatingTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="truth-seeker-badge pulse-glow"
                style={{ 
                  padding: '1rem',
                  borderColor: 'var(--sacred-gold)',
                  color: 'var(--sacred-gold)',
                  fontSize: '0.95rem'
                }}
              >
                {tip}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HealthFoodSection;
