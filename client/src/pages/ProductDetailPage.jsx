import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingCart, Zap, Shield, Truck, RotateCcw } from 'lucide-react'
import toast from 'react-hot-toast'
import ImageCarousel from '../components/ImageCarousel'
import StarRating from '../components/StarRating'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'
import { productService } from '../services/productService'
import { reviewService } from '../services/reviewService'

export default function ProductDetailPage() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  
  const [selectedVariant, setSelectedVariant] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [prodData, reviewData] = await Promise.all([
          productService.getProduct(id),
          reviewService.getReviews(id)
        ])
        setProduct(prodData.product)
        setReviews(reviewData.reviews)
      } catch (err) {
        toast.error('Failed to load product details')
      } finally {
        setLoading(false)
        window.scrollTo(0, 0)
      }
    }
    fetchData()
  }, [id])

  if (loading) {
    return <div className="min-h-screen pt-20 flex items-center justify-center"><div className="w-10 h-10 border-4 border-brand-sky border-t-transparent rounded-full animate-spin"/></div>
  }

  if (!product) {
    return <div className="min-h-screen pt-32 text-center"><h2 className="text-2xl text-slate-900 dark:text-white">Product not found</h2><Link to="/products" className="text-brand-sky mt-4 inline-block">Back to products</Link></div>
  }

  const currentVariant = product.variants?.[selectedVariant] || {}
  const price = currentVariant.price || product.price

  const handleAddToCart = () => {
    addToCart(product._id, 1, currentVariant)
  }

  return (
    <div className="min-h-screen pt-20 flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Images */}
          <div>
            <ImageCarousel images={product.images} altText={product.name} />
          </div>

          {/* Right: Details */}
          <div>
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-brand-sky text-sm font-bold uppercase tracking-wider">{product.brand}</span>
              {product.isHotDeal && <span className="badge-hot animate-pulse-glow border-none bg-brand-red px-2 py-0.5 rounded text-white text-xs">HOT DEAL</span>}
              {product.stock <= 5 && <span className="bg-brand-gold text-dark-900 text-xs font-bold px-2 py-0.5 rounded">ONLY {product.stock} LEFT</span>}
            </div>

            <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 line-clamp-2">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <StarRating rating={product.rating} reviews={product.numReviews} />
            </div>

            <div className="mb-6 flex items-end gap-3 border-b border-slate-200 dark:border-white/10 pb-6">
              <span className="text-4xl font-bold text-slate-900 dark:text-white">₹{price.toLocaleString('en-IN')}</span>
              {product.mrp > price && (
                <>
                  <span className="text-slate-400 dark:text-white/40 line-through text-lg">₹{product.mrp.toLocaleString('en-IN')}</span>
                  <span className="text-green-500 dark:text-green-400 font-semibold">{Math.round(((product.mrp - price)/product.mrp)*100)}% OFF</span>
                </>
              )}
            </div>

            {/* Variants Selection */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-8">
                <h4 className="text-slate-900 dark:text-white font-semibold mb-3">Select Variant</h4>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((v, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedVariant(i)}
                      className={`px-4 py-2 rounded-xl border transition-all ${
                        selectedVariant === i 
                          ? 'border-brand-sky bg-brand-sky/10 text-brand-sky-dark dark:text-brand-sky' 
                          : 'border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/30 text-slate-600 dark:text-white/70'
                      }`}
                    >
                      <span className="block font-medium">{v.ram} + {v.storage}</span>
                      <span className="block text-xs opacity-70">{v.color}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={handleAddToCart}
                className="flex-1 btn-primary py-4 text-lg flex items-center justify-center gap-2"
                disabled={product.stock === 0}
              >
                <ShoppingCart size={20} /> Add to Cart
              </button>
              <Link 
                to="/cart"
                onClick={handleAddToCart}
                className="flex-1 bg-slate-900 dark:bg-white text-white dark:text-dark-900 font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-2 hover:bg-slate-800 dark:hover:bg-white/90 transition-colors"
              >
                <Zap size={20} className="fill-current" /> Buy Now
              </Link>
            </div>

            {/* Trust Features */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                <Shield className="text-green-500 dark:text-green-400 shrink-0" size={24} />
                <span className="text-sm text-slate-800 dark:text-white/80 leading-tight font-medium">1 Year Brand<br/>Warranty</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                <Truck className="text-brand-sky-dark dark:text-brand-sky shrink-0" size={24} />
                <span className="text-sm text-slate-800 dark:text-white/80 leading-tight font-medium">Store Pickup<br/>Available</span>
              </div>
            </div>

            {/* Specs Summary */}
            <div className="bg-slate-100 dark:bg-dark-800 rounded-2xl p-6 border border-slate-200 dark:border-white/5">
              <h4 className="text-slate-900 dark:text-white font-bold mb-4">Key Specifications</h4>
              <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
                <div>
                  <p className="text-slate-500 dark:text-white/40 mb-1">Processor</p>
                  <p className="text-slate-900 dark:text-white/90 font-medium">{product.specs?.processor}</p>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-white/40 mb-1">Display</p>
                  <p className="text-slate-900 dark:text-white/90 font-medium">{product.specs?.display}</p>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-white/40 mb-1">Camera</p>
                  <p className="text-slate-900 dark:text-white/90 font-medium">{product.specs?.camera}</p>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-white/40 mb-1">Battery</p>
                  <p className="text-slate-900 dark:text-white/90 font-medium">{product.specs?.battery}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description & Reviews tabs could go here */}
      </div>
      <Footer />
    </div>
  )
}
