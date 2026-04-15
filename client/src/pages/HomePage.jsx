import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import ServicesSection from '../components/ServicesSection'
import AboutSection from '../components/AboutSection'
import ReviewsSection from '../components/ReviewsSection'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { productService } from '../services/productService'

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const { products } = await productService.getProducts({ featured: true, limit: 8 })
        setFeaturedProducts(products)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchHomeData()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
        
        {/* Featured Products */}
        <section className="py-20 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="section-title">Trending <span className="text-gradient-red">Smartphones</span></h2>
              <p className="section-subtitle">Discover our most popular devices</p>
            </div>
            <Link to="/products" className="hidden sm:inline-flex text-brand-sky hover:text-brand-sky-dark dark:hover:text-white font-medium transition-colors mb-2">
              View all →
            </Link>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="card h-[400px] animate-pulse bg-slate-200 dark:bg-white/5" />
              ))}
            </div>
          ) : (
            <ProductGrid 
              products={featuredProducts} 
              showTabs={true}
            />
          )}
          
          <div className="mt-10 text-center sm:hidden">
            <Link to="/products" className="btn-secondary w-full inline-block">
              View All Products
            </Link>
          </div>
        </section>

        <ServicesSection />
        <AboutSection />
        <ReviewsSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
