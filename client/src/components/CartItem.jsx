import { Minus, Plus, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function CartItem({ item }) {
  const { updateCart, removeFromCart } = useCart()

  if (!item.product) return null

  return (
    <div className="card p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-6 mb-4">
      {/* Product Image */}
      <Link to={`/products/${item.product._id}`} className="shrink-0 bg-white p-2 rounded-xl w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
        <img 
          src={item.product.images?.[0]} 
          alt={item.product.name} 
          className="w-full h-full object-contain"
        />
      </Link>

      {/* Info & Controls */}
      <div className="flex-1 w-full flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <Link to={`/products/${item.product._id}`}>
            <h3 className="text-white font-bold text-lg hover:text-brand-sky transition-colors line-clamp-1">{item.product.name}</h3>
          </Link>
          <p className="text-white/50 text-sm mt-1">{item.product.brand}</p>
          
          {/* Variant Info */}
          {(item.variant?.ram || item.variant?.storage || item.variant?.color) && (
            <p className="text-white/70 text-xs mt-2 bg-white/5 inline-block px-2 py-1 rounded">
              {[item.variant.ram, item.variant.storage, item.variant.color].filter(Boolean).join(' • ')}
            </p>
          )}

          <div className="mt-3 text-xl font-bold text-brand-gold">
            ₹{item.price.toLocaleString('en-IN')}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-4">
          <div className="flex items-center border border-white/20 rounded-xl overflow-hidden bg-dark-800">
            <button 
              onClick={() => updateCart(item.product._id, item.quantity - 1)}
              className="px-3 py-2 text-white/70 hover:bg-white/10 hover:text-white transition-colors disabled:opacity-50"
              disabled={item.quantity <= 1}
            >
              <Minus size={16} />
            </button>
            <span className="px-4 font-semibold text-white">{item.quantity}</span>
            <button 
              onClick={() => updateCart(item.product._id, item.quantity + 1)}
              className="px-3 py-2 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              disabled={item.quantity >= (item.product.stock || 10)}
            >
              <Plus size={16} />
            </button>
          </div>

          <button 
            onClick={() => removeFromCart(item.product._id)}
            className="flex items-center gap-1 text-sm text-brand-red/80 hover:text-brand-red transition-colors"
          >
            <Trash2 size={16} /> Remove
          </button>
        </div>
      </div>
    </div>
  )
}
