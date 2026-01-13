import { motion } from 'framer-motion'
import { products, categories } from '../../data/productsData'
import { useApp } from '../../context/AppContext'

const ProductGrid = ({ activeCategory, setActiveCategory }) => {
  const { addToCart } = useApp()

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <section className="shop-section">
      <div className="container">
        <div className="shop-tabs">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              className={`shop-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="product-image">
                {product.icon}
                {product.badge && <span className="product-badge">{product.badge}</span>}
              </div>
              <div className="product-info">
                <p className="product-category">{product.category}</p>
                <h3>{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">${product.price}</span>
                  <motion.button 
                    className="buy-btn"
                    onClick={() => addToCart(product)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
