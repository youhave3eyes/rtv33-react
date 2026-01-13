import { motion } from 'framer-motion'
import { useState } from 'react'

const VendorMarketplace = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    category: '',
    productDescription: '',
    motivation: '',
    priceRange: '',
    capacity: '',
    portfolio: '',
    additional: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`✨ Thank you for your application, ${formData.contactName}!\n\nWe've received your submission for ${formData.businessName}.\n\nOur team will review your application and respond within 3-5 business days.\n\nKeep raising the vibration! 💜`)
    setFormData({
      businessName: '', contactName: '', email: '', phone: '', website: '',
      category: '', productDescription: '', motivation: '', priceRange: '',
      capacity: '', portfolio: '', additional: ''
    })
  }

  return (
    <section className="vendor-section">
      <div className="container">
        <motion.div 
          className="vendor-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>🤝 Become a Conscious Vendor</h3>
          <p>Do you create high-vibration products? Join our marketplace and reach thousands of conscious consumers.</p>
        </motion.div>

        <div className="vendor-benefits">
          {[
            { icon: '🌍', title: 'Global Reach', desc: 'Access our growing community of conscious consumers worldwide' },
            { icon: '💜', title: 'Mission-Aligned', desc: 'Connect with customers who share your values and frequency' },
            { icon: '📈', title: 'Low Fees', desc: 'Keep more of your profits with our conscious pricing model' }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <h4>{benefit.title}</h4>
              <p>{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="vendor-application"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h4>Vendor Application</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Business/Brand Name *</label>
              <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Your Name *</label>
                <input type="text" name="contactName" value={formData.contactName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group">
              <label>Product Category *</label>
              <select name="category" value={formData.category} onChange={handleChange} required>
                <option value="">Select category</option>
                <option value="supplements">Supplements & Herbs</option>
                <option value="crystals">Crystals & Minerals</option>
                <option value="tools">Frequency/Energy Tools</option>
                <option value="books">Books & Educational</option>
                <option value="apparel">Conscious Apparel</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Describe Your Products *</label>
              <textarea name="productDescription" value={formData.productDescription} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Why Join RTV33 Marketplace? *</label>
              <textarea name="motivation" value={formData.motivation} onChange={handleChange} required />
            </div>

            <motion.button 
              type="submit" 
              className="submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Application ✨
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default VendorMarketplace
