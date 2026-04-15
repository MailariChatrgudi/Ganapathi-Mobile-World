import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react'
import CartItem from '../components/CartItem'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { cart, itemCount, cartTotal, loading } = useCart()
  const navigate = useNavigate()

  if (loading && !cart?.items?.length) {
    return <div className="min-h-screen pt-20 flex items-center justify-center"><div className="w-10 h-10 border-4 border-brand-sky border-t-transparent rounded-full animate-spin"/></div>
  }

  if (!cart?.items?.length) {
    return (
      <div className="min-h-screen pt-20 flex flex-col">
        <div className="flex-1 max-w-7xl mx-auto px-4 w-full flex flex-col items-center justify-center text-center py-20">
          <div className="w-24 h-24 bg-dark-800 rounded-full flex items-center justify-center mb-6">
            <ShoppingBag size={40} className="text-white/20" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Your cart is empty</h2>
          <p className="text-white/50 mb-8 max-w-md">Looks like you haven't added any premium smartphones or accessories to your cart yet.</p>
          <Link to="/products" className="btn-primary flex items-center gap-2">
            Start Shopping <ArrowRight size={18} />
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <h1 className="text-3xl font-bold text-white mb-8">Shopping Cart ({itemCount} items)</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cart.items.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
          </div>

          {/* Checkout Summary */}
          <div>
            <div className="bg-dark-800 rounded-2xl p-6 border border-white/5 sticky top-24">
              <h2 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-white/70">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Discount</span>
                  <span className="text-green-400">-₹0</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Delivery Charges</span>
                  <span className="text-green-400">FREE</span>
                </div>
              </div>
              
              <div className="border-t border-white/10 pt-4 flex justify-between items-end mb-8">
                <span className="text-lg font-semibold text-white">Total Amount</span>
                <span className="text-3xl font-bold text-brand-gold">₹{cartTotal.toLocaleString('en-IN')}</span>
              </div>

              <button 
                onClick={() => navigate('/checkout')}
                className="w-full btn-primary py-4 flex flex-col items-center gap-1"
              >
                <span className="flex items-center gap-2 font-bold text-lg"><ShieldCheck size={20}/> Checkout Securely</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
