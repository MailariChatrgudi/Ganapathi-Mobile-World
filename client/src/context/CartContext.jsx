import { createContext, useContext, useState, useEffect } from 'react'
import { cartService } from '../services/cartService'
import { useAuth } from './AuthContext'
import toast from 'react-hot-toast'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], total: 0 })
  const [loading, setLoading] = useState(false)
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) fetchCart()
    else setCart({ items: [], total: 0 })
  }, [isAuthenticated])

  const fetchCart = async () => {
    try {
      setLoading(true)
      const data = await cartService.getCart()
      setCart(data.cart)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const addToCart = async (productId, quantity = 1, variant = {}) => {
    try {
      const data = await cartService.addToCart(productId, quantity, variant)
      setCart(data.cart)
      toast.success('Added to cart! 🛒')
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to add to cart')
    }
  }

  const updateCart = async (productId, quantity) => {
    try {
      const data = await cartService.updateCart(productId, quantity)
      setCart(data.cart)
    } catch (err) {
      toast.error('Failed to update cart')
    }
  }

  const removeFromCart = async (productId) => {
    try {
      const data = await cartService.removeFromCart(productId)
      setCart(data.cart)
      toast.success('Item removed from cart')
    } catch (err) {
      toast.error('Failed to remove item')
    }
  }

  const clearCart = () => setCart({ items: [], total: 0 })

  const itemCount = cart?.items?.reduce((sum, i) => sum + i.quantity, 0) || 0
  const cartTotal = cart?.items?.reduce((sum, i) => sum + i.price * i.quantity, 0) || 0

  return (
    <CartContext.Provider value={{ cart, loading, addToCart, updateCart, removeFromCart, clearCart, fetchCart, itemCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
