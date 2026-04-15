import { mockProducts } from '../data/mockProducts'

// Helper: apply filters to mock data (mirrors backend logic)
const applyFilters = (products, params = {}) => {
  let result = [...products]
  if (params.featured) result = result.filter(p => p.isFeatured)
  if (params.brand) {
    const brands = params.brand.split(',').map(b => b.toLowerCase())
    result = result.filter(p => brands.includes(p.brand.toLowerCase()))
  }
  if (params.ram) {
    const rams = params.ram.split(',')
    result = result.filter(p => rams.includes(p.specs?.ram))
  }
  if (params.storage) {
    const storages = params.storage.split(',')
    result = result.filter(p => storages.includes(p.specs?.storage))
  }
  if (params.minPrice) result = result.filter(p => p.price >= Number(params.minPrice))
  if (params.maxPrice) result = result.filter(p => p.price <= Number(params.maxPrice))
  if (params.limit) result = result.slice(0, Number(params.limit))
  return result
}

export const productService = {
  getProducts: async (params = {}) => {
    const products = applyFilters(mockProducts, params)
    return { products, total: products.length }
  },

  getProduct: async (id) => {
    const product = mockProducts.find(p => p._id === id) || mockProducts[0]
    return { product }
  },

  filterProducts: async (filters) => {
    const products = applyFilters(mockProducts, filters)
    return { products, total: products.length }
  }
}
