import { mockReviews } from '../data/mockProducts'

export const reviewService = {
  getReviews: async (productId) => {
    const reviews = productId
      ? mockReviews.filter(r => r.product === productId)
      : mockReviews.filter(r => !r.product)
    return { reviews }
  },
  createReview: async () => {
    return { success: true }
  }
}
