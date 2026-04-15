import api from './api'
import { mockReviews } from '../data/mockProducts'

export const reviewService = {
  getReviews: async (productId) => {
    try {
      const params = productId ? { product: productId } : {}
      const { data } = await api.get('/reviews', { params })
      return data
    } catch {
      console.warn('⚠️ Backend offline — using mock reviews')
      const reviews = productId
        ? mockReviews.filter(r => r.product === productId)
        : mockReviews.filter(r => !r.product)
      return { reviews }
    }
  },
  createReview: async (reviewData) => {
    const { data } = await api.post('/reviews', reviewData)
    return data
  }
}
