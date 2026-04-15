import api from './api'

export const orderService = {
  createOrder: async (orderData) => {
    const { data } = await api.post('/orders/create', orderData)
    return data
  },
  getMyOrders: async () => {
    const { data } = await api.get('/orders')
    return data
  },
  getOrder: async (id) => {
    const { data } = await api.get(`/orders/${id}`)
    return data
  }
}
