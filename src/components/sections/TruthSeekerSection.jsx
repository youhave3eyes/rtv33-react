import { motion } from 'framer-motion';
import SacredGeometry from '../effects/SacredGeometry';

const TruthSeekerSection = () => {
  const topics = [
    {
      icon: '🧘',
      title: 'Meditation & Consciousness',
      description: 'Explore ancient and modern meditation techniques. Expand your consciousness and unlock hidden dimensions of reality.',
      rabbit_hole: '/knowledge/meditation'
    },
    {
      icon: '🥗',
      title: 'Sacred Nutrition',
      description: 'High-vibrational foods that align with universal frequencies. Fuel your body temple with conscious eating.',
      rabbit_hole: '/knowledge/nutrition'
    },
    {
      icon: '🔺',
      title: 'Sacred Geometry',
      description: 'The mathematical patterns underlying all creation. From Flower of Life to Metatron\'s Cube.',
      rabbit_hole: '/knowledge/geometry'
    },
    {
      icon: '👁️',
      title: 'Third Eye Activation',
      description: 'Techniques for pineal gland decalcification and intuitive perception enhancement.',
      rabbit_hole: '/knowledge/third-eye'
    },
    {
      icon: '🌌',
      title: 'Quantum Consciousness',
      description: 'Where science meets spirituality. The observer effect, unified field, and reality creation.',
      rabbit_hole: '/knowledge/quantum'
    },
    {
      icon: '📿',
      title: 'Ancient Wisdom',
      description: 'Hidden knowledge from mystery schools, hermetic principles, and esoteric traditions.',
      rabbit_hole: '/knowledge/ancient-wisdom'
    }
  ];

  return (
    <section className="truth-seeker-section sacred-geometry-bg digital-grid" style={{ padding: '6rem 2rem', position: 'relative' }}>
      {/* Sacred Geometry Background Elements */}
      <div style={{ position: 'absolute', top: '10%', left: '5%', opacity: 0.15 }}>
        <SacredGeometry type="flower" size={300} color="#8338ec" />
      </div>
      <div style={{ position: 'absolute', bottom: '10%', right: '5%', opacity: 0.15 }}>
        <SacredGeometry type="metatron" size={250} color="#00ff41" />
      </div>

      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="truth-seeker-badge" style={{ marginBottom: '2rem' }}>
            👁️ TRUTH SEEKER PORTAL 👁️
          </div>
          <h2 className="glitch-text" data-text="UNLOCK THE MATRIX" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
            UNLOCK THE MATRIX
          </h2>
          <p className="holographic" style={{ fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto' }}>
            "The mind, once stretched by a new experience, never returns to its old dimensions."
            <br />
            <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>— Oliver Wendell Holmes Jr.</span>
          </p>
        </motion.div>

        {/* Topics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="consciousness-card scanline"
              style={{ cursor: 'pointer' }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
                {topic.icon}
              </div>
              <h3 className="neon-text rabbit-hole" style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>
                {topic.title}
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem', textAlign: 'center' }}>
                {topic.description}
              </p>
              <div style={{ textAlign: 'center' }}>
                <button className="awakening-btn">
                  DIVE DEEPER →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <div className="mystical-orb floating" style={{ margin: '0 auto 2rem' }}></div>
          <h3 className="neon-text" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            How deep does the rabbit hole go?
          </h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
            There is no spoon. There is no limit. Only consciousness expanding into infinite possibilities.
          </p>
          <button className="awakening-btn pulse-glow" style={{ fontSize: '1.2rem', padding: '1.2rem 3rem' }}>
            BEGIN YOUR JOURNEY
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TruthSeekerSection;
