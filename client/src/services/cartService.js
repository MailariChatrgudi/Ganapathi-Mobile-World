import api from './api'

export const cartService = {
  getCart: async () => {
    const { data } = await api.get('/cart')
    return data
  },
  addToCart: async (productId, quantity, variant) => {
    const { data } = await api.post('/cart/add', { productId, quantity, variant })
    return data
  },
  updateCart: async (productId, quantity) => {
    const { data } = await api.put(`/cart/update/${productId}`, { quantity })
    return data
  },
  removeFromCart: async (productId) => {
    const { data } = await api.delete(`/cart/remove/${productId}`)
    return data
  },
  clearCart: async () => {
    const { data } = await api.delete('/cart/clear')
    return data
  }
}
