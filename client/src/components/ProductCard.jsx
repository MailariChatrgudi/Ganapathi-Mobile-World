import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'
import StarRating from './StarRating'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    // Default to first variant or basic item
    const variant = product.variants?.[0] || {}
    addToCart(product._id, 1, variant)
  }

  return (
    <Link to={`/products/${product._id}`} className="card group flex flex-col h-full overflow-hidden relative">
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-slate-100 dark:bg-dark-800 flex flex-col justify-center items-center overflow-hidden">
        {/* Badges moved inside image container to ensure they stay on top of the covered image */}
        <div className="absolute top-3 left-3 z-30 flex flex-col gap-2">
          {product.isHotDeal && <span className="badge-hot shadow-glow-red animate-pulse-glow">HOT DEAL</span>}
          {product.discount > 0 && <span className="badge-discount">{product.discount}% OFF</span>}
          {product.stock <= 5 && <span className="badge-limited">Only {product.stock} left!</span>}
        </div>
        
        {/* Glow effect back of phone */}
        <div className="absolute w-32 h-32 bg-brand-sky/20 rounded-full blur-[50px] group-hover:bg-brand-red/20 transition-colors duration-500" />
        
        <img 
          src={product.images[0] || 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=400&fit=crop'} 
          alt={product.name}
          className="relative z-10 object-cover h-full w-full group-hover:scale-110 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-white/40 dark:bg-dark-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center backdrop-blur-sm">
          <button 
            onClick={handleAddToCart}
            className="btn-primary transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2"
          >
            <ShoppingCart size={18} /> Add to Cart
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-brand-sky-dark dark:text-brand-sky text-xs font-bold mb-1 uppercase tracking-wider">{product.brand}</div>
        <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-2 line-clamp-1 group-hover:text-brand-sky-dark dark:group-hover:text-brand-sky transition-colors">{product.name}</h3>
        
        {/* Specs snippet */}
        <div className="text-slate-500 dark:text-white/50 text-xs mb-3 line-clamp-1 font-medium">
          {product.specs?.ram} • {product.specs?.storage} • {product.specs?.battery}
        </div>

        <div className="mt-auto">
          <div className="mb-3">
            <StarRating rating={product.rating} reviews={product.numReviews} />
          </div>
          
          <div className="flex items-end gap-2">
            <span className="price-tag">₹{product.price.toLocaleString('en-IN')}</span>
            {product.mrp > product.price && (
              <span className="price-original mb-1">₹{product.mrp.toLocaleString('en-IN')}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
