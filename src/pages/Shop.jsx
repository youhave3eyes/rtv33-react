import { motion } from 'framer-motion'
import { useState } from 'react'
import ShopHero from '../components/shop/ShopHero'
import ProductGrid from '../components/shop/ProductGrid'
import VendorMarketplace from '../components/shop/VendorMarketplace'

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ShopHero />
      <ProductGrid 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <VendorMarketplace />
    </motion.div>
  )
}

export default Shop
