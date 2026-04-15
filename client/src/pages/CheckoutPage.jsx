import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock, Truck, CreditCard } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import { orderService } from '../services/orderService'
import toast from 'react-hot-toast'
import Footer from '../components/Footer'

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    addressLine: '',
    city: 'Koppal',
    state: 'Karnataka',
    pincode: '583231',
    paymentMethod: 'COD'
  })

  // Basic redirect if cart is empty
  if (!cart?.items?.length) {
    navigate('/cart')
    return null
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const orderData = {
        items: cart.items.map(i => ({
          product: i.product._id,
          name: i.product.name,
          image: i.product.images[0],
          price: i.price,
          quantity: i.quantity,
          variant: i.variant
        })),
        shippingAddress: {
          name: formData.name, phone: formData.phone,
          addressLine: formData.addressLine, city: formData.city,
          state: formData.state, pincode: formData.pincode
        },
        paymentMethod: formData.paymentMethod,
        subtotal: cartTotal,
        shippingCharge: 0,
        total: cartTotal
      }
      
      const res = await orderService.createOrder(orderData)
      toast.success('Order placed successfully! 🎉')
      clearCart()
      navigate('/orders')
    } catch (err) {
      toast.error('Failed to place order')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-20 flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <h1 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <Lock className="text-brand-gold" /> Secure Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Shipping */}
              <div className="bg-dark-800 rounded-2xl p-6 border border-white/5">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Truck size={20}/> Delivery Address</h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-sm text-white/70 mb-1">Full Name</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className="input-field" />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-sm text-white/70 mb-1">Phone Number</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="input-field" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm text-white/70 mb-1">Street Address</label>
                    <input type="text" name="addressLine" required value={formData.addressLine} onChange={handleChange} className="input-field" />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-sm text-white/70 mb-1">City</label>
                    <input type="text" name="city" required value={formData.city} onChange={handleChange} className="input-field" />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-sm text-white/70 mb-1">PIN Code</label>
                    <input type="text" name="pincode" required value={formData.pincode} onChange={handleChange} className="input-field" />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="bg-dark-800 rounded-2xl p-6 border border-white/5">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><CreditCard size={20}/> Payment Method</h2>
                <div className="space-y-3">
                  {['Store Pickup / Pay at Store', 'Cash on Delivery (COD)'].map(method => (
                    <label key={method} className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${formData.paymentMethod === method ? 'border-brand-sky bg-brand-sky/10' : 'border-white/10 hover:border-white/20 hover:bg-white/5'}`}>
                      <input type="radio" name="paymentMethod" value={method} checked={formData.paymentMethod === method} onChange={handleChange} className="accent-brand-sky w-4 h-4" />
                      <span className="text-white font-medium">{method}</span>
                    </label>
                  ))}
                  <div className="p-4 rounded-xl border border-white/5 bg-white/5 opacity-50 flex items-center justify-between cursor-not-allowed">
                     <span className="text-white font-medium">Online Payment (UPI/Card)</span>
                     <span className="text-xs font-bold bg-dark-900 px-2 py-1 rounded text-white/50">Coming Soon</span>
                  </div>
                </div>
              </div>

              <button type="submit" disabled={loading} className="w-full btn-primary py-4 text-lg">
                {loading ? 'Processing...' : 'Place Order Now'}
              </button>
            </form>
          </div>

          {/* Cart Summary */}
          <div>
            <div className="bg-dark-800 rounded-2xl p-6 border border-white/5 sticky top-24">
              <h2 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Order Summary</h2>
              
              <div className="space-y-4 max-h-[40vh] overflow-y-auto custom-scrollbar pr-2 mb-6">
                {cart.items.map(item => (
                  <div key={item._id} className="flex gap-4">
                     <img src={item.product.images[0]} alt={item.product.name} className="w-16 h-16 object-contain bg-white rounded-xl p-1" />
                     <div className="flex-1">
                        <p className="text-white font-medium line-clamp-1">{item.product.name}</p>
                        <p className="text-white/50 text-sm">Qty: {item.quantity}</p>
                     </div>
                     <div className="text-brand-gold font-bold">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                     </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 mb-6 border-t border-white/10 pt-6">
                <div className="flex justify-between text-white/70">
                  <span>Subtotal</span><span>₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Delivery Charges</span><span className="text-green-400">FREE</span>
                </div>
              </div>
              
              <div className="border-t border-white/10 pt-4 flex justify-between items-end">
                <span className="text-lg font-semibold text-white">Total Amount</span>
                <span className="text-3xl font-bold text-brand-gold">₹{cartTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
