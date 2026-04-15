import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProductCard from './ProductCard'

// Categories matched to DB seed brands
const CATEGORIES = ['All', 'Samsung', 'OnePlus', 'Vivo', 'Oppo', 'Realme', 'Xiaomi']

export default function ProductGrid({ products = [], title, subtitle, showTabs = false }) {
  const [activeTab, setActiveTab] = useState('All')
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    if (!products || products.length === 0) return
    if (activeTab === 'All') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter(p => p.brand === activeTab))
    }
  }, [activeTab, products])

  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="text-center mb-10">
          {title && <h2 className="section-title">{title}</h2>}
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
      )}

      {showTabs && (
        <div className="flex overflow-x-auto no-scrollbar gap-2 mb-10 pb-2 justify-start sm:justify-center">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2 rounded-xl whitespace-nowrap font-medium transition-all duration-300 ${
                activeTab === category 
                  ? 'bg-brand-sky text-white shadow-glow-sky' 
                  : 'bg-slate-100 dark:bg-dark-800 text-slate-600 dark:text-white/60 hover:bg-slate-200 dark:hover:bg-dark-700 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {(filteredProducts || []).map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={product._id}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {(filteredProducts || []).length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-500 dark:text-white/50 text-lg">No products found in this category.</p>
        </div>
      )}
    </div>
  )
}
